import React from 'react';
import Image from 'next/image';
import styles from './index.module.css';
import { Helmet } from 'react-helmet';


const Index = () => {
  return (

    <div className={styles.container}>
      <Helmet>
        <title>𝕮𝖄𝕭𝕰𝕽𝕾𝕴𝕻𝕾</title>
        <link rel="icon" type="image/png" href="favicon.png" />
      </Helmet>
      <div className={styles.content}>
        <Image
          src="/logoknife.pn"
          alt="Logo"
          width={10}
          height={10}
          layout="responsive"
        />
      </div>
      <div className={styles.title}>
        <Image
          src="/NOHXPETITLE.pn"
          alt="Title"
          width={500}
          height={100}
          layout="responsive"
        />
      </div>
      <div className={styles.buttonRowContainer}>
        <div className={styles.imageContainer}>
          <img
            src="/giphy3.gi"
            alt="Image"
            width={500}
            height={500}
            className={`${styles.image} ${styles.centerImage}`} // Add the centerImage class here
          />
        </div>

        {
          /* 
          <div className={styles.buttonRow}>
            <button className={`${styles.button} ${styles.bottomButton}`}>Button 1A</button>
            <button className={`${styles.button} ${styles.bottomButton}`}>Button 2A</button>
            <button className={`${styles.button} ${styles.bottomButton}`}>Button 3A</button>
            <button className={`${styles.button} ${styles.bottomButton}`}>Button 4A</button>
            <button className={`${styles.button} ${styles.bottomButton}`}>Button 5A</button>
            <button className={`${styles.button} ${styles.bottomButton}`}>Button 6A</button>
          </div>
          */
        }
        <div className={styles.textContainer}>
          <p>🍡 ⋆ 🍦 🎀 𝐵obA 🎀 🍦 ⋆ 🍡


            <br /> ¤¸¸.•´¯`•¸¸.•.. 🎀 life 🎀 ..•.¸¸•`¯´•.¸¸¤ <br />
            
            <br /> 🍪 🎀 𝒞 death 𝒮 🎀 🍪</p>
        </div>
      </div>
      <aside className={styles.sidebar}>
        <a
          href="https://www.instagram.com/cybersips.sj/"
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.sidebarLink} ${styles.instagramLink} link`}
        >
          <button className={`${styles.sidebarButton} ${styles.button1b} ${styles.socialButton}`}><span style={{ textAlign: 'center' }}>INSTAGRAM</span></button>
        </a>

        <a
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className={`${styles.sidebarLink} ${styles.twitterLink} link`}
        >
          <button className={`${styles.sidebarButton} ${styles.button4b} ${styles.socialButton}`}> <span style={{ textAlign: 'center' }}>GAME</span></button>
        </a>


        <button className={`${styles.sidebarButton} ${styles.button9b}`}>
          <span style={{ textAlign: 'center' }}>TBA</span>
        </button>

      </aside>
    </div>
  );
};

export default Index;
