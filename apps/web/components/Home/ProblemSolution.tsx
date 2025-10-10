import React from "react";

export default function ProblemSolution() {
  return (
    <section className="w-full bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">The Problem We Solve</h2>
            <div className="space-y-6">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Overwhelming Information</h3>
                <p className="text-zinc-400">
                  Learning to code can be overwhelming with too many resources and no clear path forward.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Lack of Practical Experience</h3>
                <p className="text-zinc-400">
                  Many learning platforms focus on theory without providing enough hands-on practice.
                </p>
              </div>
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-2">Inconsistent Progress Tracking</h3>
                <p className="text-zinc-400">
                  It's difficult to know if you're making real progress in your coding journey.
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">Our Solution</h2>
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-8 shadow-xl">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center text-white shrink-0 mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold text-white">Structured Learning Path</h4>
                    <p className="text-zinc-400">Clear, step-by-step curriculum designed for consistent progress.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center text-white shrink-0 mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold text-white">Practical Challenges</h4>
                    <p className="text-zinc-400">Hands-on coding challenges that reinforce concepts with real applications.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center text-white shrink-0 mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold text-white">Progress Analytics</h4>
                    <p className="text-zinc-400">Detailed progress tracking and skill development visualization.</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-zinc-800 flex items-center justify-center text-white shrink-0 mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold text-white">Community Support</h4>
                    <p className="text-zinc-400">Connect with mentors and peers for guidance and collaboration.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}