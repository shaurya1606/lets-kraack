import React from "react";

export default function TrustedBySection() {
  return (
    <section className="w-full py-16 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-xl text-center text-zinc-400 mb-10">Trusted by students from</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {/* Replace with actual company/university logos */}
          <div className="h-12 w-32 bg-zinc-900 border border-zinc-800 rounded-md flex items-center justify-center text-white">IIT</div>
          <div className="h-12 w-32 bg-zinc-900 border border-zinc-800 rounded-md flex items-center justify-center text-white">Stanford</div>
          <div className="h-12 w-32 bg-zinc-900 border border-zinc-800 rounded-md flex items-center justify-center text-white">MIT</div>
          <div className="h-12 w-32 bg-zinc-900 border border-zinc-800 rounded-md flex items-center justify-center text-white">Berkeley</div>
          <div className="h-12 w-32 bg-zinc-900 border border-zinc-800 rounded-md flex items-center justify-center text-white">NIT</div>
        </div>
      </div>
    </section>
  );
}