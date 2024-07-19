import requests

api_key = 'eb9de803585c4947a1df2af2f11df9e0'
api_url = 'https://southcentralus.api.cognitive.microsoft.com/openai/deployments/gpt-4o/chat/completions?api-version=2024-02-01'

# Initialize the conversation history
conversation_history = []

def chat_with_openai(user_input):
    global conversation_history

    # Append the user input to the conversation history
    conversation_history.append({"role": "user", "content": user_input})

    # Create the API request payload
    payload = {
        "model": "gpt-4",  # or the model you are using
        "messages": conversation_history
    }

    headers = {
        'api-key': f'{api_key}',
        'Content-Type': 'application/json'
    }

    # Send the request to the OpenAI API
    response = requests.post(api_url, json=payload, headers=headers)

    if response.status_code == 200:
        data = response.json()
        assistant_response = data['choices'][0]['message']['content']

        # Append the assistant's response to the conversation history
        conversation_history.append({"role": "assistant", "content": assistant_response})

        return assistant_response
    else:
        print(f"Error: {response.status_code} - {response.text}")
        return None

# Example of a chat session
# user_input = "Can you summarize this in a human way: Question: Tell me about your dependent on Dementia? Answer: Hi, I am Piyush. I am a 50 years old male, looking after my 85 years old father."
# response = chat_with_openai(user_input)
# print("Assistant:", response)
#
# user_input = "Can you summarize this based on my previous questions: Question: How is their short term and long term memory and how well can they communicate? Answer: My dad's short-term memory is poor; he often forgets recent events and conversations. His long-term memory is somewhat better, but he struggles with specific details. In terms of communication, he has difficulty finding the right words and understanding complex instructions."
# response = chat_with_openai(user_input)
# print("Assistant:", response)
#
# user_input = "Can you provide a personalized healthcare plan for my dad?"
# response = chat_with_openai(user_input)
# print("Assistant:", response)
