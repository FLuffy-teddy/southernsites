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
      <source src="/coding-video.mov" type="video/mov" />
      <track
        src="/coding-vdeo.mov"
        kind="subtitles"
        srcLang="en"
        label="English"
      />
      Your browser does not support the video tag.
    </video>
  );
}
