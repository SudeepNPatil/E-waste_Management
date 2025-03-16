import React, { useState, useEffect } from "react";

function Quote() {
  const quotesData = [
    {
      id: 1,
      quote: "The most environmentally friendly product is the one you already own.",
      author: "Kyle Wiens (Founder of iFixit)."
    },
    {
      id: 2,
      quote:
        "E-waste is the fastest-growing waste stream in the world, and it’s up to us to slow it down.",
      author: "Unknown",
    },
    {
      id: 3,
      quote: "The proper disposal of electronic waste is not an option; it’s a necessity for a sustainable future.",
      author: "Ban Ki-moon (Former UN Secretary-General)",
    },
    {
      id: 4,
      quote:
        "Waste isn’t waste until we waste it.",
      author: " Will.i.am (Musician & Tech Advocate)"
    },
    {
      id: 5,
      quote: "We do not inherit the Earth from our ancestors; we borrow it from our children.",
      author: "Native American Proverb",
    },
    {
      id: 6,
      quote: "Recycling e-waste is not just about recovering materials; it’s about preserving our planet.",
      author: " Jane Goodall (Primatologist & Environmentalist)"
    },
    {
      id: 7,
      quote: "Technology should improve life, not destroy the environment.",
      author: " Unknown",
    },
    {
      id: 8,
      quote: "The greatest threat to our planet is the belief that someone else will save it.",
      author: "Robert Swan (Environmentalist & Explorer)",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === quotesData.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" bg-green-100 py-16 px-4 my-10 selection:bg-green-300 selection:text-black">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative">
          <svg
            className="absolute -top-8 -left-8 h-16 w-16 text-pink-200 transform -rotate-12"
            fill="currentColor"
            viewBox="0 0 32 32"
            aria-hidden="true"
          >
            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
          </svg>
          <div className="min-h-[150px] flex flex-col items-center justify-center">
            <p className="text-2xl font-light  italic text-black leading-relaxed transition-opacity duration-500">
              {quotesData[currentIndex].quote}
            </p>
            <p className="mt-4 text-pink-500 font-medium transition-opacity duration-500">
              — {quotesData[currentIndex].author}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quote;
