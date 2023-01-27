const Arrow = () => (
  <svg
    width="13"
    height="17"
    viewBox="0 0 13 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1 1.27865L12 8.31616L0.999999 15.3537"
      stroke="#363853"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

const Route = () => {
  return (
    <div className="flex items-center gap-x-6 text-hijau">
      <p>Home</p>
      <Arrow />
      <p>Men{"’"}s Fashion</p>
      <Arrow />
      <p>Men{"’"}s Pants</p>
      <Arrow />
      <p>Pants</p>
      <Arrow />
      <p>Men{"’"}s Long Pant Dark Blue by SatFashion</p>
    </div>
  );
};
export default Route;
