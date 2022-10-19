type VimeoProps = {
  title: string
  url: string
}

function Vimeo({ title = "Embedded Vimeo", url }: VimeoProps) {
  return (
    <div className="relative w-full">
      <iframe
        className="inset-0 w-full absolue"
        src={url}
        allowFullScreen
        allow="fullscreen; picture-in-picture"
        title={title}
      />
    </div>
  )
}
export default Vimeo
