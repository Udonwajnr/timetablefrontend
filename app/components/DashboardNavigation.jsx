
"use client"
import Link from "next/link"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

export default function DashboardNavigation() {
  const logOut=()=>[
    localStorage.removeItem("userId")
  ]
  return (
    <header className="bg-background border-b">
      <div className="container px-4 py-3 md:px-6 md:py-4 flex items-center justify-between">
        <Link href="#" className="flex items-center gap-2 text-lg font-semibold" prefetch={false}>
          <BookIcon className="w-6 h-6" />
          <span>Time Table</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/dashboard/courses" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Courses
          </Link>
          <Link href="/dashboard/timetable" className="text-muted-foreground hover:text-foreground" prefetch={false}>
            Timetable
          </Link>
          <Link href="/dashboard/createcourse" className="text-primary hover:text-primary-foreground" prefetch={false}>
            Create Course
          </Link>
          <button onClick={logOut}>Logout</button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="rounded-full">
                <MenuIcon className="w-5 h-5" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-4">
              <nav className="grid gap-4">
                <Link
                  href="/dashboard/courses"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <BookIcon className="w-5 h-5" />
                  <span>Courses</span>
                </Link>
                <Link
                  href="/dashboard/timetable"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground"
                  prefetch={false}
                >
                  <CalendarIcon className="w-5 h-5" />
                  <span>Timetable</span>
                </Link>
                <Link
                  href="/dashboard/createcourse"
                  className="flex items-center gap-3 text-primary hover:text-primary-foreground"
                  prefetch={false}
                >
                  <PlusIcon className="w-5 h-5" />
                  <span>Create Course</span>
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

function BookIcon(props) {
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
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  )
}


function CalendarIcon(props) {
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function MenuIcon(props) {
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
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PlusIcon(props) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}