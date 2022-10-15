export const ROUTES = {
  HOME: { URL: "/", NAME: "home" },
  ABOUT: { URL: "about", NAME: "about" },
  WORKS: { URL: "works", NAME: "works" },
  WORK: { URL: ":slug", NAME: "work" },
  TOOLS: { URL: "tools", NAME: "tools" },
  NOT_FOUND: { URL: "not-found", NAME: "not-found" },
} as const

export const NAV_MENU = [ROUTES.HOME, ROUTES.ABOUT, ROUTES.WORKS, ROUTES.TOOLS]

export const API = {
  WORKS: "/data/tableaux.json",
  RESUME: "/data/resume.json",
} as const

export const PATH = {
  WORKS: {
    SOURCE: "/tableaux/source",
    SMALL: "/tableaux/small",
  },
} as const

export const YOUTUBE_ID = {
  STORY: "vxuYESnmbaU",
}
