const { createVanillaExtractPlugin } = require("@vanilla-extract/next-plugin");
const withVanillaExtract = createVanillaExtractPlugin();
const nextConfig = require("next").NextConfig;
module.exports = withVanillaExtract(nextConfig);
