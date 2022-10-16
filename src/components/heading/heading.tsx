import { ReactNode } from "react"

type HeadingProps = {
  children: ReactNode
}

function Heading({ children }: HeadingProps) {
  return (
    <h1 className="mb-2 bg-gray-900 px-2 py-4 text-center text-sm uppercase tracking-wider text-gray-50 sm:text-base md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl">
      {children}
    </h1>
  )
}

export default Heading
