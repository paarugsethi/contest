export default function CornerMarkers() {
  return (
    <>
      <div className="fixed top-3 left-3 md:top-8 md:left-8 w-3 h-3 md:w-4 md:h-4 border-l border-t border-black z-50" />
      <div className="fixed bottom-3 left-3 md:bottom-8 md:left-8 w-3 h-3 md:w-4 md:h-4 border-l border-b border-black z-50" />
      <div className="fixed bottom-3 right-3 md:bottom-8 md:right-8 w-3 h-3 md:w-4 md:h-4 border-r border-b border-black z-50" />
    </>
  );
}
