type YoutubeProps = {
  embedId: string
}

function Youtube({ embedId }: YoutubeProps) {
  return (
    <div className="aspect-video w-full">
      <iframe
        className="h-full w-full"
        src={`https://www.youtube.com/embed/${embedId}`}
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  )
}
export default Youtube
