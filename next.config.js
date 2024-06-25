/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.js");

// NOTE UNDO: removing typescript and eslint build errors 
// this will speed up the build process
// we will set up github actions to do the type 
// checking and linting
/** @type {import("next").NextConfig} */
const config = {
//     Error: Invalid src prop (https://utfs.io/f/004d042b-9e07-48bd-8fb8-0844ab34af97-au325r.jpg) on `next/image`, hostname "utfs.io" is not configured under images in your `next.config.js`
// See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host
    images: {
        remotePatterns: [{ hostname: "utfs.io"}],
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default config;
