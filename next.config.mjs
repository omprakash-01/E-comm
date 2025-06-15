import withFlowbiteReact from "flowbite-react/plugin/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    unoptimized: true,
    domains: ["images.pexels.com"],
  },
};

export default withFlowbiteReact(nextConfig);
