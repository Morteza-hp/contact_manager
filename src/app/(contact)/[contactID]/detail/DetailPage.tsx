"use client";
import { useDetailContacts } from "@/app/queries/contacts";
import ContactForm from "../../components/ContactForm";
import Loader from "../../components/Loader";

const DetailPage = ({ id }: { id: string }) => {
  const { data: contact, isPending } = useDetailContacts(id);
  return isPending ? (
    <Loader />
  ) : (
    <ContactForm formMode="detail" defaultValue={contact} onSubmit={() => {}} />
  );
};
export default DetailPage;
