import Header from '../src/components/Header'
import React from 'react'
import styles from '../styles/Home.module.css'
import ArticleGrid from '../src/components/ArticleGrid'
import { getStrapiMedia, getStrapiURL } from "../src/utils/api-helpers";


export async function getStaticProps(context) {
  const fetchParams = {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      query: `{
        blogposts {
          data {
            attributes {
              title
              date
              body
              description
              splash{
                data{
                  attributes{
                    url
                  }
                }
              }
              slug
            }
          }
        }
      }`
    })
  }

  const response = await fetch(getStrapiURL() + `/graphql`, fetchParams);
  const data = await response.json();

  return {
    props: data,
  };
}

function Articles({data}) {
    return (
        <>
        <Header></Header>
        <main className={styles.main}>
            <h2>Newsletter Archives</h2>
            <div className={styles.grid}>
                {data.blogposts.data.map((article) => {
                    const imageUrl = getStrapiMedia(
                        article.attributes.splash.data?.attributes.url
                    );
                    const title = article.attributes.title;
                    const description = article.attributes.description;
                    const slug = article.attributes.slug;
                    const date = article.attributes.date;
                    return <ArticleGrid title={title} date= {date} description={description} imageUrl={imageUrl} slug={slug}/>
                })}
            </div>
        </main>
        </>
    )
}

export default Articles
