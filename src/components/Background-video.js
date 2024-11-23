"use client"; 

export default function BackgroundVideo() {
  return (
    <video autoPlay loop muted className="background-video">
      <source src="/bg_video.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}