import styles from '../styles/Home.module.css'
import Header from '../src/components/Header'
import Email from '../src/components/Email'
import Footer from '../src/components/Footer'
import React from 'react'
import Carousel from '../src/components/Carousel'
import { getStrapiURL } from '../src/utils/api-helpers'

export async function getStaticProps(context) {
  const fetchParams = {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      query: `{
        blogposts(filters: { feature: {eq: true}}) {
          data {
            attributes {
              title
              date
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

export default function Home({data}) {
  const emailForm = {
    id: "email-form-1",
    __component: "email-form",
    title: "The Wall St. Raven",
    description: `Free digestible coverage of stocks, economics, investing, and trade ideas for everyday people and professionals.`,
    emailPlaceholder: "Enter your email",
    submitButton: {
      text: "Subscribe"
  }
  }
  const features = data.blogposts.data;

  return (
    <>
    <div className={styles.background}>
      <Header></Header>
      <main className={styles.main}>
        <div className={styles.center}>
        <Email data={emailForm}></Email>
        <Carousel items={features}></Carousel>
        </div>        
      </main>
      <Footer legalLinks={[]} socialLinks={[]}></Footer>
      </div>
    </>
  )
}