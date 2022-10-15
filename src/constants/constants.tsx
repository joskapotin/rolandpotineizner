export const ROUTES = {
  HOME: { URL: "/", NAME: "home" },
  ABOUT: { URL: "about", NAME: "about" },
  WORKS: { URL: "works", NAME: "works" },
  WORK: { URL: ":slug", NAME: "work" },
  TOOLS: { URL: "tools", NAME: "tools" },
  NOT_FOUND: { URL: "not-found", NAME: "not-found" },
} as const

export const NAV_MENU = [ROUTES.HOME, ROUTES.ABOUT, ROUTES.WORKS, ROUTES.TOOLS]

export const API = Object.freeze({
  URL: "/tableaux/tableaux.json",
})

export const PATH = Object.freeze({
  WORKS: {
    SOURCE: "/tableaux/source",
    SMALL: "/tableaux/small",
  },
})
