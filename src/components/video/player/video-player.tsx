import { useEffect, useRef, useState } from "react"
import { formatDuration } from "../../../helpers/formatters"
import { getXPositionInPercent } from "../../../helpers/math"
import PlayControl from "./play-control"
import "./styles.css"
import TimelineControl from "./timeline-control"
import VolumeControl from "./volume-control"

/* eslint-disable jsx-a11y/media-has-caption */
type VideoPlayerProps = {
  url: string
}

function VideoPlayer({ url }: VideoPlayerProps) {
  const videoContainerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const timelineRef = useRef<HTMLButtonElement>(null)
  const totalTimeRef = useRef<HTMLDivElement>(null)
  const currentTimeRef = useRef<HTMLDivElement>(null)
  const speedButtonRef = useRef<HTMLButtonElement>(null)
  const volumeSliderRef = useRef<HTMLInputElement>(null)

  const [isPause, setIsPause] = useState(true)
  const [volumeStatus, setVolumeStatus] = useState<"high" | "low" | "muted">("high")
  const [screenState, setScreenState] = useState<"fullscreen" | "normal">("normal")

  // Play / Pause
  const togglePause = () => {
    setIsPause(prevIsPause => !prevIsPause)
  }

  useEffect(() => {
    if (videoRef.current) {
      if (isPause) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }, [isPause, videoRef.current])

  // Timeline
  const handleTimelineUpdate = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (timelineRef.current) {
      const percent = getXPositionInPercent({ element: timelineRef.current, mouseX: event.clientX })
      timelineRef.current.style.setProperty("--preview-position", percent.toString())
    }
  }

  const handleJumTo = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (timelineRef.current && videoRef.current) {
      const percent = getXPositionInPercent({ element: timelineRef.current, mouseX: event.clientX })
      videoRef.current.currentTime = percent * videoRef.current.duration

      handleTimelineUpdate(event)
    }
  }

  // Duration
  const handleOnLoadData = () => {
    if (totalTimeRef.current && videoRef.current)
      totalTimeRef.current.textContent = formatDuration(videoRef.current.duration)
  }

  const handleOnTimeUpdate = () => {
    if (currentTimeRef.current && videoRef.current && timelineRef.current) {
      currentTimeRef.current.textContent = formatDuration(videoRef.current.currentTime)
      const percent = videoRef.current.currentTime / videoRef.current.duration
      timelineRef.current.style.setProperty("--progress-position", percent.toString())
    }
  }

  // Playback Speed
  const changePlaybackSpeed = () => {
    if (videoRef.current && speedButtonRef.current) {
      let newPlaybackRate = videoRef.current.playbackRate + 0.25
      if (newPlaybackRate > 2) newPlaybackRate = 0.25
      videoRef.current.playbackRate = newPlaybackRate
      speedButtonRef.current.textContent = `${newPlaybackRate}x`
    }
  }

  // Volume
  const toggleMute = () => {
    if (videoRef.current) videoRef.current.muted = !videoRef.current.muted
  }

  const changeVolume = (event: React.FormEvent<HTMLInputElement>) => {
    if (videoRef.current) {
      videoRef.current.volume = parseFloat(event.currentTarget.value)
      videoRef.current.muted = parseFloat(event.currentTarget.value) === 0
    }
  }

  const handleOnVolumeChange = () => {
    if (volumeSliderRef.current && videoRef.current) {
      volumeSliderRef.current.value = videoRef.current.volume.toString()

      if (videoRef.current.muted || videoRef.current.volume === 0) {
        volumeSliderRef.current.value = "0"
        setVolumeStatus("muted")
      } else if (videoRef.current.volume >= 0.5) {
        setVolumeStatus("high")
      } else {
        setVolumeStatus("low")
      }
    }
  }

  // View Modes

  const toggleFullScreenMode = () => {
    if (videoContainerRef.current) {
      if (document.fullscreenElement == null) {
        videoContainerRef.current.requestFullscreen()
        setScreenState("fullscreen")
      } else {
        document.exitFullscreen()
        setScreenState("normal")
      }
    }
  }

  return (
    <div
      className="group/video isolate grid w-full grid-cols-1 grid-rows-1"
      data-volume-level="high"
      ref={videoContainerRef}
    >
      <div className="group-hover/video:opacity-100 z-10 col-span-full row-span-full mt-auto origin-bottom opacity-0 transition-opacity duration-300 ease-in-out">
        <TimelineControl
          handleTimelineUpdate={handleTimelineUpdate}
          handleJumTo={handleJumTo}
          ref={timelineRef}
        />

        <div className="flex items-center gap-2 bg-gray-50/80 p-1 ">
          <PlayControl isPause={isPause} togglePause={togglePause} />

          <VolumeControl
            toggleMute={toggleMute}
            changeVolume={changeVolume}
            ref={volumeSliderRef}
            volumeStatus={volumeStatus}
          />

          <div className="flex flex-grow items-center gap-1">
            <div ref={currentTimeRef}>0:00</div>
            /
            <div ref={totalTimeRef} />
          </div>

          <button
            ref={speedButtonRef}
            type="button"
            className="h-8 w-8"
            onClick={changePlaybackSpeed}
          >
            1x
          </button>

          <button type="button" className="h-8 w-8" onClick={toggleFullScreenMode}>
            {screenState === "fullscreen" ? (
              <svg className="close" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"
                />
              </svg>
            ) : (
              <svg className="open" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <video
        ref={videoRef}
        src={url}
        className="col-span-full row-span-full w-full"
        onLoadedData={handleOnLoadData}
        onTimeUpdate={handleOnTimeUpdate}
        onVolumeChange={handleOnVolumeChange}
      />
    </div>
  )
}
export default VideoPlayer
