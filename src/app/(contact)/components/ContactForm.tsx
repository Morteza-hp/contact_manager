import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "./CustomInput";
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

import { CommonFormProps, Contact } from "../../models/contacts";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

type ContactFormProps = CommonFormProps<Contact>;

const ContactForm = ({
  formMode,
  onSubmit,
  defaultValue,
  validationsSchema,
}: ContactFormProps) => {
  const methods = useForm({
    defaultValues: defaultValue,
    resolver: zodResolver(validationsSchema),
  });
  return (
    <fieldset disabled={formMode === "detail"}>
      <FormProvider {...methods}>
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          id="contact"
          className="flex flex-col items-center pt-32 px-4 w-dvw"
          noValidate
        >
          <div className="w-full lg:w-1/2 p-8 grid grid-cols-1 sm:grid-cols-2 gap-4 border rounded-lg border-CurrentLine">
            <CustomInput
              icon={<UserIcon />}
              type={"text"}
              text={"نام"}
              name={"name"}
            />
            <CustomInput
              icon={<UserIcon />}
              type={"text"}
              text={"نام خانوادگی"}
              name={"lastName"}
            />
            <CustomInput
              icon={<EmailIcon />}
              type={"email"}
              text={"ایمیل"}
              name={"email"}
            />
            <CustomInput
              icon={<GalleryIcon />}
              type={"text"}
              text={"عکس پروفایل"}
              name={"profilePicture"}
            />
            <CustomInput
              icon={<PhoneIcon />}
              type={"number"}
              text={"شماره"}
              name={"phoneNumber"}
            />
            <CustomInput
              icon={<SandClockIcon />}
              type={"number"}
              text={"سن"}
              name={"age"}
            />
          </div>
          <div className="flex mt-4 gap-2">
            {formMode !== "detail" && (
              <button
                type="submit"
                className="py-3 px-4 font-semibold rounded-xl flex gap-1 place-items-center bg-Green hover:bg-green-500"
              >
                <div className="size-[14px]">
                  {formMode === "add" ? (
                    <AddIcon />
                  ) : (
                    formMode === "edit" && <EditIcon />
                  )}
                </div>
                {formMode === "add"
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
      </FormProvider>
    </fieldset>
  );
};

export default ContactForm;
