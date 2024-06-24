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
    typescript: {
        ignoreBuildErrors: true,
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

export default config;
