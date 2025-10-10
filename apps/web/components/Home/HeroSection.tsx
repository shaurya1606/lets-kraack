import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full min-h-[85vh] flex flex-col items-center justify-center bg-black text-center px-4 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
          Start Your Coding Journey With <span className="bg-gradient-to-r from-zinc-200 to-zinc-400 text-transparent bg-clip-text">LetsKraack</span>
        </h1>
        <p className="text-lg md:text-xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          The ultimate platform to learn, practice and excel in programming through interactive challenges and real-world projects.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/auth/signup" 
            className="px-8 py-3 bg-zinc-800 text-white font-medium rounded-md hover:bg-zinc-700 transition-all duration-200 shadow-lg"
          >
            Get Started
          </Link>
          <Link 
            href="/docs" 
            className="px-8 py-3 border border-zinc-700 text-zinc-200 font-medium rounded-md hover:bg-zinc-800 hover:text-white transition-all duration-200"
          >
            Learn More
          </Link>
        </div>
      </div>
      <div className="mt-16 w-full max-w-3xl mx-auto bg-zinc-900/50 rounded-lg border border-zinc-800 shadow-xl backdrop-blur-sm p-1">
        <div className="w-full h-[300px] rounded-md bg-zinc-900 border border-zinc-800 flex items-center justify-center">

          {/* do changes here  */}
          <p className="text-zinc-400">Code preview or screenshot here</p>
        </div>
      </div>
    </section>
  );
}