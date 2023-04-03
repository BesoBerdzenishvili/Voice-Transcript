import React, { useState, useRef, useEffect } from "react";
import "./FontSize.css";

type FontSizeProps = {
  size: number;
  setSize: (value: number) => void;
};

const FontSize: React.FC<FontSizeProps> = ({ size, setSize }) => {
  const [showSlider, setShowSlider] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    setShowSlider(!showSlider);
  };

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSize(Number(event.target.value));
  };

  const handleOutsideClick = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      setShowSlider(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div ref={containerRef} className="container">
      <button onClick={handleButtonClick}>F: {size}</button>
      {showSlider && (
        <input
          type="range"
          min={4}
          max={100}
          value={size}
          onChange={handleSliderChange}
        />
      )}
    </div>
  );
};

export default FontSize;
