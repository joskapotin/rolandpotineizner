type YoutubeProps = {
  embedId: string
}

function Youtube({ embedId }: YoutubeProps) {
  return (
    <div className="aspect-video">
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
