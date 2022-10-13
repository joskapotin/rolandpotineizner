import { ReactNode } from "react"

type HeadingProps = {
  children: ReactNode
}

function Heading({ children }: HeadingProps) {
  return (
    <h1 className="mb-2 bg-gray-900 px-2 py-4 text-center uppercase tracking-wider text-gray-50">
      {children}
    </h1>
  )
}

export default Heading
