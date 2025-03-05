import { CustomInputProps } from "@/app/models/contacts";
import { useFormContext } from "react-hook-form";

import type { JSX } from "react";

const CustomInput = ({ icon, text, type, name }: CustomInputProps): JSX.Element => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const getFormErrorMessage = () => {
    return <>{errors?.[name]?.message}</>;
  };
  return (
    <div className="flex flex-col">
      <div className="relative">
        <input
          autoComplete="off"
          type={type}
          {...register(name)}
          id={name}
          className="peer p-4 ps-11 block w-full rounded-lg text-sm placeholder:text-transparent
          transition ease-in-out duration-200 border border-CurrentLine hover:border-Purple focus:outline
        focus:outline-Purple focus:border-Purple bg-CurrentLine text-white focus:pt-6 focus:pb-2
          not-placeholder-shown:pt-6 not-placeholder-shown:pb-2 autofill:pt-6 autofill:pb-2 focus:bg-Background"
          placeholder="you@email.com"
        />
        <label className="absolute px-4 ps-11 top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100 text-gray-400 peer-focus:text-xs peer-focus:-translate-y-2 peer-focus:text-Purple peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-translate-y-2 peer-not-placeholder-shown:text-Purple">
          {text}
        </label>
        <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
          {icon}
        </div>
      </div>
      <p className="text-Red mt-1 -mb-2 text-xs">{getFormErrorMessage()}</p>
    </div>
  );
};

export default CustomInput;
