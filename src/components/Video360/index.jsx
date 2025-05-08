import { useRef, useState, useEffect } from "react";
import styles from "./video360.module.scss";



const Video360 = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  const [isHovering, setIsHovering] = useState(false);

  useEffect( () => {
    const container = containerRef.current;
    const video = videoRef.current;

    if (!container || !video) return;

    const handleMouseMove = (e) => {
      // Pega as dimensões da div (posição e largura)
      const rect = container.getBoundingClientRect();

      // Calcula a posição do mouse dentro da div
      const mouseX = e.clientX - rect.left;

      // Transforma a posição do mouse em uma porcentagem (de 0 a 1)
      const percent = mouseX / rect.width;

      // Calcula o tempo do vídeo com base nessa porcentagem
      const time = percent * video.duration;

      // Atualiza o vídeo para esse tempo
      video.currentTime = time;
    };

    
  })

  return (
    <div>
      
    </div>
  )
}

export default Video360
