const CircleArrowIcon = ({ side = "right", color= "black" }) => {
  return (
    <>
      {side === "left" && (
        <svg
          width="67"
          height="67"
          viewBox="0 0 67 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="33.5"
            cy="33.5"
            r="31.5"
            stroke={color}
            strokeWidth="3"
          />
          <path
            d="M38.5 45.5L25.5 33.3378L38.5 20.5"
            stroke={color}
            strokeWidth="3"
          />
        </svg>
      )}
      {side === "right" && (
        <svg
          width="67"
          height="67"
          viewBox="0 0 67 67"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="33.5"
            cy="33.5"
            r="31.5"
            stroke={color}
            strokeWidth="3"
          />
          <path
            d="M27.5 20.5L40.5 32.6622L27.5 45.5"
            stroke={color}
            strokeWidth="3"
          />
        </svg>
      )}
    </>
  );
};

export default CircleArrowIcon;
