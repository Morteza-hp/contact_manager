"use client";

import { useDeleteContacts } from "@/app/queries/contacts";
import { DeleteIcon } from "../../../../public/assets/images/icons";
import { useRef, useState, type JSX } from "react";
import { Contact } from "@/app/models/contacts";
import toast from "react-hot-toast";

const DeleteButton = ({ contact }: { contact: Contact }): JSX.Element => {
  const { mutate: deleteContactById } = useDeleteContacts();
  const [item, setItem] = useState<Contact | null>();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const showModal = (): void => {
    setItem(contact);
    dialogRef.current && dialogRef.current.showModal();
  };
  const closeModal = (): void => {
    dialogRef.current && dialogRef.current.close();
  };
  const deleteItem = () => {
    if (!item?.id) return;

    deleteContactById(item?.id, {
      onSuccess: () =>
        toast.success("مخاطب با موفقیت حذف شد.", {
          icon: "🚀",
          style: {
            borderRadius: "4px",
            border: "1px solid #50FA7B",
            background: "#282A36",
            color: "#fff",
          },
        }),
      onError: (e) =>
        toast.error("در حذف مخاطب مشکلی پیش آمده است.", {
          icon: "🤔",
          style: {
            borderRadius: "4px",
            border: "1px solid #FF5555",
            background: "#282A36",
            color: "#fff",
          },
        }),
    });
    closeModal();
    setItem(null);
  };
  return (
    <>
      <button
        type="button"
        className="py-3 px-4 bg-Red font-semibold rounded-xl flex gap-1 place-items-center hover:bg-red-500"
        onClick={() => showModal()}
      >
        <DeleteIcon />
        حذف
      </button>
      <dialog
        ref={dialogRef}
        className="backdrop:bg-black/50 bg-Comment rounded-xl border-2 border-CurrentLine p-4"
      >
        <p className="text-xl">آیا از حذف این مخاطب مطمئن هستید؟</p>
        <p className="text-sm mt-1 text-gray-800">
          این عمل غیرقابل بازگشت است.
        </p>
        <div className="mt-3">
          <button
            onClick={() => closeModal()}
            className="py-3 px-4 bg-Green font-semibold rounded-xl hover:bg-green-500 ml-1"
          >
            انصراف
          </button>
          <button
            onClick={deleteItem}
            className="py-3 px-4 bg-Red font-semibold rounded-xl hover:bg-red-500"
          >
            مطمئنم
          </button>
        </div>
      </dialog>
    </>
  );
};
export default DeleteButton;
