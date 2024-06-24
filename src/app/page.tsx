import { db } from "~/server/db";

// selected version for typescript to get auto-complete here 
// this way ts can pick up the nextjs completions 
export const dynamic = "force-dynamic"

const imgURLs = [
  "https://utfs.io/f/f6f38cd2-9dd9-4404-bd5e-171cc120c8df-22m3v2.jfif",
  "https://utfs.io/f/f1eb7b34-e472-4d6b-9920-3065860cb171-mljgyv.jpg",
  "https://utfs.io/f/67056399-69cf-47a7-8a2c-20293231b4b0-pgwi01.jpg",
  "https://utfs.io/f/19965a70-a853-4f72-ae01-a8d144815f11-e65tkt.png",
];

const mockData = imgURLs.map((url, index) => ({
  id: index + 1,
  url,
  title: `Image ${index + 1}`,
}));

export default async function HomePage() {

  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4"> {/*  */}
        {[...mockData, ...mockData, ...mockData].map((image, i) => (
          <div key={i} className="w-48"> {/* all images match width */} 
            <img src={image.url} alt="{image.title}" className="" />
          </div>
        ))}
      </div>
    </main>
  );
}
