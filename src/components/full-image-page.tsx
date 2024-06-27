import { clerkClient } from "@clerk/nextjs/server";
import { getImageById } from "~/server/queries";
import { Button } from "./ui/button";

export default async function FullPageImageView({
  imageId,
}: {
  imageId: number;
}) {
  const image = await getImageById(imageId);
  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  console.log(uploaderInfo);
  return (
    <div className="flex h-full w-full min-w-0 items-center justify-center">
      <div className="flex shadow-xl">
        <div className="flex flex-shrink ">
          <img src={image.url} alt={image.name} className="object-contain" />
        </div>
        <div className="flex flex-shrink-0 flex-col border space-y-6 p-4">
          <h1 className="border-b border-white text-center text-xl font-bold">
            {image.name}
          </h1>
          <div className="flex gap-2 ">
            <span className="text-nowrap">Uploaded By:</span>
            <span>{uploaderInfo.username}</span>
          </div>
          <div className="flex gap-2 ">
            <span className="text-nowrap">Created On:</span>
            <span>{new Date(image.createdAt).toLocaleDateString()}</span>
          </div>
          {/* <Button onClick={() => window.history.back()}>Back</Button> */}
          <div className="flex flex-col gap-2">
            <Button className="text-md">Download</Button>
            <Button variant={"outline"} className="text-md">Delete</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
