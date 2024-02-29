/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public", //creates service workers in the destination
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false, // means dont disable the PWA on any environment
  workboxOptions: {
    disableDevLogs: true,
  },
});
const nextConfig = {};

export default withPWA(nextConfig);
