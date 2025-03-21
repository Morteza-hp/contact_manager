"use client";
import { Contact } from "@/app/models/contacts";
import { useCreateContact } from "@/app/queries/contacts";
import ContactForm from "../components/ContactForm";
import { z } from "zod";
import {
  requiredString,
  requiredEmail,
  requiredNumber,
} from "@/app/zod/option";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

const AddPage = () => {
  const router = useRouter();
  const validationsSchema = z.object({
    name: requiredString(4, "نام"),
    lastName: requiredString(4, "نام خانوادگی"),
    profilePicture: z.any(),
    age: requiredNumber(1, 100, "سن"),
    email: requiredEmail("ایمیل"),
    phoneNumber: requiredString(6, "شماره تلفن"),
  });

  const { mutateAsync: addContact } = useCreateContact();
  const onSubmit = async (contact: Contact) => {
    await addContact(contact)
      .then((order) => {
        toast.success("مخاطب با موفقیت ایجاد شد.", {
          icon: "🚀",
          style: {
            borderRadius: "4px",
            border: "1px solid #50FA7B",
            background: "#282A36",
            color: "#fff",
          },
        });
        router.push("/contact/");
      })
      .catch((_errors) => {
        toast.error("در ایجاد مخاطب مشکلی پیش آمده است.", {
          icon: "🤔",
          style: {
            borderRadius: "4px",
            border: "1px solid #FF5555",
            background: "#282A36",
            color: "#fff",
          },
        });
      });
  };

  return (
    <ContactForm
      formMode="add"
      onSubmit={onSubmit}
      validationsSchema={validationsSchema}
    />
  );
};
export default AddPage;
