import Head from "next/head";
import Link from "next/link";
import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";

import { getSortedPostsData } from "../lib/posts";

import utilStyles from "../styles/utils.module.css";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// getStaticPropsとの併用はできない
// export async function getServerSideProps() {
//   const allPostsData = getSortedPostsData();
//   return {
//     props: {
//       allPostsDataSSR,
//     },
//   };
// }

export default function Home({ allPostsData, allPostsDataSSR }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <h3>SSG</h3>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => {
            return (
              <li className={utilStyles.listItem} key={id}>
                <Link href={`/posts/${id}`}>{title}</Link>
                <br />
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
              </li>
            );
          })}
        </ul>
        {/* getStaticPropsとの併用はできない */}
        {/* <h3>SSR</h3>
        <ul className={utilStyles.list}>
          {allPostsDataSSR.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul> */}
      </section>
    </Layout>
  );
}
