/* eslint-disable camelcase */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, {useState, useEffect} from 'react';
import Head from 'next/head';
import {Dimmer, Loader} from 'semantic-ui-react';
import API from '../utils/API';
import PortfolioCards from '../components/PortfolioCards';
import ResumeCard from '../components/ResumeCard';
// import MyHeader from '../components/Head';
import LocalProjects from '../utils/seed';
import Styles from '../styles/portfolio.module.css';
import {GusProject} from '../generic';
// env
const KONAMI_LINK = process.env.NEXT_PUBLIC_KONAMI_LINK as string;
const cleanup = () => {};
const sanitizeProjects = ({
  app_url,
  description,
  img_alt,
  img_src,
  lead,
  repo_name,
  repo_url,
  technologies,
  title,
  updated_at,
  version,
}) => ({
  app_url,
  description,
  img_alt,
  img_src,
  lead,
  repo_name,
  repo_url,
  technologies,
  title,
  updated_at,
  version,
});

function Portfolio() {
  // change version when changes to projectsDB are made
  // so cache is updated
  const PortfolioVersion = 5;

  // Setting our component's initial state
  const [projects, setProjects] = useState([] as Array<any>);
  const [loadMessage, setLoadMessage] = useState(
    "loading portfolio, shouldn't be long.",
  );

  // function saveProjCache() {}
  function clearOldProjectsCache() {
    for (let i = 0; i < PortfolioVersion; i += 1) {
      localStorage.removeItem(`gusvalenzuela.com-cache-v${i}-projects`);
    }
  }
  function changeLoadingMsg() {
    setTimeout(() => {
      setLoadMessage('loading portfolio, any second now...');
    }, 10000); // 10 sec
    setTimeout(() => {
      setLoadMessage(
        "How embarrassing, it shouldn't be taking this long. Something's wrong.",
      );
    }, 60000); // 60 sec
  }

  function loadGithubData(Projects: Array<GusProject>) {
    // set Projects for quick rendering
    // git data can be updated/rendered later
    setProjects(Projects);

    API.getGitUpdateData().then((repos) => {
      if (repos) {
        // looping through all repos' git data
        repos.data.forEach((item: any) => {
          // adding last updated date to each of projects in state
          Projects.forEach((proj) => {
            if (proj.repo_name === item.name) {
              proj.updated_at = item.updated_at;
            }
          });
        });
        // set projects to local or pulled Projects after updating with git data
        setProjects(Projects);
      }
    });
  }

  // "on  mounty"
  useEffect(() => {
    // Load all Projects and store them with setProjects

    // checking first to see if a local projects obj exists, and using that
    const localStorageProjects: Array<GusProject> = JSON.parse(
      window.localStorage.getItem(
        `gusvalenzuela.com-cache-projects-v${PortfolioVersion}`,
      ) as string,
    );

    if (localStorageProjects && localStorageProjects.length) {
      // breaks out here if local storage is found
      // projects are set within the next function
      return loadGithubData(localStorageProjects);
    }

    // continues if no cache found and uses the Local seed found in /utils
    // should later be moved to CMS
    if (!LocalProjects.projectsSeed || LocalProjects.projectsSeed.length < 1) {
      //  ...
    }
    loadGithubData(LocalProjects.projectsSeed);
    // load timeout for changing message, notifying user loading is taking unusually long
    changeLoadingMsg();
    // clear any old projects cache
    clearOldProjectsCache();
    // close
    return cleanup;
  }, []);

  // listening to projects
  useEffect(() => {
    const sanitizedProjects = projects.map(sanitizeProjects);
    // SAVE PROJ LOCALLY
    localStorage.setItem(
      `gusvalenzuela.com-cache-v${PortfolioVersion}-projects`,
      JSON.stringify(sanitizedProjects),
    );

    return cleanup;
  }, [projects]);

  // KONAMI CODE
  const [KC, setKC] = useState('');
  let KonamiCode: string[] = [];

  useEffect((): any => {
    if (KC === 'KC') {
      // winner, winner
      // do this
      window.location.href = KONAMI_LINK;
    }
    if (KC !== 'KC') {
      // Add event listeners
      window.addEventListener('keyup', (evt) => {
        KonamiCode.push(evt.code.trim());
        if (KonamiCode.length === 10) {
          // console.log(KonamiCode.join(``), KonamiCode.length);
          if (
            KonamiCode.join('').toString() ===
            'ArrowUpArrowUpArrowDownArrowDownArrowLeftArrowRightArrowLeftArrowRightKeyBKeyA'
          ) {
            setKC('KC');
          }
        } else if (KonamiCode.length > 10) {
          KonamiCode = [];
        }
      });
      // Remove event listeners on cleanup
      return () => {
        window.removeEventListener('keyup', () => {
          // console.log(evt.code);
        });
      };
    }

    return cleanup;
  }, [KC, KonamiCode]);

  return projects.length ? (
    <>
      <Head>
        <title>grv.Portfolio</title>
        <meta
          name="description"
          content="Gus Valenzuela's portfolio showcasing all projects currently being worked on or finished."
        />
      </Head>
      {/* <MyHeader textContent="PORTFOLIO" /> */}
      <main
        onClick={() => {
          KonamiCode = [];
          setKC('run');
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
