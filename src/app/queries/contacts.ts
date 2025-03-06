import { Contact } from "../models/contacts";

export async function useGetContacts() {
  const url = "http://localhost:8000/contacts";
  try {
    const response = await fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
      // cache: "no-store",
      // next: { revalidate: false },
    });
    console.log("response: ", response);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json: Contact[] = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
}
