import React, { useRef, useState, useEffect } from "react";

function MoviesCarousel({ items = [] }) {
  const containerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const firstCard = container.firstElementChild;
    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const styles = window.getComputedStyle(container);
    const gap = parseFloat(styles.columnGap) || 16;

    const scrollAmount = cardWidth + gap;
    container.scrollBy({
      left: direction === "prev" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  // Track active card index based on scroll position
  const handleScroll = () => {
    const container = containerRef.current;
    if (!container) return;
    const firstCard = container.firstElementChild;
    if (!firstCard) return;

    const cardWidth = firstCard.getBoundingClientRect().width;
    const styles = window.getComputedStyle(container);
    const gap = parseFloat(styles.columnGap) || 16;
    const scrollLeft = container.scrollLeft;

    const newIndex = Math.round(scrollLeft / (cardWidth + gap));
    if (newIndex !== currentIndex && newIndex >= 0 && newIndex < items.length) {
      setCurrentIndex(newIndex);
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, [currentIndex, items.length]);

  if (!items.length) return null;

  return (
    <section className="relative my-8 w-full bg-black text-white">
      {/* Cards Container */}
      <div
        ref={containerRef}
        className="mx-auto flex w-full snap-x snap-mandatory gap-4 overflow-x-auto overflow-y-hidden px-4 pb-8 scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:px-6 lg:px-8"
      >
        {items.map((item, index) => (
          <div
            key={item.id || item.name || index}
            className="group relative h-[420px] min-w-[300px] shrink-0 snap-start overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 transition-all duration-500 hover:border-white/20 sm:h-[460px] sm:basis-[calc(50%-12px)] lg:h-[500px]"
          >
            {/* Blurred Background Image with Gradient Overlay */}
            <div className="absolute inset-0 overflow-hidden">
              <img
                src={item.img}
                alt={item.name || "Certificate"}
                loading="lazy"
                className="h-full w-full object-contain object-center scale-105  transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/40 backdrop-blur-[0px]" />
            </div>

            {/* Top Badges */}
            <div className="absolute left-5 right-5 top-5 z-10 flex items-center justify-between">
              {item.category && (
                <span className="rounded-full border border-white/10 bg-black/60 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md">
                  {item.category}
                </span>
              )}
              {item.date && (
                <span className="rounded-full border border-white/10 bg-black/60 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur-md">
                  {item.date}
                </span>
              )}
            </div>

            {/* Card Bottom Content */}
            <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col justify-end p-6 sm:p-8">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                {item.name}
              </h2>

              <p className="mt-2.5 line-clamp-2 text-sm text-zinc-300 sm:text-base">
                {item.des}
              </p>

              <div className="mt-6 flex items-center">
                {item.link ? (
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black transition-all duration-300 hover:bg-zinc-200 hover:shadow-lg"
                  >
                    <span>{item.buttonText || "View Certificate"}</span>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="cursor-not-allowed rounded-xl bg-zinc-800 px-5 py-3 text-sm font-semibold text-zinc-400"
                  >
                    Coming Soon
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Controls Bar (Pagination Indicators & Counter) */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Pagination Dots */}
        <div className="flex items-center gap-2">
          {items.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => {
                const container = containerRef.current;
                if (!container) return;
                const firstCard = container.firstElementChild;
                if (!firstCard) return;
                const cardWidth = firstCard.getBoundingClientRect().width;
                const styles = window.getComputedStyle(container);
                const gap = parseFloat(styles.columnGap) || 16;
                container.scrollTo({
                  left: idx * (cardWidth + gap),
                  behavior: "smooth",
                });
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-8 bg-red-500" : "w-2 bg-zinc-700 hover:bg-zinc-500"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Counter Display (e.g., 01 / 04) */}
        <div className="font-mono text-sm tracking-wider text-zinc-400">
          {String(currentIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
        </div>
      </div>
    </section>
  );
}

export default MoviesCarousel;