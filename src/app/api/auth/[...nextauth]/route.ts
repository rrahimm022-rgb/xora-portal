import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth"; // Sesuaikan path jika file auth.ts Anda di tempat lain

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
