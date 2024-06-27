import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import CustomUploadButton from "~/components/upload-button";
// import { useRouter } from "next/navigation";
// import { UploadButton } from "~/utils/uploadthing";

export default function TopNav() {
  // const router = useRouter();

  return (
    <nav className="flex items-center justify-between border-b border-slate-400 bg-black p-4">
      <h1 className="text-2xl font-bold">Image Gallery</h1>
      <div className="flex flex-row gap-4 items-center">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <CustomUploadButton/>
          {/* <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();// refresh runs the route on the server and sends down the new data to update content 
            }}
          /> */}
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
