// Individual blog post display
import Header from '/src/components/Header'
import Footer from '/src/components/Footer'
import styles from '/styles/ArticlePage.module.css'
import { getStrapiMedia } from "src/utils/api-helpers";
import sanitizeHtml from 'sanitize-html';
import { useRouter } from 'next/router';
import { getData } from '../../lib/load-posts';
import Link from 'next/link';


export async function getStaticPaths() {
    const fetchParams = {
        method: "post",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            query: 
            `{
              blogposts {
                data {
                  attributes {
                    slug
                  }
                }
              }
            }`
        }

        )
    }

    const posts = await getData(fetchParams);
    const paths = posts.data.blogposts.data.map( (post) => {
        return { params: {slug: post.attributes.slug}}
    });


    return {
        paths: paths,
        fallback: 'blocking' 
    };
}

export async function getStaticProps({params}) {
    const fetchParams = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            query: `{
                blogposts(filters: {slug: {eq: "${params.slug}"}}) {
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
        }

        )
    }

    const {data} = await getData(fetchParams);

    return {
        props: data.blogposts.data[0].attributes,
        revalidate: 10,
    };
}

function content({title, date, description, body, splash}) {
  const router = useRouter();
  // Display loading until `getStaticProps()` finishes running, and populates the props.
  if (router.isFallback && !data) {
      return <div>Loading...</div>
  }

  const formattedBody = body.split('\n\n').map(paragraph => (<p>{sanitizeHtml(paragraph)}</p>));

  const imageUrl = getStrapiMedia(
    splash.data?.attributes.url
);
    return (
      
        <>
          <Header></Header>
          <main className={styles.articlePage}>
            <h1>{title}</h1>
            <h3>{description}</h3>
            <h2> {date} </h2>
            {imageUrl && (
                <img
                  src={imageUrl}
                />
              )}
              <div>{formattedBody}</div>
              <Link href="/">Keep reading</Link>
          </main>
          <Footer></Footer>
        </>
    )
}

export default content
