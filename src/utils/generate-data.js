import { readdir } from "fs"

const directory = "../public/tableaux/source"

const regextitle = new RegExp(/[^-]*/)
const regexYear = new RegExp(/-\d{4}-/gm)
const regexFormat = new RegExp(/-\d+x\d+/gm)

const slugify = str =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "")

readdir(directory, (err, files) => {
  const tableaux = files.map((file, index) => {
    const extractedTitle = file.match(regextitle)
    const rawTitle = extractedTitle[0]
    const title = rawTitle[0].toUpperCase() + rawTitle.slice(1).replaceAll("_", " ")

    const extractedYear = file.match(regexYear)
    const year = extractedYear[0].slice(1, 5)

    const extractedFormat = file.match(regexFormat)
    const format = extractedFormat ? extractedFormat[0].slice(1) : "NCxNC"
    const formatArr = format.split("x")
    const height = formatArr[0]
    const width = formatArr[1]

    const tableau = {
      id: index,
      slug: slugify(title),
      title,
      year,
      height,
      width,
      filename: file,
      order: index + 1,
      visible: true,
    }

    return tableau
  })
  console.log(JSON.stringify(tableaux))
})