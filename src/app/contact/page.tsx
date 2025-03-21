import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
import { Fragment, Key } from "react";
import { Contact } from "../models/contacts";
import Link from "next/link";
import FilterInput from "./components/FilterInput";
import LoadingCard from "./components/LoadingCard";
import { ArrowIcon } from "../../../public/assets/images/icons";
import { useGetContacts } from "../queries/contacts";

export default async function Home() {
  const uxSkeletonArray: number[] = Array(9).fill(0);
  const contacts = await useGetContacts();
  console.log("contacts: ", contacts?.results);
  return (
    <>
      {/* <Sidebar contacts={contacts} /> */}
      <div className="w-full lg:pr-[24rem] p-4 pt-24">
        <div className="flex flex-col justify-center items-center gap-2 lg:hidden">
          <Link
            className="py-3 px-4 bg-Green font-semibold rounded-xl flex place-items-center sm:hidden hover:bg-green-500"
            href="/contact/add"
          >
            مخاطب جدید
          </Link>
          <div className="py-3 w-full">
            <details className="group">
              <summary className="flex justify-between items-center cursor-pointer">
                <p className="text-xl text-white">فیلترها</p>
                <span className="transition group-open:rotate-180">
                  <ArrowIcon />
                </span>
              </summary>
              {/* <div className="grid grid-cols-1 md:grid-cols-3 border border-CurrentLine p-5 rounded-xl mt-3 gap-3">
                <FilterInput
                  id="nameFilter"
                  placeholder="جستجوی نام"
                  contacts={contacts}
                />
                <FilterInput
                  id="lastNameFilter"
                  placeholder="جستجوی نام خانوادگی"
                  contacts={contacts}
                />
                <FilterInput
                  id="phoneNumberFilter"
                  placeholder="جستجوی شماره تلفن"
                  contacts={contacts}
                />
              </div> */}
            </details>
          </div>
        </div>
        <div className="grid grid-cols-1 pt-4 lg:pt-0 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {!contacts
            ? uxSkeletonArray.map((skeleton, index: Key) => (
                <Fragment key={index}>
                  <LoadingCard />
                </Fragment>
              ))
            : contacts?.results?.map((contact: Contact, index: Key) => (
                <Fragment key={index}>
                  <Card contact={contact} />
                </Fragment>
              ))}
        </div>
      </div>
    </>
  );
}

// [
//   {
//       "id": 12,
//       "first_name": "Georges",
//       "last_name": "St-Pierre",
//       "age": 43,
//       "email": "",
//       "phone_number": "09708892323",
//       "picture": null
//   },
//   {
//       "id": 11,
//       "first_name": "Alex",
//       "last_name": "Pereira",
//       "age": 37,
//       "email": "",
//       "phone_number": "09211415676",
//       "picture": null
//   },
//   {
//       "id": 10,
//       "first_name": "Tristan",
//       "last_name": "Tate",
//       "age": 34,
//       "email": "",
//       "phone_number": "09364887765",
//       "picture": null
//   },
//   {
//       "id": 9,
//       "first_name": "Joe",
//       "last_name": "Rogan",
//       "age": 53,
//       "email": "",
//       "phone_number": "09557877712",
//       "picture": null
//   },
//   {
//       "id": 8,
//       "first_name": "Lionel",
//       "last_name": "Messi",
//       "age": 37,
//       "email": "",
//       "phone_number": "09922324353",
//       "picture": null
//   },
//   {
//       "id": 7,
//       "first_name": "Jordan",
//       "last_name": "Peterson",
//       "age": 60,
//       "email": "",
//       "phone_number": "09807784899",
//       "picture": null
//   },
//   {
//       "id": 6,
//       "first_name": "David",
//       "last_name": "Goggins",
//       "age": 55,
//       "email": "",
//       "phone_number": "09224597622",
//       "picture": null
//   },
//   {
//       "id": 5,
//       "first_name": "Andrew",
//       "last_name": "Tate",
//       "age": 35,
//       "email": "Cobratate@gmail.com",
//       "phone_number": "09113006002",
//       "picture": null
//   },
//   {
//       "id": 4,
//       "first_name": "Elon",
//       "last_name": "Musk",
//       "age": 50,
//       "email": "",
//       "phone_number": "09122222222",
//       "picture": null
//   },
//   {
//       "id": 3,
//       "first_name": "Donald",
//       "last_name": "Trump",
//       "age": 70,
//       "email": "",
//       "phone_number": "09121111111",
//       "picture": null
//   }
// ]
