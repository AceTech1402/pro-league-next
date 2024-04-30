import { NavBar } from "@/components/navbar/navbar";
import classes from "./header.module.scss";
import Image from "next/image";
import { ButtonSeconddary } from "@/components/button-secondary/buttonSeconddary";

//image
import HeroImageDesktop from "@/assets/pics/header/hero-image.png";
import HeroimageMobile from "@/assets/pics/header/hero-image-mobile.png";
import { ButtonOutlined } from "@/components/button-outlined/buttonOutlined";

export const Header: React.FC = () => {
  return (
    <header className={classes.headerWrapper}>
      <NavBar className={classes.navbar} />
      <div className={classes.heroImage}>
        <Image src={HeroImageDesktop} alt="hero-image" />
      </div>
      <div className={classes.heroImageMobile}>
        <Image src={HeroimageMobile} alt="hero-image" />
      </div>
      <div className={classes.header}>
        <div className={classes.textWrapper}>
          <div className={classes.title}>
            <span>Socca Austria</span>
            <h3>
              Der Puls des <br /> modernen Fußballs!
            </h3>
          </div>
          <div className={classes.description}>
            <p>
              Erleben Sie die Spannung unserer neu gegründeten Soccaliga, wo
              Leidenschaft auf Professionalität trifft.
            </p>
          </div>
          <div className={classes.buttonWrapper}>
            <ButtonSeconddary
              className={classes.button}
              isLink
              link="#register"
            >
              <p>Anmelden</p>
            </ButtonSeconddary>
            <ButtonOutlined className={classes.button} isLink link="/info">
              Infos zur Anmeldung
            </ButtonOutlined>
          </div>
        </div>
      </div>
    </header>
  );
};
