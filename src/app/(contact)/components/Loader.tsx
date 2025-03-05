import type { JSX } from "react";
const Loader = (): JSX.Element => {
  return (
    <div className="w-dvw h-dvh flex justify-center items-center">
      <div className="flex justify-center items-center">
        <div className="loader"></div>
        <p className="text-xl font-bold text-Purple mr-5">در حال بارگذاری</p>
      </div>
    </div>
  );
};

export default Loader;
