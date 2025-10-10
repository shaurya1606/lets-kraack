import React from "react";
import { Code, BookOpen, Trophy, Users, Zap, Database } from "lucide-react";

const features = [
  {
    title: "Interactive Learning",
    description: "Learn programming concepts through engaging interactive challenges.",
    icon: <Code className="h-6 w-6" />,
  },
  {
    title: "Comprehensive Resources",
    description: "Access detailed documentation and learning materials.",
    icon: <BookOpen className="h-6 w-6" />,
  },
  {
    title: "Skill Progression",
    description: "Track your progress and earn certificates as you advance.",
    icon: <Trophy className="h-6 w-6" />,
  },
  {
    title: "Community Collaboration",
    description: "Connect with fellow learners and share knowledge.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Real-time Feedback",
    description: "Get instant feedback on your code and solutions.",
    icon: <Zap className="h-6 w-6" />,
  },
  {
    title: "Project-Based Learning",
    description: "Build real-world projects to enhance your portfolio.",
    icon: <Database className="h-6 w-6" />,
  },
];

export default function FeaturesGrid() {
  return (
    <section className="w-full bg-black py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">Why Choose LetsKraack</h2>
          <p className="text-zinc-300 max-w-2xl mx-auto">
            Our platform offers everything you need to become proficient in programming.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 transition-all duration-200 hover:transform hover:-translate-y-1 hover:shadow-xl">
              <div className="h-12 w-12 rounded-lg bg-zinc-800 flex items-center justify-center mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}