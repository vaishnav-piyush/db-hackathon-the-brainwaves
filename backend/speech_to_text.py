from google.cloud import speech


def speech_to_text(pathToAudioFile) -> speech.RecognizeResponse:
    config = speech.RecognitionConfig(
        language_code="en",
    )
    audio = speech.RecognitionAudio(
        uri= pathToAudioFile,
    )
    client = speech.SpeechClient()

    # Synchronous speech recognition request
    response = client.recognize(config=config, audio=audio)

    return response

def return_transcript(response: speech.RecognizeResponse):
    result = response.results[0]
    best_alternative = result.alternatives[0]
    print("-" * 80)
    print(f"language_code: {result.language_code}")
    print(f"transcript:    {best_alternative.transcript}")
    print(f"confidence:    {best_alternative.confidence:.0%}")
    return best_alternative.transcript

def print_result(result: speech.SpeechRecognitionResult):
    best_alternative = result.alternatives[0]
    print("-" * 80)
    print(f"language_code: {result.language_code}")
    print(f"transcript:    {best_alternative.transcript}")
    print(f"confidence:    {best_alternative.confidence:.0%}")

def print_response(response: speech.RecognizeResponse):
    for result in response.results:
        print_result(result)

# response = speech_to_text("gs://cloud-samples-data/speech/brooklyn_bridge.flac")
# print_response(response)

