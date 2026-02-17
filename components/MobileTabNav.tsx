// components/MobileTabNav.tsx
export default function MobileTabNav() {
  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] bg-white/80 backdrop-blur-lg border border-gray-100 h-16 rounded-2xl shadow-2xl z-100 flex items-center justify-around px-4">
      <button className="flex flex-col items-center text-goka-orange">
        <span className="text-xl">🏠</span>
        <span className="text-[10px] font-bold uppercase">Home</span>
      </button>
      <button className="flex flex-col items-center text-goka-gray">
        <span className="text-xl">🍲</span>
        <span className="text-[10px] font-bold uppercase">Menu</span>
      </button>
      <div className="relative -top-8 bg-goka-orange w-14 h-14 rounded-full flex items-center justify-center shadow-lg border-4 border-white">
        <span className="text-white text-2xl">🛵</span>
      </div>
      <button className="flex flex-col items-center text-goka-gray">
        <span className="text-xl">🤝</span>
        <span className="text-[10px] font-bold uppercase">Partner</span>
      </button>
      <button className="flex flex-col items-center text-goka-gray">
        <span className="text-xl">📥</span>
        <span className="text-[10px] font-bold uppercase">App</span>
      </button>
    </div>
  );
}