/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/fRKJ8glquTL
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/
'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useRouter } from 'next/router';

export default function Dashboard() {
  // const router = useRouter();

  // const handleCareplanClick = () => {
  //   router.push('/careplan');
  // };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 p-4 bg-white border-r">
        <div className="flex items-center mb-8">
          <img src="/placeholder.svg" alt="CareTriangle" className="w-10 h-10 mr-2" />
          <span className="text-xl font-bold">CareTriangle</span>
        </div>
        <nav className="space-y-4">
          <Link href="#" className="flex items-center p-2 text-white bg-pink-600 rounded-md" prefetch={false}>
            <LayoutDashboardIcon className="w-5 h-5 mr-2" />
            Dashboard
          </Link>
          <Link href="/careplan" className="flex items-center p-2 text-gray-600 rounded-md" prefetch={false}>
            <HeartIcon className="w-5 h-5 mr-2" />
            Care Plan
          </Link>
          <Link href="#" className="flex items-center p-2 text-gray-600 rounded-md" prefetch={false}>
            <UsersIcon className="w-5 h-5 mr-2" />
            Community
          </Link>
          <Link href="#" className="flex items-center p-2 text-gray-600 rounded-md" prefetch={false}>
            <CircleAlertIcon className="w-5 h-5 mr-2" />
            Symptoms
          </Link>
          <Link href="#" className="flex items-center p-2 text-gray-600 rounded-md" prefetch={false}>
            <SettingsIcon className="w-5 h-5 mr-2" />
            Settings
          </Link>
          <Link href="#" className="flex items-center p-2 text-gray-600 rounded-md" prefetch={false}>
            <LogOutIcon className="w-5 h-5 mr-2" />
            Sign Out
          </Link>
        </nav>
        <div className="mt-8 p-4 bg-teal-100 rounded-md">
          <div className="flex items-center mb-4">
            <img src="/placeholder.svg" alt="Talk with Eleanor" className="w-10 h-10 mr-2" />
            <span className="text-lg font-bold">Talk with Eleanor</span>
          </div>
          <p className="mb-4 text-gray-600">Your own personal nurse. Press to start talking or typing.</p>
          <Button className="w-full">Connect</Button>
        </div>
      </aside>
      <main className="flex-1 p-8 bg-teal-50">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <Input type="search" placeholder="Search here..." className="w-64" />
            <Button variant="ghost" size="icon">
              <SunIcon className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <FileTypeIcon className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <BellIcon className="w-5 h-5" />
            </Button>
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" />
              <AvatarFallback>J</AvatarFallback>
            </Avatar>
            <span className="text-gray-600">John</span>
          </div>
        </header>
        <section className="mb-8 p-4 bg-white rounded-md shadow-md">
          <h3 className="text-lg font-bold">Medication</h3>
          <div className="grid grid-cols-4 gap-4 mt-4">
            <div className="p-2 bg-gray-100 rounded-md">
              <p className="font-bold">Morning</p>
              <div className="mt-2">
                <Badge variant="default">Donepezil</Badge>
                <p>1 pill</p>
              </div>
              <div className="mt-2">
                <Badge variant="default">Memantine</Badge>
                <p>1 pill</p>
              </div>
            </div>
            <div className="p-2 bg-gray-100 rounded-md">
              <p className="font-bold">Lunch</p>
              <div className="mt-2">
                <Badge variant="default">Donepezil</Badge>
                <p>1 pill</p>
              </div>
            </div>
            <div className="p-2 bg-gray-100 rounded-md">
              <p className="font-bold">Tea</p>
              <div className="mt-2">
                <Badge variant="default">Donepezil</Badge>
                <p>1 pill</p>
              </div>
            </div>
            <div className="p-2 bg-gray-100 rounded-md">
              <p className="font-bold">Evening Meal</p>
              <div className="mt-2">
                <Badge variant="default">Donepezil</Badge>
                <p>1 pill</p>
              </div>
              <div className="mt-2">
                <Badge variant="default">Memantine</Badge>
                <p>1 pill</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-8 p-4 bg-white rounded-md shadow-md">
          <h3 className="text-lg font-bold">How is Margaret feeling today?</h3>
          <p className="text-gray-600">Logging her mood will help us create better care plans for you</p>
          <div className="grid grid-cols-3 gap-4 mt-4">
            <Button variant="outline">Upset</Button>
            <Button variant="outline">Sense of Humor</Button>
            <Button variant="outline">Euphoric</Button>
            <Button variant="outline">Angry</Button>
            <Button variant="outline">Talkative</Button>
            <Button variant="outline">Calm</Button>
            <Button variant="outline">Sad</Button>
            <Button variant="outline">Affectionate</Button>
            <Button variant="outline">Relaxed</Button>
            <Button variant="outline">Depressed</Button>
            <Button variant="outline">Non-Talkative</Button>
            <Button variant="outline">Confused</Button>
          </div>
        </section>
        <section className="grid grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-md shadow-md">
            <h3 className="text-lg font-bold">Upcoming Appointments</h3>
            <div className="mt-4">
              <div className="flex items-center justify-between py-2 border-b">
                <span>16 Tue</span>
                <span>Neurologist</span>
              </div>
              <div className="flex items-center justify-between py-2 border-b">
                <span>17 Wed</span>
                <span>Dr. Adams</span>
              </div>
              <div className="flex items-center justify-between py-2">
                <span>18 Thu</span>
                <span>HCA Canary Wharf</span>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white rounded-md shadow-md">
            <h3 className="text-lg font-bold">Do you need support?</h3>
            <p className="mt-4 text-gray-600">
              Reach out to Dementia UK through our dedicated phone line to speak to one of our qualified nurses
            </p>
            <Button className="mt-4 w-full">Call 077999034</Button>
            <p className="mt-4 text-gray-600">
              Book a virtual consultation via our live calendar. The consultation will be with one of our nurses and
              will help with any questions or advice.
            </p>
            <Button className="mt-4 w-full">Book Consultation</Button>
          </div>
        </section>
      </main>
    </div>
  )
}

function BellIcon(props) {
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
  )
}


function CircleAlertIcon(props) {
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
      <line x1="12" x2="12" y1="8" y2="12" />
      <line x1="12" x2="12.01" y1="16" y2="16" />
    </svg>
  )
}


function FileTypeIcon(props) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M9 13v-1h6v1" />
      <path d="M12 12v6" />
      <path d="M11 18h2" />
    </svg>
  )
}


function HeartIcon(props) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function LayoutDashboardIcon(props) {
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
      <rect width="7" height="9" x="3" y="3" rx="1" />
      <rect width="7" height="5" x="14" y="3" rx="1" />
      <rect width="7" height="9" x="14" y="12" rx="1" />
      <rect width="7" height="5" x="3" y="16" rx="1" />
    </svg>
  )
}


function LogOutIcon(props) {
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
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}


function SettingsIcon(props) {
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  )
}


function SunIcon(props) {
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
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2" />
      <path d="M12 20v2" />
      <path d="m4.93 4.93 1.41 1.41" />
      <path d="m17.66 17.66 1.41 1.41" />
      <path d="M2 12h2" />
      <path d="M20 12h2" />
      <path d="m6.34 17.66-1.41 1.41" />
      <path d="m19.07 4.93-1.41 1.41" />
    </svg>
  )
}


function UsersIcon(props) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  )
}


function XIcon(props) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
