import { ChangeEvent } from "react";
import filterHandler from "./FilterHandler";
import { FilterInputProps } from "@/app/models/contacts";
import { SearchIcon } from "../../../../public/assets/images/icons";

const FilterInput = ({
  contacts,
  setFilteredContacts,
  id,
  placeholder,
}: FilterInputProps) => {
  return (
    <div className="relative">
      <input
        type="text"
        id={id}
        className="p-4 block w-full ps-11 rounded-lg text-sm transition ease-in-out duration-200 border border-CurrentLine focus:outline hover:border-Purple focus:outline-Purple focus:border-Purple bg-CurrentLine text-white"
        placeholder={placeholder}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          filterHandler(contacts, setFilteredContacts, e.target.value, id)
        }
      />
      <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4">
        <SearchIcon />
      </div>
    </div>
  );
};

export default FilterInput;
