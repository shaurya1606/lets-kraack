import React from "react";
import { Twitter, Linkedin, Github } from "lucide-react";

export default function FooterSection() {
  return (
    <footer className="w-full py-16 bg-black border-t border-zinc-900 text-zinc-400 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="text-xl font-bold text-white mb-6">Let's Kraack</h3>
            <p className="mb-6 text-zinc-400">Your path to tech interview success</p>
            <div className="flex space-x-5">
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-zinc-500 hover:text-white transition-colors">
                <Github size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Guides</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Interview Tips</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-white mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-zinc-900 mt-12 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Let's Kraack. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}