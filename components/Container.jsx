export default function Container({ children, className = "" }) {
  return (
    <div
      className={`
        w-full
        max-w-7xl
        2xl:max-w-[1600px]
        px-4 sm:px-6 lg:px-8
        mx-auto
        ${className}
      `}
    >
      {children}
    </div>
  );
}
