"use client";

import { useActionState } from "react";
import { submitContact } from "@/app/actions/contacts";
import { ActionResponse } from "@/app/models/contacts";
import Input from "./form/Input";
import {
  AddIcon,
  BackIcon,
  EditIcon,
  EmailIcon,
  GalleryIcon,
  PhoneIcon,
  SandClockIcon,
  UserIcon,
} from "../../../../public/assets/images/icons";
import Link from "next/link";

const initialState: ActionResponse = {
  success: false,
  message: "",
};

const ContactForm = ({ formMode }: { formMode: string }) => {
  const [state, action, isPending] = useActionState(
    submitContact,
    initialState
  );

  return (
    <fieldset disabled={formMode === "detail"}>
      <form
        action={action}
        noValidate
        className="flex flex-col items-center pt-32 px-4 w-dvw"
      >
        <div className="w-full lg:w-1/2 p-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border rounded-lg border-CurrentLine">
          <div className="space-y-2">
            <Input
              icon={<UserIcon />}
              type="text"
              text="نام"
              name="first_name"
              defaultValue={state.inputs?.first_name}
            />
            {state?.errors?.first_name && (
              <p id="name-error" className="text-sm text-red-500">
                {state.errors.first_name[0]}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Input
              icon={<UserIcon />}
              type="text"
              text="نام خانوادگی"
              name="last_name"
              defaultValue={state.inputs?.last_name}
            />
            {state?.errors?.last_name && (
              <p id="last_name-error" className="text-sm text-red-500">
                {state.errors.last_name[0]}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Input
              icon={<EmailIcon />}
              type="email"
              text="ایمیل"
              name="email"
              defaultValue={state.inputs?.email}
            />
            {state?.errors?.email && (
              <p id="email-error" className="text-sm text-red-500">
                {state.errors.email[0]}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Input
              icon={<GalleryIcon />}
              type="text"
              text="عکس پروفایل"
              name="picture"
              defaultValue={state.inputs?.picture}
            />
            {state?.errors?.picture && (
              <p id="profile_picture-error" className="text-sm text-red-500">
                {state.errors.picture[0]}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Input
              icon={<PhoneIcon />}
              type="number"
              text="شماره"
              name="phone_number"
              defaultValue={state.inputs?.phone_number}
            />
            {state?.errors?.phone_number && (
              <p id="phone_number-error" className="text-sm text-red-500">
                {state.errors.phone_number[0]}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Input
              icon={<SandClockIcon />}
              type="number"
              text="سن"
              name="age"
              defaultValue={state.inputs?.age}
            />
            {state?.errors?.age && (
              <p id="age-error" className="text-sm text-red-500">
                {state.errors.age[0]}
              </p>
            )}
          </div>
        </div>
        {state?.message && (
          <p className="mt-4 text-sm text-red-500">{state.message}</p>
        )}
        <div className="flex mt-4 gap-2">
          {formMode !== "detail" && (
            <button
              type="submit"
              disabled={isPending}
              className="py-3 px-4 font-semibold rounded-xl flex gap-1 place-items-center bg-Green hover:bg-green-500"
            >
              <div className="size-[14px]">
                {formMode === "add" ? (
                  <AddIcon />
                ) : (
                  formMode === "edit" && <EditIcon />
                )}
              </div>
              {isPending
                ? "Saving..."
                : formMode === "add"
                ? "ایجاد مخاطب"
                : formMode === "edit" && "ویرایش مخاطب"}
            </button>
          )}
          <Link
            href={`/contact`}
            className="py-3 px-4 bg-Purple font-semibold rounded-xl flex gap-1 place-items-center hover:bg-purple-500"
          >
            <div className="size-4">
              <BackIcon />
            </div>
            بازگشت
          </Link>
        </div>
      </form>
    </fieldset>
  );
};

export default ContactForm;
