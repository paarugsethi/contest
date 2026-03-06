export default function Footer() {
  return (
    <footer className="w-full p-8 z-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <button className="group relative inline-flex items-center justify-center bg-black px-8 py-4 text-white transition-all hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
          <div className="absolute -left-1 -top-1 h-2 w-2 border-l-2 border-t-2 border-black transition-all group-hover:-left-2 group-hover:-top-2" />
          <div className="absolute -right-1 -bottom-1 h-2 w-2 border-r-2 border-b-2 border-black transition-all group-hover:-right-2 group-hover:-bottom-2" />
          <span className="mr-2 text-lg font-bold">[</span>
          <span className="text-sm font-bold tracking-[0.15em]">MARK_CALENDAR</span>
          <span className="ml-2 text-lg font-bold">]</span>
        </button>

        <button className="group relative inline-flex items-center justify-center border-2 border-black bg-white px-8 py-4 text-black transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2">
          <div className="absolute -left-1 -top-1 h-2 w-2 bg-black opacity-0 transition-all group-hover:opacity-100" />
          <div className="absolute -right-1 -top-1 h-2 w-2 bg-black opacity-0 transition-all group-hover:opacity-100" />
          <div className="absolute -left-1 -bottom-1 h-2 w-2 bg-black opacity-0 transition-all group-hover:opacity-100" />
          <div className="absolute -right-1 -bottom-1 h-2 w-2 bg-black opacity-0 transition-all group-hover:opacity-100" />
          <span className="mr-2 text-lg font-bold">{"{"}</span>
          <span className="text-sm font-bold tracking-[0.15em]">SET_REMINDER</span>
          <span className="ml-2 text-lg font-bold">{"}"}</span>
        </button>
      </div>

      <div className="mt-8 text-center">
        <p className="text-[10px] text-gray-400 uppercase tracking-[0.3em]">
          /// TERMINAL_ID: 884-XJ // SESSION_ACTIVE ///
        </p>
      </div>
    </footer>
  );
}
