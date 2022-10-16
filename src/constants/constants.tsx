export const ROUTES = {
  HOME: { URL: "/", NAME: "Accueil" },
  ABOUT: { URL: "about", NAME: "Biographie" },
  WORKS: { URL: "works", NAME: "Œuvres" },
  WORK: { URL: ":slug", NAME: "Œuvre" },
  TOOLS: { URL: "tools", NAME: "tools" },
  NOT_FOUND: { URL: "not-found", NAME: "Introuvable" },
} as const

export const NAV_MENU = [ROUTES.HOME, ROUTES.ABOUT, ROUTES.WORKS, ROUTES.TOOLS]

export const API = {
  WORKS: "/data/tableaux.json",
  RESUME: "/data/resume.json",
} as const

export const PATH = {
  WORKS: {
    SOURCE: "/tableaux/source",
    SMALL: "/tableaux/square",
  },
} as const

export const YOUTUBE_ID = {
  STORY: "vxuYESnmbaU",
}
