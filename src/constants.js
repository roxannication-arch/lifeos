export const STATEMENT_FILES = {
  "2026-03": "/statements/2026-03.pdf",
};

export const STATEMENT_PAGE_IMAGES = {
  "/statements/2026-03.pdf": Array.from(
    { length: 9 },
    (_, index) => `/statements/2026-03-pages/page-${index + 1}.png`,
  ),
};
