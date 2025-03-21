"use server";

import { z } from "zod";
import { requiredEmail, requiredNumber, requiredString } from "../zod/option";
import { ActionResponse, Contact } from "../models/contacts";

const contactSchema = z.object({
  name: requiredString(4, "نام"),
  lastName: requiredString(4, "نام خانوادگی"),
  profilePicture: z.any(),
  age: requiredNumber(1, 100, "سن"),
  email: requiredEmail("ایمیل"),
  phoneNumber: requiredString(6, "شماره تلفن"),
});

export async function submitContact(
  prevState: ActionResponse | null,
  formData: FormData
): Promise<ActionResponse> {
  try {
    const rawData: Contact = {
      first_name: formData.get("first_name") as string,
      last_name: formData.get("last_name") as string,
      age: formData.get("age") as unknown as number,
      email: formData.get("email") as string,
      phone_number: formData.get("phone_number") as string,
      picture: formData.get("picture") as string,
    };
    console.log("rawData: ", rawData);
    // Validate the form data
    const validatedData = contactSchema.safeParse(rawData);
    console.log("validatedData: ", validatedData);

    if (!validatedData.success) {
      return {
        success: false,
        message: "لطفا مشکلات موجود در فرم را حل نمایید",
        errors: validatedData.error.flatten().fieldErrors,
        inputs: rawData,
      };
    }

    // Here you would typically save the address to your database
    console.log("Address submitted:", validatedData.data);
    // const response = await fetch(url);
    // const json: Contact = await response.json();

    // if (!response.ok) {
    //   return { message: "مشکلی پیش اومده!" };
    // }

    // redirect("/");

    return {
      success: true,
      message: "Address saved successfully!",
    };
  } catch (error) {
    return {
      success: false,
      message: "An unexpected error occurred",
    };
  }
}
