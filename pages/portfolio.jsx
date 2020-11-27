import React, { useState, useEffect } from "react";
// import Moment from "react-moment";
import Head from "next/head";
import { Dimmer, Loader, Icon } from "semantic-ui-react";
import API from "../utils/API";
import PortfolioCards from "../components/PortfolioCards";
import ResumeCard from "../components/ResumeCard";
import MyHeader from "../components/Head";
import LocalProjects from "../utils/seed";
import Styles from "../styles/portfolio.module.css";
const KONAMI_LINK = process.env.NEXT_PUBLIC_KONAMI_LINK;

function Portfolio({ projies }) {
  const PortfolioVersion = 5; // change the version when changes to projectsDB are made so cache is updated

  // Setting our component's initial state
  const [projects, setProjects] = useState([]);
  const [loadMessage, setLoadMessage] = useState(
    "loading portfolio, shouldn't be long."
  );

  // "on  mounty"
  useEffect(() => {
    // Load all Projects and store them with setProjects
    loadProjects();
    // load timeout for changing message, notifying user loading is taking unusually long
    changeLoadingMsg();
    // clear any old projects cache
    clearOldProjectsCache();
  }, []);

  // listening to projects
  useEffect(() => {
    saveProjCache();
  }, [projects]);

  function saveProjCache() {
    let sanitizedProjects = projects.map((i) => {
      delete i._id;
      return i;
    });

    return sanitizedProjects;
    // localStorage.setItem(
    //   `gusvalenzuela.com-cache-v${PortfolioVersion}-projects`,
    //   JSON.stringify(sanitizedProjects)
    // );
  }
  function clearOldProjectsCache() {
    for (let i = 0; i < PortfolioVersion; i++) {
      localStorage.removeItem(`gusvalenzuela.com-cache-v${i}-projects`);
    }
  }
  function changeLoadingMsg() {
    setTimeout(() => {
      setLoadMessage("loading portfolio, any second now...");
    }, 10000); // 10 sec
    setTimeout(() => {
      setLoadMessage(
        "How embarrassing, it shouldn't be taking this long. Something's wrong."
      );
    }, 60000); // 60 sec
  }
  // Loads all Projects and sets them to Projects
  function loadProjects() {
    //checking to see if a local projects obj exists, and using that
    const localStorageProjects = JSON.parse(
      localStorage.getItem(
        `gusvalenzuela.com-cache-projects-v${PortfolioVersion}`
      )
    );

    if (localStorageProjects && localStorageProjects.length > 0) {
      // breaks out here if local storage is found
      return loadGithubData(localStorageProjects);
    }

    // continues if no cache found and uses the Local seed found in /utils
    // should later be moved to CMS
    if (!LocalProjects.projectsSeed || LocalProjects.projectsSeed.length < 1) {
      res.data = [];
    }
    loadGithubData(LocalProjects.projectsSeed);
  }

  function loadGithubData(Projects) {
    // set Projects for quick rendering
    // git data can be updated/rendered later
    setProjects(Projects);

    API.getGitUpdateData().then((repos) => {
      if (repos !== `error`) {
        // looping through all repos' git data
        repos.data.forEach((item) => {
          // adding last updated date to each of projects in state
          Projects.forEach((proj) => {
            if (proj.repo_name === item.name) {
              proj.updated_at = item.updated_at;
            }
          });
        });
        setProjects(Projects); // set projects to local or pulled Projects after updating with git data
      }
    });
  }

  // KONAMI CODE
  const [KC, setKC] = useState(null);
  var KonamiCode = [];

  useEffect(() => {
    if (KC === "KC") {
      // winner, winner
      // do this
      window.location.href = KONAMI_LINK;
    }
    if (KC !== null) {
      // Add event listeners
      window.addEventListener("keyup", (evt) => {
        KonamiCode.push(evt.code.trim());
        if (KonamiCode.length === 10) {
          console.log(KonamiCode.join(``), KonamiCode.length);
          if (
            KonamiCode.join(``).toString() ===
            "ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyA"
          ) {
            setKC("KC");
          }
        } else if (KonamiCode.length > 10) {
          KonamiCode = [];
        }
      });
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener("keyup", (evt) => {
          console.log(evt.code);
        });
      };
    }
  }, [KC, KonamiCode]);

  return projects.length ? (
    <>
      <Head>
        <title>grv.Portfolio</title>
        <meta
          name="description"
          content="Gus Valenzuela's portfolio showcasing all projects currently being worked on or finished."
        ></meta>
      </Head>
      <MyHeader textContent="PORTFOLIO" />
      <main
        onClick={() => {
          KonamiCode = [];
          setKC("run");
        }}
        role="main"
        className={Styles.portfolio}
      >
        <div className={Styles.portfolioContainer}>
          <PortfolioCards projects={projects} />
          <ResumeCard />
        </div>
      </main>
    </>
  ) : (
    <Dimmer role="dialog" active>
      <Loader indeterminate inline="centered" size="large">
        {loadMessage}
      </Loader>
    </Dimmer>
  );
}

export default Portfolio;
