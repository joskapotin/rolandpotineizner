const BASE_URL = "https://sheets.googleapis.com/v4/spreadsheets"
const KEY = import.meta.env.VITE_API_KEY
const SHEET_ID = "1dr9hLoZCBNTkpql2pfanrTIK3PDgMXswX1zZEJwNAQM"
const SHEET_NAME = "paintings"
const RANGE = "!A1:O156"
const API_URL = `${BASE_URL}/${SHEET_ID}/values/${SHEET_NAME}${RANGE}?key=${KEY}`

export const ROUTES = {
  HOME: { URL: "/", NAME: "Accueil" },
  ABOUT: { URL: "/about", NAME: "Biographie" },
  PAINTINGS: { URL: "/paintings", NAME: "Œuvres" },
  PAINTING: { URL: ":slug", NAME: "Œuvre" },
  NOT_FOUND: { URL: "/not-found", NAME: "Introuvable" },
} as const

export const NAV_MENU = [ROUTES.HOME, ROUTES.ABOUT, ROUTES.PAINTINGS]

export const API = {
  PAINTINGS: API_URL,
  RESUME: "/data/resume.json",
} as const

export const PATH = {
  PAINTINGS: {
    SOURCE: "/paintings/source",
    SQUARE: "/paintings/square",
    SMALL: "/paintings/small",
  },
} as const

export const YOUTUBE_ID = {
  STORY: "vxuYESnmbaU",
}
