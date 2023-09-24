import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { useRef, useEffect } from 'react';

import IlluminatePlatforms2 from "../../utils/creatorplatformsfinal2.webm";
import InstagramLogo from "../../utils/instalogosmall.svg";
import twitterlogosmall from "../../utils/twitterlogosmall.svg";
import discordlogosmall from "../../utils/discordlogosmall.png";
import telegramlogosmall from "../../utils/telegramlogosmall.png";
import mainhero from "../../utils/Hero 1 + Icons V3 webm transparent.webm"
import FeeIcon from "../../utils/Hero 3 webm transparent trimmed.webm"
import StakeIcon from "../../utils/Hero 4 webm transparent trimmed.webm"
import BlockchainIcon from "../../utils/Blockchain (fix) raw webm transparent.webm"
import HowitworksIcon from "../../utils/Globe fix webm transparent.webm"

import Carousel from "../../components/atoms/carousel/Carousel";
import { Footer } from "../../components/layout";

const Home = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1.0; // Adjust the playback rate as desired
    }
  }, []);

  return (
    <div className={styles.home}>
      <section className={styles.section}>
        <div>
          <h1 className={styles.heading}>
            <span>THE ULTIMATE WEB3</span>
            <span>CONTENT CREATION</span>
            <span>DONATION PROTOCOL</span>
          </h1>
          <video className={styles.heroImage} autoPlay loop muted>
            <source src={mainhero} type="video/webm" />
          </video>
        </div>
        <button className={classNames(styles.button, styles.initial)}>
          GET STARTED
        </button>
      </section>

      <section className={styles.section}>
        <div className={styles.communityBox}>
          <h2 className={styles.communityHeading}>JOIN OUR COMMUNITY</h2>
          <div className={styles.logoContainer}>
            <div className={styles.logoGroup}>
              <a
                href="https://www.instagram.com/illuminate.financial"
                target="_blank"
              >
                <img
                  src={InstagramLogo}
                  alt="Instagram"
                  className={classNames(styles.logo, styles.instagramLogo)}
                />
              </a>
              <a href="https://www.twitter.com/ILLUMINATE0X" target="_blank">
                <img
                  src={twitterlogosmall}
                  alt="Twitter"
                  className={classNames(styles.logo, styles.twitterLogo)}
                />
              </a>
            </div>
            <div className={styles.logoGroup}>
              <a href="https://discord.gg/yPmUkN7hNh" target="_blank">
                <img
                  src={discordlogosmall}
                  alt="Discord"
                  className={classNames(styles.logo, styles.discordLogo)}
                />
              </a>
              <div className={styles.logoSpacer}></div>
              <a href="https://t.me/+WHEmvZgnU3RhYmZk" target="_blank">
                <img
                  src={telegramlogosmall}
                  alt="Telegram"
                  className={classNames(styles.logo, styles.telegramLogo)}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.creatorPlatform}>
          <h2 className={styles.creatorHeading}>INTEGRATE INTO YOUR < br/> FAVOURITE CONTENT PLATFORMS</h2>
          <p className={styles.creatorBody}>
           Supporting OBS intergration for all creative needs.
          </p>
          <video className={styles.video} autoPlay loop muted ref={videoRef}>
            <source src={IlluminatePlatforms2} type="video/webm" />
          </video>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.carouselSection}>
          <h2 className={styles.carouselHeading}>
            <span>YOUR FAVOURITE </span>
            <br />
            <span>TOKENS &amp; COINS</span>
          </h2>
          <p className={styles.carouselBody}>
          Donate &amp; receive in any token,
           <br/> That your wallet supports!
          </p>
          <Carousel />
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.howitworksSection}>
          <h2 className={styles.howitworksHeading}>HOW IT WORKS ?</h2>
        </div>
        <video className={styles.howitworksvideo} autoPlay loop muted ref={videoRef}>
            <source src={HowitworksIcon} type="video/webm" />
          </video>  
      </section>

      <section className={styles.section}>
        <div className={styles.feeSection}>
          <h2 className={styles.feeHeading}>THE LOWEST FEES </h2>
          <p className={styles.feeBody}>
            <span>Subscribe to your favorite creators &amp;</span>
            <br />
            <span>Send donations with fees as low as 1%.</span>
          </p>
          <a
            href="https://illuminate-docs.gitbook.io/illuminate-docs/resources/fee-distribution"
            target="_blank"
            rel="noopener noreferrer"
            className={classNames(styles.feeButton, styles.initial)}
          >
            VIEW FEE BREAKDOWN
          </a>
        </div>
        <video className={styles.feevideo} autoPlay loop muted ref={videoRef}>
            <source src={FeeIcon} type="video/webm" />
          </video>
      </section>

      <section className={styles.section}>
        <div className={styles.revenueSection}>
          <h2 className={styles.revenueHeading}>STAKE ILM &amp; EARN YIELD</h2>
          <p className={styles.revenueBody}>
            <span>Earn majority of the protocol's revenue,</span>
            <br />
            <span>By staking your ILM.</span>
          </p>
          <Link
            to="/stake"
            target="_blank"
            rel="noopener noreferrer"
            className={classNames(styles.revenueButton, styles.initial)}
          >
            STAKE NOW
          </Link>
        </div>
        <video className={styles.stakeiconvideo} autoPlay loop muted ref={videoRef}>
            <source src={StakeIcon} type="video/webm" />
          </video>  
      </section>

      <section className={styles.section}>
        <div className={styles.securitySection}>
          <h2 className={styles.securityHeading}>
            <span> BENEFIT THROUGH </span>
            <br />
            <span>BLOCKCHAIN TRANSPARENCY </span>
          </h2>
          <p className={styles.securityBody}>
            <span> Track and monitor your donations on-chain,</span>
            <br />
            <span>Allowing for verification of donations in seconds.</span>
          </p>
        </div>
        <video className={styles.blockchainiconvideo} autoPlay loop muted ref={videoRef}>
            <source src={BlockchainIcon} type="video/webm" />
          </video>  
      </section>

    </div>
  );
};

export default Home;
