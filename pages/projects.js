import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
// import utilStyles from '../styles/utils.module.css';
import styles from '../styles/projects.module.css';
import { getProjectData } from '../lib/projects';
import Sidebar from '../components/sidebar';
import ProjectList from '../components/project-list';

export default function Projects({ allProjectData }) {
  const { projects } = allProjectData;
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className={styles.projectsContainer}>
        <Sidebar projects={projects} />
        <div className="main">
          <h2 className={styles.center}>Projects</h2>
          <div className={styles.center}>
            <p>Under Contruction</p>
          </div>
          <ProjectList projects={projects} />
        </div>
      </div>
      <style jsx>{`
        .main {
          width: 80vw;
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </Layout>
  );
}

export async function getStaticProps() {
  const allProjectData = getProjectData();
  return {
    props: {
      allProjectData,
    },
  };
}
