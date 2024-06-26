import { clerkClient } from "@clerk/nextjs/server";
import { getImageById } from "~/server/queries";

export default async function FullPageImageView({
  imageId,
}: {
  imageId: number;
}) {
  const image = await getImageById(imageId);
  const uploaderInfo = await clerkClient.users.getUser(image.userId)
  console.log(uploaderInfo)
  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img src={image.url} alt={image.name} className="object-contain" />
      </div>
      <div className="flex w-48 flex-shrink-0 flex-col border p-4">
        <h1 className=" text-center text-xl font-bold">
          {image.name}
        </h1>
        <div className="flex flex-col p-2">
            <span>Uploaded By:</span>
            <span className="text-sm">{uploaderInfo.username}</span>
        </div>
        <div className="flex flex-col p-2">
            <span>Created On:</span>
            <span className="text-sm">{new Date(image.createdAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
