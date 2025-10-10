import React from "react";

export default function FAQSection() {
  return (
    <section className="w-full py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 tracking-tight">Frequently Asked Questions</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {/* FAQ Item 1 */}
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2 text-white">Is Let's Kraack right for me if I'm a beginner?</h3>
            <p className="text-zinc-300">Absolutely! We have learning paths designed for all skill levels. Our beginner tracks start with fundamentals and gradually build your skills.</p>
          </div>
          
          {/* FAQ Item 2 */}
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2 text-white">How much time should I dedicate to prepare effectively?</h3>
            <p className="text-zinc-300">We recommend 10-15 hours per week for optimal results. However, our platform adapts to your schedule, and you can make progress even with just 5 hours per week.</p>
          </div>
          
          {/* FAQ Item 3 */}
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2 text-white">How is Let's Kraack different from other platforms?</h3>
            <p className="text-zinc-300">Unlike general learning platforms, we focus specifically on tech interview preparation with personalized roadmaps based on your target companies and roles.</p>
          </div>
          
          {/* FAQ Item 4 */}
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-2 text-white">Do you offer mock interviews with real people?</h3>
            <p className="text-zinc-300">Yes! Besides our AI-powered mock interviews, we also offer peer matching and options to book sessions with experienced interviewers from top tech companies.</p>
          </div>
        </div>
      </div>
    </section>
  );
}