from flask import Flask, request, jsonify
from google.cloud import storage
from flask_cors import CORS
from speech_to_text import speech_to_text, return_transcript, print_response

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Initialize Google Cloud Storage client
storage_client = storage.Client()
bucket_name = 'staging.hack-team-the-brainwaves.appspot.com'  # Replace with your bucket name

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
    print(transcript)

    return jsonify({"success": True, "filename": audio.filename, "answer": transcript}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080, debug=True)
