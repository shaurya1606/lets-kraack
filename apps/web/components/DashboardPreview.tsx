import React from "react";

export default function DashboardPreview() {
  return (
    <section className="w-full bg-zinc-950 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Experience Our Platform</h2>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            Get a glimpse of the intuitive dashboard that makes learning to code efficient and enjoyable.
          </p>
        </div>
        
        <div className="bg-zinc-900/50 rounded-2xl border border-zinc-800 shadow-2xl backdrop-blur-sm p-4 md:p-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-8 bg-zinc-900 border-b border-zinc-800 flex items-center px-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
              <div className="w-3 h-3 rounded-full bg-zinc-700"></div>
            </div>
          </div>
          
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-zinc-900 rounded-xl border border-zinc-800 p-4 h-[400px] flex items-center justify-center">
              <p className="text-zinc-500">Dashboard main content preview</p>
            </div>
            
            <div className="space-y-6">
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-4 h-[190px] flex items-center justify-center">
                <p className="text-zinc-500">Progress charts</p>
              </div>
              <div className="bg-zinc-900 rounded-xl border border-zinc-800 p-4 h-[190px] flex items-center justify-center">
                <p className="text-zinc-500">Recent activities</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}