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
