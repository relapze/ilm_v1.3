import React, { useEffect, useRef } from "react";
import styles from "./Carousel.module.scss";

import matic from "../../../utils/matic.svg";
import AVAX from "../../../utils/AVAX.svg";
import uni from "../../../utils/uni.svg";
import wbtc from "../../../utils/wbtc.svg";
import USDC from "../../../utils/USDC.svg";
import eth from "../../../utils/eth.svg";

const logos = [matic, AVAX, uni, wbtc, USDC, eth];

function Carousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const logoBoxWidth = 180; // Set the width of each logo box here
  const animationSpeed = 1; // Set the animation speed here

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let position = 1;
    let frameId: number;

    const animateCarousel = () => {
      position -= animationSpeed;
      carousel.style.transform = `translateX(${position}px)`;

      if (position <= -logoBoxWidth) {
        carousel.appendChild(carousel.firstElementChild!); // Move the first logo to the end
        position = 0; // Reset position
      }

      frameId = requestAnimationFrame(animateCarousel);
    };

    frameId = requestAnimationFrame(animateCarousel);

    // Clean up the animation frame on component unmount
    return () => cancelAnimationFrame(frameId);
  }, [animationSpeed, logoBoxWidth]);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carousel} ref={carouselRef}>
        {logos.map((logo, index) => (
          <div key={index} className={styles.logoBox}>
            <img src={logo} alt={`logo-${index}`} className={styles.logo} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
