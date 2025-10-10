"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


export default function NavigationBar() {
  return (
    <div className="w-full h-16 px-6 md:px-10 bg-black border-b border-zinc-800 flex justify-between items-center shadow-md">
      <div>
        <Link href="/">
        <h1 className="text-xl font-bold text-white tracking-tight">LetsKraack</h1>
        </Link>
        <p className="text-xs text-zinc-400">Crack Placements. Build Careers.</p>
      </div>
      <NavigationMenu viewport={false}>
        <NavigationMenuList className="gap-1">
         <NavigationMenuItem>
          <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">DSA</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Development</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">CS Fundamentals</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Essentials</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/docs" className="text-zinc-300 hover:text-white transition-colors duration-200">Assesment</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
          <NavigationMenuTrigger>Tools</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              <li>
                <NavigationMenuLink asChild>
                  <Link href="#">Prep Chatbot</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Portfolio Builder</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Playground</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Mock Interview</Link>
                </NavigationMenuLink>
                <NavigationMenuLink asChild>
                  <Link href="#">Discussion Forum</Link>
                </NavigationMenuLink>
              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/docs" className="text-zinc-300 hover:text-white transition-colors duration-200">Blogs</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
              <Link href="/docs" className="text-zinc-300 hover:text-white transition-colors duration-200">Contact</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <div className="flex gap-4">
        <Link href={"/auth/signin"} className="px-5 py-2 border border-zinc-700 rounded-md text-zinc-200 hover:bg-zinc-800 hover:text-white transition-all duration-200">Sign In</Link>
        <Link href={"/auth/signup"} className="px-5 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-700 transition-all duration-200 shadow-sm">Sign Up</Link>
      </div>
    </div>
  )
}