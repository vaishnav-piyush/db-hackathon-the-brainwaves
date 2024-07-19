from flask import Flask, jsonify, request
from google.cloud import storage
from flask_cors import CORS
from speech_to_text import speech_to_text, return_transcript
from cachetools import TTLCache
from openai import chat_with_openai
import re
import json
from datetime import datetime, timedelta

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes


@app.route("/")
def hello_world():
    return jsonify({"message": "Hello, tell me about your dependent with dementia"})


# Initialize Google Cloud Storage client
storage_client = storage.Client()
bucket_name = 'staging.hack-team-the-brainwaves.appspot.com'  # Replace with your bucket name
cache = TTLCache(maxsize=8, ttl=timedelta(hours=12), timer=datetime.now)
cache['data'] = ''


@app.route('/upload', methods=['POST'])
def upload():
    if 'audio' not in request.files:
        return jsonify({"error": "No audio part in the request"}), 400

    audio = request.files['audio']
    if audio.filename == '':
        return jsonify({"error": "No selected audio file"}), 400

    if audio.content_type != 'audio/wav':
        return jsonify({"error": "Invalid file type"}), 400

    # Create a new blob and upload the file's content
    bucket = storage_client.bucket(bucket_name)
    print(audio.filename)
    blob = bucket.blob(audio.filename)
    blob.upload_from_file(audio, content_type=audio.content_type)

    response = speech_to_text("gs://staging.hack-team-the-brainwaves.appspot.com/recorded_audio.wav")
    # print_response(response)
    transcript = return_transcript(response)

    cache['data'] = cache['data'] + '\\n' + transcript + '\\n' + "Please respond in less than 100 characters."

    print(cache['data'])

    response = chat_with_openai(cache['data'])
    print(response)

    cache['data'] = cache['data'] + "\\n" + response

    return jsonify({"success": True, "filename": audio.filename, "answer": response}), 200


@app.route('/careplan', methods=['GET'])
def careplan():
    question = "Based on this patient data, can you give me a personalised detailed careplan? Can you format the response as a Json with three categories 'Nutritional Plan', 'Exercise and Physical Exercise' and 'Additional Support Services'"
    cache['data'] = cache['data'] + "\\n" + question
    response = chat_with_openai(cache['data'])
    json_obj = extract_json(response)
    # Print the extracted JSON object
    if json_obj:
        print(json.dumps(json_obj, indent=4))
    cache['data'] = ''
    return jsonify(json_obj), 200

@app.route('/refresh', methods=['GET'])
def refresh():
    print("Before: " + cache['data'])
    print("Cache Nullified")
    cache['data'] = ''
    print("After: " + cache['data'])
    return jsonify({"success": True}), 200

def extract_json(text):
    # Regular expression to find JSON object
    json_regex = re.compile(r'\{.*\}', re.DOTALL)

    match = json_regex.search(text)
    if match:
        json_str = match.group()
        try:
            json_obj = json.loads(json_str)
            return json_obj
        except json.JSONDecodeError as e:
            print(f"Error decoding JSON: {e}")
            return None
    else:
        print("No JSON object found in the text.")
        return None

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
