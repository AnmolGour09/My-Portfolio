
import React, { useEffect, useState } from "react";

function Carousel({
  items = [],
  interval = 3000,
  containerWidth = "70%",
  imageWidth = "70%",
  imageHeight = "400px",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, interval);

    return () => clearInterval(timer);
  }, [items.length, interval]);

  if (!items.length) return null;

  return (
    <div className="relative mt-20 w-full overflow-hidden py-5 max-sm:mt-10">
      <div
        className="mx-auto overflow-hidden"
        style={{ width: containerWidth }}
      >
        <div
          className="flex gap-[30px] transition-transform duration-1000 ease-in-out max-sm:gap-[15px]"
          style={{
            transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 30}px))`,
          }}
        >
          {items.map((item, index) => (
            <div
              key={item.name || index}
              className="flex flex-[0_0_100%] items-center justify-center rounded-lg bg-black/50 p-[15px]"
            >
              <img
                src={item.image}
                alt={item.name || `Slide ${index + 1}`}
                className="block rounded object-contain"
                style={{
                  width: imageWidth,
                  maxHeight: imageHeight,
                }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
