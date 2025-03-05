import { Contact } from "@/app/models/contacts";
import Link from "next/link";
import { EditIcon, DetailIcon } from "../../../../public/assets/images/icons";
import DeleteButton from "./DeleteButton";
import Image from "next/image";

import type { JSX } from "react";

const Card = ({ contact }: { contact: Contact }): JSX.Element => {
  return (
    <div className="flex flex-col self-center bg-CurrentLine hover:bg-Background transition-[background-color] duration-[0.32s] ease-[ease-in-out] hover:shadow-[inset_0px_0px_0px_2px_#44475A] border-t-4 border-t-Purple rounded-xl">
      <div className="p-4 md:p-5">
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <div className="grid grid-cols-2">
              <span className="text-white items-center">نام : </span>
              <span className="text-white">{contact.name}</span>
            </div>
            <hr className="my-2 bg-black border-gray-500" />
            <div className="grid grid-cols-2">
              <span className="text-white">نام خانوادگی : </span>
              <span className="text-white">{contact.lastName}</span>
            </div>
            <hr className="my-2 bg-black border-gray-500" />
            <div className="grid grid-cols-2">
              <span className="text-white">شماره تلفن : </span>
              <span className="text-white">{contact.phoneNumber}</span>
            </div>
            <hr className="my-2 bg-black border-gray-500" />
            <div className="grid grid-cols-2">
              <span className="text-white">ایمیل : </span>
              <span className="text-white">{contact.email}</span>
            </div>
          </div>
          <div className="col-span-1 self-center justify-self-center align-self">
            <Image
              src={contact?.profilePicture}
              height={85}
              width={85}
              alt={`آواتار ${contact.name}`}
              className="rounded-xl"
            />
          </div>
        </div>
        <div className="flex mt-3 gap-1 justify-center">
          <Link
            href={`/${contact.id}/detail`}
            className="py-3 px-4 bg-Green font-semibold rounded-xl flex gap-1 place-items-center hover:bg-green-500"
          >
            <div className="size-4">
              <DetailIcon />
            </div>
            جزئیات
          </Link>
          <Link
            href={`/${contact.id}/edit`}
            className="py-3 px-4 bg-Purple font-semibold rounded-xl flex gap-1 place-items-center hover:bg-purple-500"
          >
            <EditIcon />
            ویرایش
          </Link>
          <DeleteButton contact={contact} />
        </div>
      </div>
    </div>
  );
};

export default Card;
