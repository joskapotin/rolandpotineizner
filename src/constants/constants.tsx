export const ROUTES = {
  HOME: { URL: "/", NAME: "Accueil" },
  ABOUT: { URL: "about", NAME: "Biographie" },
  PAINTINGS: { URL: "paintings", NAME: "Œuvres" },
  PAINTING: { URL: ":slug", NAME: "Œuvre" },
  NOT_FOUND: { URL: "not-found", NAME: "Introuvable" },
} as const

export const NAV_MENU = [ROUTES.HOME, ROUTES.ABOUT, ROUTES.PAINTINGS]

export const API = {
  PAINTINGS: "/data/tableaux.json",
  RESUME: "/data/resume.json",
} as const

export const PATH = {
  PAINTINGS: {
    SOURCE: "/tableaux/source",
    SQUARE: "/tableaux/square",
    SMALL: "/tableaux/small",
  },
} as const

export const YOUTUBE_ID = {
  STORY: "vxuYESnmbaU",
}
