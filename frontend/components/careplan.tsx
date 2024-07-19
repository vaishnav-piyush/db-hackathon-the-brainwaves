"use client";

import { useEffect, useState } from 'react';
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import "./careplan.module.css"


export default function Careplan() {
    const [data, setData] = useState<any>(null);
  
    useEffect(() => {
      // Fetch data from the endpoint when the component mounts
      fetch('http://localhost:8080/careplan')
        .then(response => response.json())
        .then(data => setData(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    const renderContent = (content: any) => {
      if (typeof content === 'string') {
        return <p className="text-gray-700 mb-2">{content}</p>;
      }
      if (Array.isArray(content)) {
        return (
          <ul className="list-disc pl-5 mb-4">
            {content.map((item, index) => (
              <li key={index} className="text-gray-700 mb-1">
                {typeof item === 'string' ? item : renderContent(item)}
              </li>
            ))}
          </ul>
        );
      }
      if (typeof content === 'object') {
        return (
          <Accordion type="single" collapsible className="space-y-4">
            {Object.entries(content).map(([key, value]) => (
              <AccordionItem key={key} value={key} className="border border-gray-300 rounded-md bg-white shadow-sm">
                <AccordionTrigger className="px-4 py-2 text-xl font-semibold text-gray-800 bg-gray-100 border-b border-gray-300 cursor-pointer hover:bg-gray-200">
                  {key}
                </AccordionTrigger>
                <AccordionContent className="p-4">
                  {renderContent(value)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        );
      }
      return null;
    };
  
    return (
      <div className="flex min-h-screen">
        <aside className="w-64 bg-white border-r">
          <div className="p-4 border-b">
            <div className="flex items-center gap-2">
              <LogInIcon className="h-6 w-6" />
              <span className="text-xl font-bold">CareTriangle</span>
            </div>
          </div>
          <nav className="p-4 space-y-4">
            <Link href="#" className="flex items-center gap-2 text-gray-700 hover:text-gray-900" prefetch={false}>
              <LayoutDashboardIcon className="h-6 w-6" />
              <span>Dashboard</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 text-white bg-pink-500 rounded-md p-2 hover:bg-pink-600" prefetch={false}>
              <GanttChartIcon className="h-6 w-6" />
              <span>Care Plan</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 text-gray-700 hover:text-gray-900" prefetch={false}>
              <GroupIcon className="h-6 w-6" />
              <span>Community</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 text-gray-700 hover:text-gray-900" prefetch={false}>
              <BugIcon className="h-6 w-6" />
              <span>Symptoms</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 text-gray-700 hover:text-gray-900" prefetch={false}>
              <SettingsIcon className="h-6 w-6" />
              <span>Settings</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 text-gray-700 hover:text-gray-900" prefetch={false}>
              <LogOutIcon className="h-6 w-6" />
              <span>Sign Out</span>
            </Link>
          </nav>
          <div className="p-4 mt-auto">
            <Card className="bg-teal-500 text-white">
              <CardContent>
                <h3 className="text-lg font-bold">Talk with Eleanor</h3>
                <p>Your own personal nurse. Press to start talking or typing.</p>
                <Button className="mt-2 bg-white text-teal-500">Connect</Button>
              </CardContent>
            </Card>
          </div>
        </aside>
        <main className="flex-1 bg-gray-100 p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Your Personalised Care Plan</h1>
          {data ? (
            <Accordion type="single" collapsible className="space-y-4">
              {Object.entries(data).map(([sectionTitle, subsection]) => (
                <AccordionItem key={sectionTitle} value={sectionTitle} className="border border-gray-300 rounded-md bg-white shadow-sm">
                  <AccordionTrigger className="px-4 py-2 text-2xl font-semibold text-gray-800 bg-gray-100 border-b border-gray-300 cursor-pointer hover:bg-gray-200">
                    {sectionTitle}
                  </AccordionTrigger>
                  <AccordionContent className="p-4">
                    {renderContent(subsection)}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ) : (
            <p className="text-gray-600">Loading...</p>
          )}
        </main>
      </div>
    );
  }

  // Define your icons here
function BellIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
        <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
      </svg>
    );
  }

function BugIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 2 1.88 1.88" />
      <path d="M14.12 3.88 16 2" />
      <path d="M20 8v7a2 2 0 0 1-2 2h-3v5a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-5H6a2 2 0 0 1-2-2V8" />
      <path d="M18 2a2 2 0 0 1-4 0" />
      <path d="M6 2a2 2 0 0 0 4 0" />
      <path d="M12 11v3" />
    </svg>
  );
}

function LogInIcon(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
        <polyline points="10 17 15 12 10 7" />
        <line x1="15" x2="3" y1="12" y2="12" />
      </svg>
    );
  }

function LogOutIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="M16 17l5-5-5-5" />
      <path d="M21 12H9" />
    </svg>
  );
}

function GanttChartIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 13h6" />
      <path d="M6 17h2" />
      <path d="M12 17h10" />
      <path d="M10 13h10" />
      <path d="M10 9h10" />
      <path d="M6 9h2" />
      <path d="M2 9h2" />
      <path d="M2 17h2" />
    </svg>
  );
}

function LayoutDashboardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="7" height="9" />
      <rect x="14" y="3" width="7" height="5" />
      <rect x="14" y="12" width="7" height="9" />
      <rect x="3" y="16" width="7" height="5" />
    </svg>
  );
}

function GroupIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7h10" />
      <path d="M12 7v12" />
      <path d="M5 19h14" />
      <path d="M7 12h10" />
      <path d="M17 5v16" />
      <path d="M7 5v16" />
    </svg>
  );
}

function ScalingIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="12" y1="2" x2="12" y2="22" />
    </svg>
  );
}

function SettingsIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .4 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.4 1.7 1.7 0 0 0-1 .6l-.1.1a2 2 0 0 1-3.3-2.2l.1-.1c.3-.3.5-.7.6-1a1.7 1.7 0 0 0-.4-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1c.5.5 1.2.6 1.8.4s1-.6 1.2-1.2a1.7 1.7 0 0 0-.4-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1c.5.5.6 1.2.4 1.8s-.6 1-.6 1.2a1.7 1.7 0 0 0 1.8.4zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
    </svg>
  );
}
