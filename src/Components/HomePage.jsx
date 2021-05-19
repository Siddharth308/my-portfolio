import React from "react";
// import sr from './Scroolo'
import ScrollReveal from "scrollreveal";
import "ui-neumorphism/dist/index.css";
import "../App.css";

import {
  Card,
  CardContent,
  Divider,
  Subtitle2,
  H6,
  Body2,
  overrideThemeVariables,
  Button,
  CardMedia,
  TextField,
  TextArea,
  Switch,
  H3,
  Alert,
  Tooltip,
  CardAction,
} from "ui-neumorphism";
import ContactPage from "./ContactPage";
import DemoContact from "./DemoContact";
const HomePage = () => {
  const [menu, setMenu] = React.useState(false);
  const [dark, setDark] = React.useState(false);
  const [flag, setFlag] = React.useState(false);
  /*===== MENU SHOW =====*/
  // const showMenu = (toggleId, navId) => {
  //   const toggle = document.getElementById(toggleId),
  //     nav = document.getElementById(navId);

  //   if (toggle && nav) {
  //     toggle.addEventListener("click", () => {
  //       nav.classList.toggle("show");
  //     });
  //   }
  // };
  // showMenu("nav-toggle", "nav-menu");

  React.useEffect(() => {
    if (flag) ScrollReveal().destroy();
    /*===== ACTIVE AND REMOVE MENU =====*/
    const navLink = document.querySelectorAll(".nav__link");

    function linkAction() {
      /*Active link*/
      navLink.forEach((n) => n.classList.remove("active"));
      this.classList.add("active");

      /*Remove menu mobile*/
      const navMenu = document.getElementById("nav-menu");
      navMenu.classList.remove("show");
    }
    navLink.forEach((n) => n.addEventListener("click", linkAction));
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: false,
    });

    /*SCROLL HOME*/
    sr.reveal(".home__title", {});
    sr.reveal(".button", { delay: 200 });
    sr.reveal(".home__img", { delay: 400 });
    sr.reveal(".home__social-icon", { interval: 200 });

    /*SCROLL ABOUT*/
    sr.reveal(".about__img", {});
    sr.reveal(".about__subtitle", { delay: 400 });
    sr.reveal(".about__text", { delay: 400 });

    /*SCROLL SKILLS*/
    sr.reveal(".skills__subtitle", {});
    sr.reveal(".skills__text", {});
    sr.reveal(".skills__data", { interval: 200 });
    sr.reveal(".skills__img", { delay: 600 });

    /*SCROLL WORK*/
    sr.reveal(".work__img ", { interval: 400 });

    /*SCROLL CONTACT*/
    sr.reveal(".contact__input", { interval: 200 });
    setFlag(!flag);
  }, []);
  function refreshPage() {
    setTimeout(() => {
      window.location.reload(false);
    }, 500);
  }
  const changeTheme = () => {
    console.log(dark);
    dark
      ? overrideThemeVariables({
          "--light-bg": "#E9B7B9",
          "--light-bg-dark-shadow": "#ba9294",
          "--light-bg-light-shadow": "#ffdcde",
          "--dark-bg": "#292E35",
          "--dark-bg-dark-shadow": "#21252a",
          "--dark-bg-light-shadow": "#313740",
          "--primary": "#8672FB",
          "--primary-dark": "#4526f9",
          "--primary-light": "#c7befd",
        })
      : overrideThemeVariables({
          "--light-bg": "rgb(81,85,104)",
          "--light-bg-dark-shadow": "#21252a",
          "--light-bg-light-shadow": "rgb(93,98,120)",
          "--dark-bg": "#292E35",
          "--dark-bg-dark-shadow": "#21252a",
          "--dark-bg-light-shadow": "#313740",
          "--primary": "#8672FB",
          "--primary-dark": "#4526f9",
          "--primary-light": "#4526f9",
        });

    setDark(!dark);
    if (menu) {
      setMenu(false);
    }
  };
  return (
    <>
      <Card>
        {/* <CardContent> */}

        <header class="l-header">
          <nav class="nav bd-grid">
            <div>
              <a target="_blank"  target="_blank" href="#" class="nav__logo" onClick={refreshPage}>
                Siddharth
              </a>
            </div>
            {/* <A target="_blank"lert type="info">
              Click On Siddharth to get enlighten again
            </Alert> */}
            <div
              className={menu ? "nav__menu show" : "nav__menu"}
              id="nav-menu"
            >
              <ul class="nav__list">
                <li class="nav__item">
                  <a target="_blank" href="#home" class="nav__link active">
                    Home
                  </a>
                </li>
                <li class="nav__item">
                  <a target="_blank" href="#about" class="nav__link">
                    About
                  </a>
                </li>
                <li class="nav__item">
                  <a target="_blank" href="#skills" class="nav__link">
                    Skills
                  </a>
                </li>
                <li class="nav__item">
                  <a target="_blank" href="#work" class="nav__link">
                    Work
                  </a>
                </li>
                <li class="nav__item">
                  <a target="_blank" href="#contact" class="nav__link">
                    Contact
                  </a>
                </li>
                <li class="nav__item tooltip">
                  {
                    <span class="tooltiptext">
                      {dark
                        ? "Click on Siddharth to enlighten again"
                        : "Change Theme"}
                    </span>
                  }
                  <Switch onClick={changeTheme} color="var(--error)" />
                </li>
              </ul>
            </div>

            <div class="nav__toggle " id="nav-toggle">
              <i class="bx bx-menu" onClick={() => setMenu(!menu)}></i>
            </div>
          </nav>
          <Divider />
        </header>

        <main class="l-main">
          {/* <!--===== HOME =====--> */}
          <section class="home bd-grid" id="home">
            <div class="home__data">
              <h1 class="home__title">
                Hi,
                <br />
                I'm{" "}
                <span class="home__title-color">
                  <a  href="#" onClick={refreshPage}>
                    Siddharth
                  </a>
                </span>
                <br /> Full Stack Developer
              </h1>
              {/* <Button className="button" color='#ccc' bgColor='var(--primary)'>colored</Button> */}
              <a 
                target="_blank"
                href="https://drive.google.com/file/d/1tiZ8vL6Zl7D5GUrWPWlNuoESDUl9ZZme/view?usp=sharing"
                class="button"
              >
                Get Resume
              </a>
            </div>

            <div class="home__social">
              <a target="_blank"
                href="https://www.linkedin.com/in/prabhu-siddharth97"
                class="home__social-icon"
              >
                <i class="bx bxl-linkedin"></i>
              </a>
              <a target="_blank"
                href="https://prabhu-sid97.medium.com/"
                class="home__social-icon"
              >
                <i class="bx bxl-medium"></i>
              </a>
              <a target="_blank"
                href="https://github.com/Siddharth308"
                class="home__social-icon"
              >
                <i class="bx bxl-github"></i>
              </a>
            </div>
            <Card className="home__img ">
              <img
                className="home__img__photo "
                src="img/newsid2.jpg"
                alt="profilr"
              />
            </Card>
          </section>

          {/* <!--===== ABOUT =====--> */}
          <section class="about section " id="about">
            <h2 class="section-title">About</h2>

            <div class="about__container bd-grid">
              <div class="about__img work__img ">
                <img src="img/siddharth.jpg" alt="" />
              </div>
              {/* I have done work in software development, mobile app creation, front-end/back-end web, database/server management */}
              <div>
                <h2 class="about__subtitle"> Prabhu Siddharth</h2>
                <p class="about__text">
                  A code enthusiast with remarkable hands-on exprience in front
                  end/back end web. My hustle-bustle with the web development
                  made me a passionate developer.I am an IT graduate engineer ,in
                  love with coding and cooking.
                  <br />
                  <br />
                  <i>
                    <H6>
                      {" "}
                      I alwyas strive to build things that will make a
                      difference.
                    </H6>
                  </i>{" "}
                </p>
              </div>
            </div>
          </section>

          {/* <!--===== SKILLS =====--> */}
          <section class="skills section" id="skills">
            <h2 class="section-title">Skills</h2>
            <Card className="skill__box">
              <h2 class="skills__subtitle">Profesional Skills</h2>
              <p class="skills__text"></p>
              <div class="skills__container ">
                <div class="work__container skill-grid">
                  <Card style={{ padding: "8px" }} className="skill-card">
                    <div class="CardMedia">
                      <span
                        class="iconify"
                        data-icon="tabler:brand-javascript"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                  <Card style={{ padding: "8px" }} className="skill-card">
                    <div class="CardMedia">
                      <span
                        class="iconify"
                        data-icon="logos:react"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                  <Card style={{ padding: "8px" }} className="skill-card">
                    <div class="CardMedia">
                      <span
                        style={{ marginTop: "35%" }}
                        class="iconify"
                        data-icon="logos:mongodb"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                  <Card
                    style={{ padding: "8px", color: "#4070F4" }}
                    className="skill-card"
                  >
                    <div class="CardMedia">
                      <span
                        class="iconify"
                        data-icon="simple-icons:mysql"
                        data-inline="false"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                  <Card style={{ padding: "8px" }} className="skill-card">
                    <div class="CardMedia">
                      <span
                        style={{ marginTop: "35%" }}
                        class="iconify"
                        data-icon="logos:express"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                  <Card style={{ padding: "8px" }} className="skill-card">
                    <div class="CardMedia">
                      <span
                        style={{ marginTop: "25%" }}
                        class="iconify"
                        data-icon="logos:git"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                  <Card style={{ padding: "8px" }} className="skill-card">
                    <div class="CardMedia">
                      <span
                        style={{ marginTop: "25%" }}
                        class="iconify"
                        data-icon="logos:nodejs"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                  <Card style={{ padding: "8px" }} className="skill-card">
                    <div class="CardMedia">
                      <span
                        class="iconify"
                        data-icon="vscode-icons:file-type-css"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                  <Card style={{ padding: "8px" }} className="skill-card">
                    <div class="CardMedia">
                      <span
                        class="iconify"
                        data-icon="vscode-icons:file-type-html"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                  <Card style={{ padding: "8px" }} className="skill-card ">
                    <div class="CardMedia ">
                      <span
                        class="iconify"
                        data-icon="logos:bootstrap"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                </div>
              </div>

              {/*............ Tools I use ..........................*/}

              <H3
                class="skills__subtitle"
                style={{ margin: "20px 0", textAlign: "center" }}
              >
                Tools I use
              </H3>

              <div class="skills__container2 ">
                <div class="work__container skill-grid">
                  <Card style={{ padding: "8px" }} className="skill-card">
                    <div class="CardMedia">
                      <span
                        class="iconify"
                        data-icon="logos:postman"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                  <Card style={{ padding: "8px" }} className="skill-card">
                    <div class="CardMedia">
                      <span
                        class="iconify"
                        data-icon="vscode-icons:file-type-vscode"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                  <Card style={{ padding: "8px" }} className="skill-card">
                    <div class="CardMedia">
                      <span
                        class="iconify"
                        data-icon="logos:slack-icon"
                        data-inline="false"
                        color="#4070F4"
                        data-width="--skill-icon-width"
                        data-height="--skill-icon-height"
                      ></span>
                    </div>
                  </Card>
                </div>
              </div>
            </Card>
          </section>

          {/* <!--===== WORK =====--> */}
          <section class="work section" id="work">
            <h2 class="section-title">Projects</h2>

            <div class="work__container bd-grid">
              <Card style={{ padding: "8px" }}>
                <div class="work__img ">
                  <a target="_blank" href="">
                    <img src="img/reddit.png" alt="" />
                    <H6>Reddit Clone Application</H6>
                  </a>
                  <CardContent>
                    <Subtitle2
                      secondary
                      style={{ marginBottom: "4px" }}
                    ></Subtitle2>
                    <Body2>
                      A community platform where like minded individuals can
                      interact with each other.
                    </Body2>
                  </CardContent>
                  <CardAction>
                    <a target="_blank" href="https://github.com/Vishal643/delta">
                      <Button text color="var(--primary)">
                        Code
                      </Button>
                    </a>
                    
                    <a target="_blank" href="https://reddit-clone-sid.netlify.app/">
                    <Button text color="var(--primary)">
                      Explore
                    </Button>
                    </a>
                  </CardAction>
                </div>
              </Card>
              <Card style={{ padding: "8px" }}>
                <div class="work__img ">
                  <a target="_blank" href="">
                    <img src="img/Al-jajeera2.png" alt="" />
                    <H6>Aljazeera Clone Application</H6>
                  </a>
                  <CardContent>
                    <Subtitle2
                      secondary
                      style={{ marginBottom: "4px" }}
                    ></Subtitle2>
                    <Body2>
                      A website that provides users with all type of news and
                      current affairs
                    </Body2>
                  </CardContent>
                  <CardAction>
                    <a target="_blank" href="https://github.com/rohanranjan25061996/hexane-aljeera-clone">
                      <Button text color="var(--primary)">
                        Code
                      </Button>
                    </a>

                    <a target="_blank" href="https://60601aa669e55d6d22f1cce0--aljajeera-clone.netlify.app/">
                      <Button text color="var(--primary)">
                        Explore
                      </Button>
                    </a>
                  </CardAction>
                </div>
              </Card>
              <Card style={{ padding: "8px" }}>
                <div class="work__img ">
                  <a target="_blank" href="https://github.com/SmithRakesh/Beryllium">
                    <img src="img/timecamp.png" alt="" />
                    <H6>Timecamp Clone Application</H6>
                  </a>
                  <CardContent>
                    <Subtitle2
                      secondary
                      style={{ marginBottom: "4px" }}
                    ></Subtitle2>
                    <Body2>
                      A platform where user can add tasks that they want to
                      assign
                    </Body2>
                  </CardContent>
                  <CardAction>
                    <a target="_blank" href="https://github.com/SmithRakesh/Beryllium">
                      <Button text color="var(--primary)">
                        Code
                      </Button>
                    </a>
                    <Button text color="var(--primary)" disabled>
                      Explore
                    </Button>
                    {/* <a target="_blank" href="https://60601aa669e55d6d22f1cce0--aljajeera-clone.netlify.app/">
                     
                    </a> */}
                  </CardAction>
                </div>
              </Card>
              <Card style={{ padding: "8px" }}>
                <div class="work__img ">
                  <a target="_blank" href="">
                    <img src="img/chargebee.png" alt="" />
                    <H6>Chargebee Clone Application</H6>
                  </a>
                  <CardContent>
                    <Subtitle2 secondary style={{ marginBottom: "4px" }}>
                     
                    </Subtitle2>
                    <Body2>
                      A platform where user can add tasks that they want to
                      assign
                    </Body2>
                  </CardContent>
                  <CardAction>
                    <a target="_blank" href="https://github.com/Siddharth308/Chargebee-clone">
                      <Button text color="var(--primary)">
                        Code
                      </Button>
                    </a>
                    
                    <a target="_blank" href="https://siddharth308.github.io/Chargebee-clone/">
                    <Button text color="var(--primary)" disabled>
                      Explore
                    </Button>
                    </a>
                  </CardAction>
                </div>
              </Card>
            </div>
          </section>

          <section class="work section" id="work">
            <h2 class="section-title">Proficiency</h2>

            <div class="work__container bd-grid">
              <Card inset className="proficiency">
                <H3> 1200+ </H3>
                <Body2>Hours Of Coding</Body2>
              </Card>
              <Card inset className="proficiency">
                <img src="assets/img/work4.jpg" alt="" />
                <H3> 300+ </H3>
                <Body2>Hours Of Data Structure</Body2>
              </Card>
              <Card inset className="proficiency">
                <img src="assets/img/work4.jpg" alt="" />
                <H3> 100+ </H3>
                <Body2>Hours Of Softskills</Body2>
              </Card>
            </div>
          </section>
          {/* =====Git ======= */}

          <Card style={{ padding: "8px" }} className="skill__box ">
            {dark ? (
              <img src="img/github-dark.png" alt="git" />
            ) : (
              <img src="img/git-light.png" alt="git" />
            )}
          </Card>
          {/* <!--===== CONTACT =====--> */}
          {/* <ContactPage/> */}
          <DemoContact />
        </main>

        {/* <!--===== FOOTER =====--> */}
        <footer class="footer">
          <p class="footer__title">Siddharth</p>
          <div class="footer__social">
            <a target="_blank" href="tel:+919777099605" class="footer__icon">
              <i class="bx bxs-phone-call"></i>
            </a>
            <a target="_blank"
              href="https://www.reddit.com/user/Siddharth308"
              class="footer__icon"
            >
              <i class="bx bxl-reddit"></i>
            </a>
            <a target="_blank" href="https://twitter.com/lordd_buddha" class="footer__icon">
              <i class="bx bxl-twitter"></i>
            </a>
          </div>
          <p>&#169; 2021 copyright all right reserved</p>
        </footer>
        {/* </CardContent> */}
      </Card>
    </>
  );
};

export default HomePage;
