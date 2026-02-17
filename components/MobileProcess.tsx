// components/MobileProcess.tsx
const STEPS = [
  { title: "Select Meal", desc: "Browse local favorites like Jollof Rice.", icon: "🍛" },
  { title: "Fast Delivery", desc: "Our riders know every shortcut.", icon: "🛵" },
  { title: "Enjoy!", desc: "Hot, fresh food at your doorstep.", icon: "😋" }
];

export default function MobileProcess() {
  return (
    <section className="py-12 px-6 md:hidden bg-white">
      <h2 className="text-2xl font-black mb-10 uppercase tracking-tighter">Fastest Way to Eat</h2>
      <div className="space-y-8">
        {STEPS.map((step, i) => (
          <div key={i} className="flex gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-goka-bg rounded-full flex items-center justify-center text-2xl shadow-sm border border-gray-50">
                {step.icon}
              </div>
              {i < 2 && <div className="w-0.5 h-full bg-orange-100 my-2" />}
            </div>
            <div className="pb-4">
              <h4 className="font-extrabold text-lg">{step.title}</h4>
              <p className="text-goka-gray text-sm">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}