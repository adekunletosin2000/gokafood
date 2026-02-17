// components/AmbassadorSection.tsx
export default function AmbassadorSection() {
  return (
    <section id="ambassador" className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto bg-goka-dark rounded-4xl p-8 md:p-16 text-white relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-goka-orange rounded-full blur-[120px] opacity-20" />
        
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-black uppercase leading-none tracking-tighter">
              Become a <br />
              <span className="text-goka-orange">Campus <br /> Ambassador</span>
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-md">
              Are you the "go-to" person on campus? Join GokaFood to lead the food 
              revolution at your university and get rewarded for every order made.
            </p>
            
            <div className="space-y-4 pt-4">
              {[
                { icon: "💰", text: "Earn Monthly Stipends" },
                { icon: "🍗", text: "Free Meal Vouchers" },
                { icon: "✨", text: "Exclusive GKF Merch" }
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                  <span className="text-2xl">{benefit.icon}</span>
                  <span className="font-bold">{benefit.text}</span>
                </div>
              ))}
            </div>

            <button className="w-full sm:w-auto bg-goka-orange text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl hover:scale-105 transition-transform active:scale-95 mt-6">
              APPLY NOW
            </button>
          </div>

          {/* Mobile App View Illustration */}
          <div className="hidden lg:flex justify-center">
            <div className="w-64 h-125 bg-white rounded-4xl border-8 border-gray-800 shadow-2xl flex flex-col items-center justify-center p-6 text-goka-dark text-center">
               <div className="w-20 h-20 bg-orange-100 rounded-full mb-4 flex items-center justify-center text-4xl">🎓</div>
               <h4 className="font-black text-xl mb-2">Ambassador Portal</h4>
               <p className="text-xs text-gray-500">Track your campus earnings and referrals in real-time.</p>
               <div className="mt-8 w-full h-12 bg-goka-orange rounded-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}