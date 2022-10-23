import { forwardRef } from "react"

type TimelineControlProps = {
  handleTimelineUpdate: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  handleJumTo: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

const TimelineControl = forwardRef<HTMLButtonElement, TimelineControlProps>(
  ({ handleTimelineUpdate, handleJumTo }, timelineRef) => (
    <button
      type="button"
      ref={timelineRef}
      className="group/timeline flex h-2 w-full cursor-pointer items-center px-2"
      onMouseMove={handleTimelineUpdate}
      onClick={handleJumTo}
    >
      <div className="timeline group-hover/timeline:before:block relative h-1 w-full bg-gray-400/50 before:absolute before:left-0 before:top-0 before:bottom-0 before:hidden before:bg-gray-400 before:content-[''] after:absolute after:left-0 after:top-0 after:bottom-0 after:bg-red-600 after:content-['']" />
    </button>
  )
)

export default TimelineControl
