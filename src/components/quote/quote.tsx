import QuoteSvg from "../svg/quote-svg"

type QuoteProps = {
  children: React.ReactNode
}

function Quote({ children }: QuoteProps) {
  return (
    <blockquote className="max-w-md mx-auto text-justify text-gray-600">
      <i className="block w-12 h-12 mx-auto mb-3 text-gray-400">
        <QuoteSvg />
      </i>
      {children}
    </blockquote>
  )
}
export default Quote
