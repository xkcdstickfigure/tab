export const Card = ({
  children,
  width = 1,
  height = 1,
  className = "",
  style,
}) => (
  <div
    className={`bg-white rounded-md shadow-md col-span-${width} row-span-${height} ${className}`}
    style={{ height: `${height * 8 + (height - 1) * 0.75}rem`, ...style }}
  >
    {children}
  </div>
);
