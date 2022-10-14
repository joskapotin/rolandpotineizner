export const ROUTES = Object.freeze({
  ROOT: { URL: "/", NAME: "root" },
  HOME: { URL: "/", NAME: "home" },
  ABOUT: { URL: "about", NAME: "about" },
  WORKS: { URL: "works", NAME: "works" },
  TOOLS: { URL: "tools", NAME: "tools" },
  NOT_FOUND: { URL: "not-found", NAME: "not-found" },
})

export const API = Object.freeze({
  URL: "/tableaux/tableaux.json",
})

export const PATH = Object.freeze({
  WORKS: {
    SOURCE: "/tableaux/source",
    SMALL: "/tableaux/small",
  },
})
