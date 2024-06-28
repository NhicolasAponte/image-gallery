import "server-only";
import { db } from "../db";
import { eq, sql } from "drizzle-orm";
import { images } from "../db/schema";
import { redirect } from "next/navigation";
import analyticsServerClient from "../analytics";
import { auth } from "@clerk/nextjs/server";

export async function deleteImageById(id: number): Promise<void> {
  // console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
  // console.log(`Deleting image with id ${id}`);
  const user = auth();
  if (!user.userId) {
    throw new Error("Not authenticated");
  }
  
  await db
    .delete(images)
    .where(eq(images.id, id));

  analyticsServerClient.capture({
    distinctId: "server",
    event: "image_deleted",
    properties: {
      imageId: id
    }
  })

  console.log(`Deleted image with id ${id}`);

  redirect("/");
}
