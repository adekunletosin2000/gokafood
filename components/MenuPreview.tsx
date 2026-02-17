export default function MenuPreview() {
  const items = [
    { name: "Jollof Fried Rice", price: "4000", cat: "Rice", img: "🍛" },
    { name: "Egusi Soup", price: "4000", cat: "Swallows", img: "🍲" },
    { name: "Spiced Dish", price: "2500", cat: "Fries", img: "🍗" },
    { name: "Zobo Drink", price: "800", cat: "Drinks", img: "🥤" },
  ];

  return (
    <section id="menu" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <h2 className="text-4xl font-black text-goka-dark uppercase">Popular Dishes</h2>
          <div className="flex gap-2 mt-4 overflow-x-auto pb-2 w-full md:w-auto">
            {["All", "Fries", "Swallows", "Rice"].map((cat) => (
              <button key={cat} className="px-6 py-2 rounded-full bg-goka-bg font-bold text-sm whitespace-nowrap border border-transparent hover:border-goka-orange transition">
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div key={item.name} className="flex items-center p-4 bg-goka-bg rounded-4xl border border-gray-50 hover:shadow-xl transition group">
              <div className="w-24 h-24 bg-white rounded-2xl flex items-center justify-center text-4xl shadow-sm">
                {item.img}
              </div>
              <div className="ml-6 flex-1">
                <p className="text-xs font-bold text-goka-orange uppercase tracking-widest mb-1">{item.cat}</p>
                <h3 className="text-xl font-bold text-goka-dark">{item.name}</h3>
                <p className="text-2xl font-black text-goka-dark/90 mt-1">₦{item.price}</p>
              </div>
              <button className="w-12 h-12 rounded-2xl bg-white text-goka-orange flex items-center justify-center text-2xl font-bold shadow-sm group-hover:bg-goka-orange group-hover:text-white transition">
                +
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}