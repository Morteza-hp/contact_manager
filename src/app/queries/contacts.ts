"use server";

import { redirect } from "next/navigation";
import { Contact, ContactsList } from "../models/contacts";

const url = "http://localhost:8000/contacts";

export async function useGetContacts() {
  const response = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    // cache: "no-store",
    next: { revalidate: 0 },
  });
  if (!response.ok) {
    return { message: "مشکلی پیش اومده!" };
  }
  const json: ContactsList = await response.json();
  return json;
}

async function getPost(id: string) {
  const res = await fetch(`https://api.vercel.app/blog/${id}`, {
    cache: "force-cache",
  });
  // const post: Post = await res.json();
  // if (!post) notFound();
  // return post;
}

export async function useCreateContact(formData: FormData) {
  const response = await fetch(url);
  const json: Contact = await response.json();

  if (!response.ok) {
    return { message: "مشکلی پیش اومده!" };
  }

  redirect("/");
}
