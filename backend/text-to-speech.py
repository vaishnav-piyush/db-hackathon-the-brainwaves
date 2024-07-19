from google.cloud import texttospeech

def text_to_speech(text, output_file):
    # Initialize the client
    client = texttospeech.TextToSpeechClient()

    # Set the text input to be synthesized
    synthesis_input = texttospeech.SynthesisInput(text=text)

    # Build the voice request, select the language code ("en-US") and the ssml voice gender ("neutral")
    voice = texttospeech.VoiceSelectionParams(
        language_code="en-US",
        ssml_gender=texttospeech.SsmlVoiceGender.NEUTRAL
    )

    # Select the type of audio file you want returned
    audio_config = texttospeech.AudioConfig(
        audio_encoding=texttospeech.AudioEncoding.MP3
    )

    # Perform the text-to-speech request on the text input with the selected voice parameters and audio file type
    response = client.synthesize_speech(
        input=synthesis_input,
        voice=voice,
        audio_config=audio_config
    )

    # Write the response to the output file
    with open(output_file, "wb") as out:
        out.write(response.audio_content)
        print(f'Audio content written to file "{output_file}"')

def read_text_file(file_path):
    # Open the file in read mode
    with open(file_path, 'r') as file:
        # Read all the lines in the file
        content = file.read()

    return content

# # Text to be converted to speech
text = read_text_file("Question4.txt")
#
# # Output file to save the audio
output_file = "Question4.mp3"

# Call the text_to_speech function
text_to_speech(text, output_file)