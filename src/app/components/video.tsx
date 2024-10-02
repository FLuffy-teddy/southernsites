export default function Video() {
  return (
    <video
      width="320"
      height="240"
      controls
      preload="metadata"
      playsInline
      loop
      autoPlay
    >
      <source src="/coding-video.mp4" type="video/mp4" />
      <track
        src="/coding-vdeo.mp4"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  );
}
