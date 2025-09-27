"use client";

import Link from "next/link";
import { useState } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Menu } from "lucide-react";
import { link } from "@/types";

const NAV_LINKS: link[] = [
  { href: "/", title: "Home" },
  { href: "/about", title: "About" },
  { href: "/leads", title: "Leads" },
  { href: "/settings", title: "Settings" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-screen bg-white border-r p-4">
        <h2 className="text-xl font-bold mb-6">CRM SaaS</h2>
        <nav className="flex flex-col gap-3">
          {NAV_LINKS.map((link, i) => (
            <Link href={link.href} className="hover:text-blue-600" key={i}>
              {link.title}
            </Link>
          ))}
        </nav>
        <Separator className="my-4" />
        <p className="text-sm text-gray-500 mt-auto">© 2025 CRM SaaS</p>
      </aside>

      {/* Mobile Sidebar (Sheet Drawer) */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-4">
          <SheetHeader>
            <SheetTitle>CRM SaaS</SheetTitle>
          </SheetHeader>

          <nav className="flex flex-col gap-3">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/leads" onClick={() => setOpen(false)}>
              Leads
            </Link>
            <Link href="/settings" onClick={() => setOpen(false)}>
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
}
