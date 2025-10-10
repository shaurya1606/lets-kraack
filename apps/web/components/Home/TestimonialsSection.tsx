import React from "react";

export default function TestimonialsSection() {
  return (
    <section className="w-full py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16 tracking-tight">What Our Users Say</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl shadow-lg">
            <p className="italic mb-4 text-zinc-300">"Let's Kraack's structured approach helped me ace my Google interview. The personalized roadmap made all the difference."</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-zinc-800 mr-3"></div>
              <div>
                <p className="font-semibold text-white">Sarah Chen</p>
                <p className="text-sm text-zinc-400">Software Engineer at Google</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl shadow-lg">
            <p className="italic mb-4 text-zinc-300">"The mock interviews gave me the confidence I needed. I went from nervous to nailing technical questions."</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-zinc-800 mr-3"></div>
              <div>
                <p className="font-semibold text-white">Raj Patel</p>
                <p className="text-sm text-zinc-400">Frontend Developer at Meta</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-xl shadow-lg">
            <p className="italic mb-4 text-zinc-300">"I tried several platforms before finding Let's Kraack. The focused approach helped me learn system design concepts quickly."</p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-zinc-800 mr-3"></div>
              <div>
                <p className="font-semibold text-white">Alex Johnson</p>
                <p className="text-sm text-zinc-400">Senior Engineer at Amazon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}