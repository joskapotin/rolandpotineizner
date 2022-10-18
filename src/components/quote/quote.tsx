import QuoteSvg from "../svg/quote-svg"

type QuoteProps = {
  children: React.ReactNode
}

function Quote({ children }: QuoteProps) {
  return (
    <blockquote className="mx-auto italic text-center">
      <QuoteSvg />
      {children}
    </blockquote>
  )
}
export default Quote
