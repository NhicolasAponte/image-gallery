import "server-only";
import { db } from "../db";
import { eq, sql } from "drizzle-orm";
import { images } from "../db/schema";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteImageById(id: number): Promise<void> {
  console.log("XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX");
  console.log(`Deleting image with id ${id}`);

  await db
    .delete(images)
    .where(eq(images.id, id));


  console.log(`Deleted image with id ${id}`);

  redirect("/");
}
