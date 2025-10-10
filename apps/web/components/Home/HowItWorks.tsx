import React from "react";

const steps = [
  {
    number: "01",
    title: "Sign Up",
    description: "Create your account and set up your profile with your programming interests.",
  },
  {
    number: "02",
    title: "Choose Your Path",
    description: "Select from various programming tracks based on your interests and goals.",
  },
  {
    number: "03",
    title: "Practice & Learn",
    description: "Complete challenges, projects, and learn from comprehensive resources.",
  },
  {
    number: "04",
    title: "Track Progress",
    description: "Monitor your skill development and earn certificates along the way.",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-zinc-950 py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">How It Works</h2>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            A simple four-step process to begin your learning journey with LetsKraack.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 h-full flex flex-col transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-lg">
                <div className="text-3xl font-bold text-zinc-700 mb-4">{step.number}</div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-zinc-400 flex-grow">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-[2px] bg-zinc-800"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}