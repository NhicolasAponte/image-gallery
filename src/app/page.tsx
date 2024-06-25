import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { getImagesById } from "~/server/queries";

// selected version for typescript to get auto-complete here
// this way ts can pick up the nextjs completions
export const dynamic = "force-dynamic";

// const imgURLs = [
//   "https://utfs.io/f/f6f38cd2-9dd9-4404-bd5e-171cc120c8df-22m3v2.jfif",
//   "https://utfs.io/f/f1eb7b34-e472-4d6b-9920-3065860cb171-mljgyv.jpg",
//   "https://utfs.io/f/67056399-69cf-47a7-8a2c-20293231b4b0-pgwi01.jpg",
//   "https://utfs.io/f/19965a70-a853-4f72-ae01-a8d144815f11-e65tkt.png",
// ];

// const mockData = imgURLs.map((url, index) => ({
//   id: index + 1,
//   url,
//   title: `Image ${index + 1}`,
// }));

async function ImageList() {
  const images = await getImagesById();

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {images.map((image) => (
        <div key={image.id} className="w-48">
          <Link href={`/wallpapers/${image.id}`}>
            {/* all images match width */}
            <Image
              src={image.url}
              alt="{image.title}"
              className=""
              width={250}
              height={250}
              style={{ objectFit: "contain" }}
            />
          </Link>
        </div>
      ))}
    </div>
  );
}

export default async function HomePage() {
  return (
    <main className="flex flex-col items-center">
      <SignedOut>
        <div className="w-fit rounded-md border p-4 text-center">
          Sign in or Create an Account
        </div>
      </SignedOut>
      <SignedIn>
        <ImageList />
      </SignedIn>
    </main>
  );
}
