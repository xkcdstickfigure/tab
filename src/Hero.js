export const Hero = ({ image }) => (
  <div
    className="w-full h-80 shadow-xl bg-cover bg-center"
    style={{ backgroundImage: `url("${image}")` }}
  ></div>
);
