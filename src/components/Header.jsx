export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full px-5 pt-6 pb-4 md:p-8 z-10 flex justify-between items-start">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-black animate-blink-fast" />
          <span className="text-xs md:text-sm font-bold tracking-widest">SYSTEM STATUS: ONLINE</span>
        </div>
        <span className="text-[10px] md:text-xs text-gray-500 tracking-wider">LAT: 28.061821° N / LONG: 75.567606° E</span>
        <span className="text-[10px] md:text-xs text-gray-500 tracking-wider">TARGET: MON 09 MAR 18:00:00 IST</span>
      </div>

      <img src="/st-logo-black.png" alt="Superteam" className="h-8 md:h-10" />
    </header>
  );
}
