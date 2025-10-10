import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function FinalCTASection() {
  return (
    <section className="w-full py-24 bg-gradient-to-br from-zinc-900 to-black border-t border-zinc-800 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">Ready to Kraack Your Next Interview?</h2>
          <p className="text-xl mb-10 text-zinc-300">Join thousands of successful candidates who've secured their dream tech jobs</p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/auth/signup">
              <Button className="bg-zinc-100 text-zinc-900 hover:bg-white px-8 py-6 text-lg font-medium rounded-md transition-all duration-200 shadow-lg">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button variant="outline" className="border-zinc-600 text-white hover:bg-zinc-800 px-8 py-6 text-lg font-medium rounded-md transition-all duration-200">
                Explore Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}