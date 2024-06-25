import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getImagesById() {

    const user = auth();

    if (!user.userId) {
        throw new Error("Not authenticated");
    }

  const images = await db.query.images.findMany({
    where: (model, { eq }) => eq(model.userId, user.userId),
    orderBy: (model, { desc }) => desc(model.id),
  });
  console.log(images);
  return images;
}