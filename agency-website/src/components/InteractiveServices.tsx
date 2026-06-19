"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ServiceCard } from "@/types";
import { Icon } from "./Icon";

interface InteractiveServicesProps {
  services: ServiceCard[];
}

export default function InteractiveServices({ services }: InteractiveServicesProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
      {/* Service Tabs */}
      <div className="lg:col-span-5 space-y-4">
        {services.map((service, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-full text-left p-6 rounded-2xl transition-all duration-300 relative overflow-hidden ${
                isActive
                  ? "glass border-[#6c5ce7]/50 shadow-[0_0_30px_rgba(108,92,231,0.15)]"
                  : "bg-transparent border border-transparent hover:bg-white/5"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeServiceBg"
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5`}
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              
              <div className="relative z-10 flex items-center gap-4">
                <div className={`transition-transform duration-300 ${isActive ? "text-[#a29bfe] scale-110" : "text-[#8888a0]"}`}>
                  <Icon name={service.icon} className="w-7 h-7" />
                </div>
                <h4 className={`text-xl font-bold transition-colors duration-300 ${isActive ? "text-white" : "text-[#8888a0]"}`}>
                  {service.title}
                </h4>
              </div>
            </button>
          );
        })}
      </div>

      {/* Service Content Details */}
      <div className="lg:col-span-7 min-h-[420px] lg:min-h-[480px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.4 }}
            className="h-full rounded-[2rem] p-8 md:p-12 relative overflow-hidden flex flex-col justify-center border border-white/10 glass"
          >
            {/* Dynamic Background Glow */}
            <div className={`absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-gradient-to-br ${services[activeIndex].gradient} blur-[100px] opacity-20`} />
            <div className={`absolute -top-32 -left-32 w-96 h-96 rounded-full bg-gradient-to-br ${services[activeIndex].gradient} blur-[100px] opacity-20`} />
            
            {/* Content */}
            <div className="relative z-10">
              <div className="mb-8 text-[#a29bfe]"><Icon name={services[activeIndex].icon} className="w-14 h-14" /></div>
              <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {services[activeIndex].title}
              </h3>
              <p className="text-xl text-[#8888a0] leading-relaxed mb-8">
                {services[activeIndex].description}
              </p>
              <ul className="space-y-3 mb-8">
                {services[activeIndex].features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[#e8e8f0]">
                    <Icon name="check" className="w-5 h-5 text-[#00cec9] flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`px-8 py-4 rounded-xl font-semibold text-white bg-gradient-to-r ${services[activeIndex].gradient} hover:shadow-[0_0_30px_rgba(255,255,255,0.1)] transition-all duration-300 hover:scale-105 inline-flex items-center gap-2 group`}>
                Explore Service
                <svg className="group-hover:translate-x-1 transition-transform" width="20" height="20" viewBox="0 0 16 16" fill="none">
                  <path d="M1 8h14M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
