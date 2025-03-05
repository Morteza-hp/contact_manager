import { SidebarProps } from "@/app/models/contacts";
import FilterInput from "./FilterInput";

import type { JSX } from "react";

const Sidebar = ({
  contacts,
  setFilteredContacts,
}: SidebarProps): JSX.Element => {
  return (
    <div className="hidden fixed lg:block w-[22rem] top-24 right-4 bg-Background border border-CurrentLine h-dvh rounded-xl py-6 px-8 space-y-4">
      <FilterInput
        id="nameFilter"
        placeholder="جستجوی نام"
        contacts={contacts}
        setFilteredContacts={setFilteredContacts}
      />
      <FilterInput
        id="lastNameFilter"
        placeholder="جستجوی نام خانوادگی"
        contacts={contacts}
        setFilteredContacts={setFilteredContacts}
      />
      <FilterInput
        id="phoneNumberFilter"
        placeholder="جستجوی شماره تلفن"
        contacts={contacts}
        setFilteredContacts={setFilteredContacts}
      />
    </div>
  );
};

export default Sidebar;
