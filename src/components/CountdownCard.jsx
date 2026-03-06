export default function CountdownCard({ value, label }) {
  return (
    <div className="flex flex-col items-center group">
      <div className="relative bg-white border-2 border-black p-4 md:p-6 w-[4.5rem] h-24 sm:w-28 sm:h-36 md:w-48 md:h-56 flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
        <div className="absolute top-1.5 left-1.5 md:top-2 md:left-2 w-1.5 h-1.5 md:w-2 md:h-2 border-l border-t border-black" />
        <div className="absolute top-1.5 right-1.5 md:top-2 md:right-2 w-1.5 h-1.5 md:w-2 md:h-2 border-r border-t border-black" />
        <div className="absolute bottom-1.5 left-1.5 md:bottom-2 md:left-2 w-1.5 h-1.5 md:w-2 md:h-2 border-l border-b border-black" />
        <div className="absolute bottom-1.5 right-1.5 md:bottom-2 md:right-2 w-1.5 h-1.5 md:w-2 md:h-2 border-r border-b border-black" />
        <span className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tighter">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <div className="mt-2 md:mt-4 flex items-center gap-1.5 md:gap-2">
        <div className="h-px w-3 md:w-4 bg-black" />
        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em]">{label}</span>
        <div className="h-px w-3 md:w-4 bg-black" />
      </div>
    </div>
  );
}
