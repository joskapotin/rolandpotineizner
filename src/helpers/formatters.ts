/* eslint-disable import/prefer-default-export */

export const slugify = (string: string) =>
  string
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")
