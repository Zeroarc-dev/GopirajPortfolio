/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site: `npm run build` writes plain HTML/CSS/JS to ./out
  output: "export",
  images: { unoptimized: true }, // images are pre-optimised WebP in /public
};

export default nextConfig;
