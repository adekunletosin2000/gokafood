// components/PartnerOnboarding.tsx
const STEPS = [
  {
    num: "01",
    title: "Apply Online",
    desc: "Fill out our 5-minute application form with your basic details."
  },
  {
    num: "02",
    title: "Get Verified",
    desc: "Our team reviews your documents and sets up your digital storefront."
  },
  {
    num: "03",
    title: "Start Earning",
    desc: "Go live on the GokaFood app and start receiving local orders instantly."
  }
];

export default function PartnerOnboarding() {
  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-12 text-goka-dark underline decoration-goka-orange decoration-4 underline-offset-8">
          HOW TO GET STARTED
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {STEPS.map((step) => (
            <div key={step.num} className="relative p-8 rounded-3xl bg-goka-bg border border-gray-100 hover:border-goka-orange transition-all group">
              <span className="text-6xl font-black text-goka-orange/10 absolute top-4 right-6 group-hover:text-goka-orange/20 transition-colors">
                {step.num}
              </span>
              <div className="relative z-10">
                <h4 className="text-xl font-bold mb-3 text-goka-dark">{step.title}</h4>
                <p className="text-goka-gray leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}