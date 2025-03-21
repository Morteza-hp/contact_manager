export type Contact = {
  id?: number;
  first_name: string;
  last_name: string;
  age: number;
  email: string;
  phone_number: string;
  picture?: any;
};

export type ContactsList = {
  count: number;
  next?: string;
  previous?: string;
  results: Contact[];
  message?: string;
};

export type CommonFormProps<T> = {
  formMode: "add" | "edit" | "detail";
  defaultValue?: T;
  validationsSchema?: any;
  onSubmit: (data: T) => Promise<void> | void;
};

export type CustomInputProps = {
  icon: any;
  text: string;
  type: string;
  name: string;
  defaultValue?: string | number;
};

export type FilterInputProps = {
  contacts: Contact[];
  setFilteredContacts: any;
  id: string;
  placeholder: string;
};

export type SidebarProps = {
  contacts: Contact[];
  setFilteredContacts: any;
};

export type ActionResponse = {
  success: boolean;
  message: string;
  errors?: {
    [K in keyof Contact]?: string[];
  };
  inputs?: Contact;
};
