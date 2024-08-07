import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";

const side2 = (
  <div className="flex flex-col border-r bg-background p-4 sm:p-6">
    <div className="flex items-center justify-between">
      <Link href="#" className="flex items-center gap-2" prefetch={false}>
        <MountainIcon className="h-6 w-6" />
        <span className="font-semibold">Acme Inc</span>
      </Link>
      <Button size="icon" variant="ghost" className="lg:hidden">
        <MenuIcon className="h-6 w-6" />
        <span className="sr-only">Toggle Menu</span>
      </Button>
    </div>
    <nav className="mt-6 flex flex-col space-y-1">
      <Link
        href="#"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
        prefetch={false}
      >
        <HomeIcon className="h-5 w-5" />
        Home
      </Link>
      <Link
        href="#"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
        prefetch={false}
      >
        <FileIcon className="h-5 w-5" />
        Pages
      </Link>
      <Link
        href="#"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
        prefetch={false}
      >
        <LayoutGridIcon className="h-5 w-5" />
        Components
      </Link>
      <Link
        href="#"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
        prefetch={false}
      >
        <UsersIcon className="h-5 w-5" />
        Team
      </Link>
      <Link
        href="#"
        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
        prefetch={false}
      >
        <SettingsIcon className="h-5 w-5" />
        Settings
      </Link>
    </nav>
    <div className="mt-auto">
      <div className="relative mt-6">
        <Input
          type="search"
          placeholder="Search..."
          className="w-full rounded-md bg-muted/40 pl-8 pr-4 py-2 text-sm"
        />
        <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      </div>
    </div>
  </div>
);

export default function Deneme() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="flex min-h-screen w-full">
      <div className="flex flex-col border-r bg-background p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <Link href="#" className="flex items-center gap-2" prefetch={false}>
            <MountainIcon className="h-6 w-6" />
            <span className="font-semibold">Acme Inc</span>
          </Link>
          <Button size="icon" variant="ghost" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </div>
        <nav className="mt-6 flex flex-col space-y-1">
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
            prefetch={false}
            onClick={() => {
              setOpen(!isOpen);
            }}
          >
            <HomeIcon className="h-5 w-5" />
            Home
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <FileIcon className="h-5 w-5" />
            Pages
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <LayoutGridIcon className="h-5 w-5" />
            Components
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <UsersIcon className="h-5 w-5" />
            Team
          </Link>
          <Link
            href="#"
            className="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <SettingsIcon className="h-5 w-5" />
            Settings
          </Link>
        </nav>
        <div className="mt-auto">
          <div className="relative mt-6">
            <Input
              type="search"
              placeholder="Search..."
              className="w-full rounded-md bg-muted/40 pl-8 pr-4 py-2 text-sm"
            />
            <SearchIcon className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
      {isOpen && side2}
      <div className="flex flex-col border-l bg-background p-4 sm:p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Profile</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button size="icon" variant="ghost">
                <MoveHorizontalIcon className="h-5 w-5" />
                <span className="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Edit Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="mt-4 flex items-center gap-4">
          <Avatar>
            <AvatarImage src="/placeholder-user.jpg" alt="Avatar" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="text-sm font-semibold">John Doe</h3>
            <p className="text-sm text-muted-foreground">john@acme.com</p>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Recent Posts</h2>
          <div className="mt-4 space-y-4">
            <Link
              href="#"
              className="flex items-center gap-4 rounded-md bg-muted/40 p-3 transition-colors hover:bg-muted"
              prefetch={false}
            >
              <div className="flex-shrink-0">
                <img
                  src="/placeholder.svg"
                  alt="Post Thumbnail"
                  width={64}
                  height={64}
                  className="rounded-md"
                  style={{ aspectRatio: "64/64", objectFit: "cover" }}
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold">
                  Introducing the New Product Line
                </h3>
                <p className="text-sm text-muted-foreground">
                  Learn more about our latest product offerings and how they can
                  benefit your business.
                </p>
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center gap-4 rounded-md bg-muted/40 p-3 transition-colors hover:bg-muted"
              prefetch={false}
            >
              <div className="flex-shrink-0">
                <img
                  src="/placeholder.svg"
                  alt="Post Thumbnail"
                  width={64}
                  height={64}
                  className="rounded-md"
                  style={{ aspectRatio: "64/64", objectFit: "cover" }}
                />
              </div>
              <div>
                <h3 className="text-sm font-semibold">
                  Acme Inc Wins Industry Award
                </h3>
                <p className="text-sm text-muted-foreground">
                  Our team is honored to be recognized for our commitment to
                  innovation and excellence.
                </p>
              </div>
            </Link>
          </div>
        </div>
        <div className="mt-6">
          <h2 className="text-lg font-semibold">Newsletter</h2>
          <form className="mt-4 space-y-4">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md bg-muted/40 px-4 py-2 text-sm"
            />
            <Button type="submit" className="w-full">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

function FileIcon(props: any) {
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
    </svg>
  );
}

function HomeIcon(props: any) {
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
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LayoutGridIcon(props: any) {
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
      <rect width="7" height="7" x="3" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="3" rx="1" />
      <rect width="7" height="7" x="14" y="14" rx="1" />
      <rect width="7" height="7" x="3" y="14" rx="1" />
    </svg>
  );
}

function MenuIcon(props: any) {
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
  );
}

function MountainIcon(props: any) {
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
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function MoveHorizontalIcon(props: any) {
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
      <polyline points="18 8 22 12 18 16" />
      <polyline points="6 8 2 12 6 16" />
      <line x1="2" x2="22" y1="12" y2="12" />
    </svg>
  );
}

function SearchIcon(props: any) {
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
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
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
      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function UsersIcon(props: any) {
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
  );
}
