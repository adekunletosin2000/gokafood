// components/PartnerSection.tsx
export default function PartnerSection() {
  return (
    <section className="py-24 bg-goka-bg px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-goka-dark uppercase">
            Grow with <span className="text-goka-orange">GokaFood</span>
          </h2>
          <p className="text-goka-gray text-lg max-w-2xl mx-auto">
            Join the fastest-growing food network in the region. Whether you cook it or move it, let's win together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Restaurants */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-premium transition-all border border-gray-100 group">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">
              🍳
            </div>
            <h3 className="text-3xl font-bold mb-4">For Restaurants</h3>
            <p className="text-goka-gray mb-8 text-lg">
              Reach thousands of new customers. We provide the technology and the logistics while you focus on the cooking.
            </p>
            <ul className="space-y-4 mb-10 text-goka-dark font-medium">
              <li className="flex items-center gap-3">
                <span className="text-goka-orange">✔</span> 40% Average revenue increase
              </li>
              <li className="flex items-center gap-3">
                <span className="text-goka-orange">✔</span> Dedicated merchant dashboard
              </li>
              <li className="flex items-center gap-3">
                <span className="text-goka-orange">✔</span> Weekly payouts & marketing support
              </li>
            </ul>
            <button className="w-full py-4 bg-goka-dark text-white rounded-2xl font-bold hover:bg-goka-orange transition-colors">
              Register Restaurant
            </button>
          </div>

          {/* Card 2: Riders */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm hover:shadow-premium transition-all border border-gray-100 group">
            <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">
              🛵
            </div>
            <h3 className="text-3xl font-bold mb-4">For Riders</h3>
            <p className="text-goka-gray mb-8 text-lg">
              Be your own boss. Enjoy competitive earnings, flexible hours, and the freedom to work whenever you want.
            </p>
            <ul className="space-y-4 mb-10 text-goka-dark font-medium">
              <li className="flex items-center gap-3">
                <span className="text-goka-orange">✔</span> Earn per delivery + bonuses
              </li>
              <li className="flex items-center gap-3">
                <span className="text-goka-orange">✔</span> Choose your own delivery zone
              </li>
              <li className="flex items-center gap-3">
                <span className="text-goka-orange">✔</span> Health insurance & safety gear
              </li>
            </ul>
            <button className="w-full py-4 bg-goka-orange text-white rounded-2xl font-bold hover:shadow-lg hover:shadow-orange-200 transition-all">
              Become a Rider
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}