import { useEffect, useState } from "react";

export const FoundMe = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Fade in
    setVisible(true);
    // Fade out
    const timer = setTimeout(()=> setVisible(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`transition-opacity duration-700 flex flex-col items-center mt-6 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <img
        src="/joel_circular.png"
        alt="Joel Kizhakkayil"
        className="rounded-full w-16 h-16 mx-auto"
      />
      <p className="mx-auto">You found me! 👋</p>
    </div>
  );
};