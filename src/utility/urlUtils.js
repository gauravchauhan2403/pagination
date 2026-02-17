export const getPageFromUrl = () => {
  const params = new URLSearchParams(window.location.search);
  return Number(params.get("page")) || 1;
};

export const setPageToUrl = (page) => {
  const params = new URLSearchParams(window.location.search);
  params.set("page", page);
  window.history.pushState({}, "", `?${params.toString()}`);
};
