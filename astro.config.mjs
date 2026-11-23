import { defineConfig } from "astro/config";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isUserOrOrganizationSite = repositoryName?.endsWith(".github.io") ?? false;
const base =
  process.env.GITHUB_ACTIONS && repositoryName && !isUserOrOrganizationSite
    ? `/${repositoryName}`
    : "/";

export default defineConfig({
  base,
  site: process.env.SITE_URL,
});
