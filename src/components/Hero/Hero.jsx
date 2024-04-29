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
          <a href="mailto:sonamyadados@gmail.com" className={styles.contactBtn}>
            Contact Me
          </a>
          <a
            href="https://drive.google.com/file/d/1KELWpnTKEF_3QWrs2Lo864rU0YEd4FNS/view?usp=drive_link"
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
