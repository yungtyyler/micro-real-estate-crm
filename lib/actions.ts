"use server";

import prisma from "@/lib/prisma";

export async function createUser(formData: FormData) {
  const email = formData.get("email") as string;
  const name = formData.get("name");

  await prisma.user.create({
    data: {
      email,
      name: name ? name.toString() : null,
    },
  });
}
