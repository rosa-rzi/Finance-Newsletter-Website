import { useSearchParams } from 'next/navigation'
import React from 'react'
import styles from '../styles/Unsubscribe.module.css'
import { getStrapiURL } from "../src/utils/api-helpers";


async function handleUnsubscribe() {
  try {
  const searchParams = useSearchParams();
  const emailID = searchParams.get('id');
  console.log(emailID);

  const fetchParams = {
    method: "post",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      query: `mutation deleteSubscriber {
        deleteSubscriber(id: ${emailID}) {
          data {
            id
            attributes {
              subscriber_email
            }
          }
        }
      }`
    })
  };

  const response = await fetch(getStrapiURL + `/graphql`, fetchParams);
  const data = await response.json();
}
catch (e) {
  console.log("Error delete: ", e)
}
}

function Unsubscribe() {
  handleUnsubscribe();

    return (
        <>
        <body className={styles.body}>
          <div className={styles.container}>
          <img src="https://res.cloudinary.com/dfbgn4spk/image/upload/v1697612263/logo_letters_35d78fa14c.png" alt="logo" className={styles.logo}></img>
            <div className={styles.bottom}>
              <h2>We're sorry to see you go</h2>
              <p>You have been removed from our mailing list.</p>
			      </div>
          </div>
          </body>
        </>
    )
}

export default Unsubscribe