import type { WorkInterface } from "../hooks/useWork"

const fallbackWork: WorkInterface = {
  id: 0,
  slug: "fallback-slug",
  title: "This is a fallback",
  year: 0,
  height: 0,
  width: 0,
  filename: "attitude_politique-2001-46x61.jpg", // TODO: replace with real fallback image
  order: 1,
  visible: true,
}

const workFactory = (work?: WorkInterface) => ({ ...fallbackWork, ...work })

export default workFactory
