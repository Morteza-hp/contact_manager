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
  let data = await fetch("https://api.vercel.app/blog");
  let posts = await data.json();
  console.log("posts: ", posts);
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
            : contacts?.map((contact: Contact, index: Key) => (
                <Fragment key={index}>
                  <Card contact={contact} />
                </Fragment>
              ))}
        </div>
      </div>
    </>
  );
}
