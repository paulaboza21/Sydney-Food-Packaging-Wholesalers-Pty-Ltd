const isGitHubPagesProject =
  window.location.hostname.endsWith(".github.io") &&
  window.location.pathname.split("/").filter(Boolean).length > 0;

const basePath = isGitHubPagesProject
  ? `/${window.location.pathname.split("/").filter(Boolean)[0]}`
  : "";

export const withBase = (path = "") => {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${basePath}${path}`;
};

export const baseAsset = (path = "") => withBase(path);
