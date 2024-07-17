import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sonam </h1>
        <p className={styles.description}>
          I'm a Front-end developer. Reach out if you'd like to learn more!
        </p>
        <div className={styles.buttons}>
          <a target="_blank" href="mailto:sonamyadados@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a target="_blank"
            href="https://drive.google.com/file/d/1ntV4jamuL5gL5KWxAlMAZ-IbPt957i17/view?usp=sharing"
            download="Sonam_Resume.pdf"
            className={`${styles.contactBtn} ${styles.resumeBtn}`}
          >
            Resume
          </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/Passport Size Photo-Photoroom.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
