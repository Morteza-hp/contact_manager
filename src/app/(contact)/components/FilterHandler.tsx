import { Contact } from "@/app/models/contacts";

const filterHandler = (
  contacts: Contact[],
  setFilteredContacts: any,
  text: string,
  name: string
) => {
  function contactFinder(contact: Contact) {
    if (name === "nameFilter") {
      return contact.name.toLowerCase().includes(text.toLowerCase());
    } else if (name === "lastNameFilter") {
      return contact.lastName.toLowerCase().includes(text.toLowerCase());
    } else {
      return contact.phoneNumber.toLowerCase().includes(text.toLowerCase());
    }
  }
  let x: Contact[] =
    text.length >= 1 ? contacts.filter(contactFinder) : contacts;
  setFilteredContacts(x);
};

export default filterHandler;
