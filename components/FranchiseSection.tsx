// components/FranchiseSection.tsx
export default function FranchiseSection() {
  return (
    <section id="franchise" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Business Narrative */}
        <div className="space-y-8 order-2 lg:order-1">
          <div className="inline-block px-4 py-1.5 bg-orange-50 text-goka-orange rounded-full text-sm font-bold tracking-wide uppercase">
            📈 Expansion Opportunities
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-goka-dark uppercase tracking-tighter leading-tight">
            Own a <span className="text-goka-orange">GokaFood</span> <br /> Franchise in Your City
          </h2>
          <p className="text-goka-gray text-lg leading-relaxed">
            Join a proven delivery network. We provide the industry-leading logistics, 
            merchant software, and brand power seen in our mobile app to help you 
            dominate your local food market.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-goka-bg rounded-2xl border border-gray-100">
              <h4 className="font-bold text-goka-dark">Full Logistics Support</h4>
              <p className="text-xs text-goka-gray mt-1">We manage the rider network technology for you.</p>
            </div>
            <div className="p-5 bg-goka-bg rounded-2xl border border-gray-100">
              <h4 className="font-bold text-goka-dark">Brand Recognition</h4>
              <p className="text-xs text-goka-gray mt-1">Leverage the GKF identity and existing customer base.</p>
            </div>
          </div>

          <button className="w-full lg:w-auto bg-goka-dark text-white px-10 py-5 rounded-2xl font-black text-lg shadow-xl hover:bg-goka-orange transition-all active:scale-95">
            REQUEST FRANCHISE KIT
          </button>
        </div>

        {/* Right Side: Visual Brand Asset */}
        <div className="order-1 lg:order-2">
          <div className="relative group">
            <div className="absolute -inset-1 bg-linear-to-r from-goka-orange to-orange-300 rounded-4xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            <div className="relative bg-white border border-gray-100 rounded-4xl p-4 shadow-2xl">
              <div className="aspect-video bg-gray-100 rounded-3xl flex items-center justify-center text-6xl overflow-hidden">
                {/* Placeholder for a professional office or restaurant storefront image */}
                🏢
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}