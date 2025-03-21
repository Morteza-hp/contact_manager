import { Metadata } from "next";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "ایجاد",
};

const Add = () => {
  return <ContactForm formMode="add" />;
};

export default Add;
