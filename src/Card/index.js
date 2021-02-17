export const Card = ({
  children,
  width = 1,
  height = 1,
  className = "",
  style,
  ...props
}) => (
  <div
    className={`bg-white rounded-md overflow-hidden shadow-md col-span-${width} row-span-${height} ${className}`}
    style={{ height: `${height * 8 + (height - 1) * 0.75}rem`, ...style }}
    {...props}
  >
    {children}
  </div>
);

// row-span-1
// row-span-2
// row-span-3
// row-span-4
// row-span-5

// col-span-1
// col-span-2
// col-span-3
// col-span-4
// col-span-5
