import React from 'react';

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] focus:outline-none"
      onClick={handleClick}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-indigo-600 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}
        style={{
          fontSize: '20px', // Increase the font size
          fontFamily: "'Poppins', sans-serif", // Apply the Poppins font
          color: '#FFFFFF', // Change text color to white
          fontWeight: '600', // Semi-bold font weight
          padding: '10px 20px', // Add padding for better appearance
          background: '#1D4ED8', // Change button background color to a darker shade of blue
          border: '2px solid #2563EB', // Change border color to a lighter shade of blue
          borderRadius: '8px', // Rounded corners
          transition: 'color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease', // Smooth transition for color changes
        }}
      >
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
};

export default MagicButton;
