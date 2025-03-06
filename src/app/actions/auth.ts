import NextAuth from "next-auth";
import { ZodError } from "zod";
import Credentials from "next-auth/providers/credentials";
import { SigninFormSchema } from "../zod/option";

export const { handlers, auth } = NextAuth({
  providers: [
    Credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: {
        username: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          // let user = null;

          const { username, password } = await SigninFormSchema.parseAsync(
            credentials
          );

          // logic to salt and hash password
          // const pwHash = saltAndHashPassword(password);

          // logic to verify if the user exists
          // user = await getUserFromDb(username, pwHash);
          const user = {
            username: "morteza",
            password: "123",
          };
          if (!user) {
            throw new Error("Invalid credentials.");
          }

          // return JSON object with the user data
          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            // Return `null` to indicate that the credentials are invalid
            return null;
          }
        }
      },
    }),
  ],
});
