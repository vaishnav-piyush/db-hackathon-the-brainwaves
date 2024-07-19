import Link from "next/link"
import { Button } from "@/components/ui/button"
import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios';

const Landing: React.FC = () => {
  const questions = [
    'Hello, tell me about your dependent with dementia',
    'What are the biggest challenges you face?',
    'How do you manage their care?',
    // Add more questions here
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    if (currentQuestion >= questions.length) {
      // Reroute to another page when the last question is asked
      window.location.href = '/another-page';
    }
  }, [currentQuestion]);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorder.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/wav' });
        setAudioBlob(audioBlob);
        sendAudioToAPI(audioBlob);
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error('Error accessing microphone:', error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      // Wait a few seconds before updating the question
      setTimeout(() => {
        setCurrentQuestion(currentQuestion + 1);
      }, 2000);
    }
  };

  const sendAudioToAPI = async (audioBlob: Blob) => {
    try {
      const formData = new FormData();
      formData.append('audio', audioBlob, 'recorded_audio.wav');

      const response = await axios.post('http://127.0.0.1:8080/upload', formData, {
        headers: { 
          'Content-Type': 'multipart/form-data'
        },
      });

      // Assuming the API returns an audio file URL
      const responseAudioUrl = response.data.audioUrl;
    } catch (error) {
      console.error('Error sending audio to API:', error);
    }
  };

  const handleRecordClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col items-center justify-center bg-[#ffedf9] text-foreground">
      <header className="absolute top-6 left-1/2 -translate-x-1/2">
        <Link href="#" prefetch={false}>
          <MountainIcon className="h-8 w-8" />
          <span className="sr-only">Acme Inc</span>
        </Link>
      </header>
      <div className="container px-4 py-12 text-center md:px-6 lg:py-24">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          {questions[currentQuestion]}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-xl">
          We're here to help you navigate the challenges of caring for a loved one with dementia. Share your story and
          let us provide personalized support and resources.
        </p>
        <div className="mt-8 flex justify-center items-center gap-2">
          <Button onClick={handleRecordClick} variant="outline" size="lg" className="bg-[#06B0B9] text-primary-foreground">
            {isRecording ? 'Stop Recording' : 'Start Recording'}
            <MicIcon className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;