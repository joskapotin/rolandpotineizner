import QuoteSvg from "../svg/quote-svg"

type QuoteProps = {
  children: React.ReactNode
}

function Quote({ children }: QuoteProps) {
  return (
    <blockquote className="mx-auto text-justify">
      <QuoteSvg />
      {children}
    </blockquote>
  )
}
export default Quote
