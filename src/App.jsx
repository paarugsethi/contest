import useCountdown from './hooks/useCountdown';
import CornerMarkers from './components/CornerMarkers';
import Header from './components/Header';
import CountdownCard from './components/CountdownCard';
import Separator from './components/Separator';

export default function App() {
  const { days, hours, minutes, seconds } = useCountdown();

  return (
    <div className="bg-tech-grid w-full h-screen overflow-hidden flex flex-col relative selection:bg-black selection:text-white">
      <CornerMarkers />
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center relative z-10 w-full max-w-7xl mx-auto px-4">
        <div className="absolute left-0 top-1/2 w-full h-px bg-gray-200 -z-10" />

        <div className="mb-6 md:mb-12 text-center bg-white px-4">
          <p className="text-base md:text-2xl font-bold tracking-[0.1em] md:tracking-[0.2em] text-gray-600 uppercase whitespace-nowrap">
            // SOLANA INDIA FELLOWSHIP //
          </p>
        </div>

        <div className="grid grid-cols-4 gap-3 sm:gap-4 md:gap-8 items-start justify-items-center w-full max-w-xs sm:max-w-lg md:max-w-none md:flex md:flex-row md:items-center md:justify-center">
          <CountdownCard value={days} label="DAYS" />
          <CountdownCard value={hours} label="HOURS" />
          <CountdownCard value={minutes} label="MINUTES" />
          <CountdownCard value={seconds} label="SECONDS" />
        </div>
      </main>
    </div>
  );
}
