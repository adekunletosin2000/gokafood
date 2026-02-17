"use client";
import { Reveal } from './Reveal';
import Image from 'next/image';

export default function AboutSection() {
  const values = [
    {
      title: "Fastest Delivery",
      desc: "Our optimized routing ensures your Jollof or Egusi arrives in record time.",
      icon: "⚡"
    },
    {
      title: "Local First",
      desc: "We prioritize small eateries, giving them the platform to grow and thrive.",
      icon: "🍲"
    },
    {
      title: "Total Reliability",
      desc: "Real-time tracking so you know exactly when your meal is at the door.",
      icon: "✅"
    }
  ];

  return (
    <section id="about" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* Top Part: Mission & Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal width="100%">
            <div className="relative aspect-square max-w-md mx-auto lg:mx-0">
               {/* Impact Stats Overlay */}
               <div className="absolute -top-4 -right-4 bg-goka-orange p-6 rounded-3xl text-white z-10 shadow-xl">
                 <p className="text-3xl font-black tracking-tighter">30min</p>
                 <p className="text-[10px] font-bold uppercase tracking-widest">Avg. Delivery</p>
               </div>
               <div className="w-full h-full bg-gray-100 rounded-[3rem] overflow-hidden relative border-8 border-white shadow-2xl">
                 {/* Placeholder for a mission-related image */}
                 <div className="absolute inset-0 bg-linear-to-tr from-goka-dark/20 to-transparent" />
                 <Image 
                   src="/delivery-man.jpg"
                   alt="About GokaFood" 
                   fill 
                   className="object-cover opacity-80"
                 />
               </div>
            </div>
          </Reveal>

          <Reveal width="100%">
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-black text-goka-dark tracking-tighter leading-tight">
                The Heart of <span className="text-goka-orange">Local Food</span> Delivery.
              </h2>
              <p className="text-goka-gray text-lg leading-relaxed">
                GokaFood was built with a single goal: to connect you with the local flavors you love, 
                in the fastest way possible. We specialize in bringing authentic dishes like 
                Jollof Fried Rice and Egusi Soup straight to your door.
              </p>
              <p className="text-goka-gray text-lg leading-relaxed">
                By empowering local eateries with our technology, we ensure that small businesses thrive 
                while you enjoy premium, reliable delivery service every single time.
              </p>
            </div>
          </Reveal>
        </div>

        {/* Bottom Part: Core Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-gray-100">
          {values.map((value, index) => (
            <Reveal key={index} width="100%">
              <div className="group p-8 bg-gray-50 rounded-3xl hover:bg-orange-50 transition-all duration-300">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform inline-block">
                  {value.icon}
                </div>
                <h4 className="text-xl font-black text-goka-dark mb-2 tracking-tight">{value.title}</h4>
                <p className="text-goka-gray text-sm leading-relaxed">{value.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}