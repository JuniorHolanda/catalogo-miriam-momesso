import { useRef, useState, useEffect } from "react";
import styles from "./video360.module.scss";
import video from './nec-vani-duo-360.mp4';



const Video360 = ( {className} ) => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isHovering, setIsHovering] = useState(false);
  const animationFrameRef = useRef(null);

  useEffect( () => {
    const container = containerRef.current;
    const video = videoRef.current;

    if (!container || !video) return;

    const handleMouseMove = (e) => {
      console.log("Mouse move", e.clientX, e.clientY);
      
      if (animationFrameRef.current !== null) return;

      animationFrameRef.current = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;

        // Garante que percent esteja entre 0 e 1
        let percent = mouseX / rect.width;
        percent = Math.min(Math.max(percent, 0), 1);

        const time = percent * video.duration;
        video.currentTime = time;

        animationFrameRef.current = null;
      });
    };

    if (isHovering) {
      container.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      // Limpeza: remove listener e cancela frame
      container.removeEventListener("mousemove", handleMouseMove);
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
    
  }, [isHovering]);

  return (
    <div
      ref={containerRef}
      className={className}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <video
          className={styles.video}
          ref={videoRef}
          src={video}
          preload="auto"
          muted
          playsInline
      />
    </div>
  )
}

export default Video360
