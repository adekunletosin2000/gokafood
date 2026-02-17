export default function MenuPreview() {
  const menuItems = [
    { name: "Jollof Fried Rice", price: "4000", desc: "Delicious Jollof Fried Rice", icon: "🍛" },
    { name: "Egusi Soup", price: "4000", desc: "Delicious Egusi Soup", icon: "🍲" },
    { name: "Zobo", price: "800", desc: "Delicious Zobo Drink", icon: "🥤" },
    { name: "Spiced Dish", price: "2500", desc: "Delicious Spiced Dish", icon: "🍗" }
  ];

  return (
    <section id="menu" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-black mb-8 uppercase italic">Popular on GokaFood</h2>
        <div className="space-y-4">
          {menuItems.map((item, i) => (
            <div key={i} className="flex items-center p-4 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition">
              <div className="w-20 h-20 bg-goka-bg rounded-2xl flex items-center justify-center text-3xl">
                {item.icon}
              </div>
              <div className="ml-4 flex-1">
                <h4 className="font-bold text-lg">{item.name}</h4>
                <p className="text-goka-gray text-xs">{item.desc}</p>
                <p className="text-goka-orange font-black text-lg mt-1">₦{item.price}</p>
              </div>
              <button className="w-10 h-10 rounded-full bg-goka-orange text-white text-xl font-bold flex items-center justify-center">+</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}