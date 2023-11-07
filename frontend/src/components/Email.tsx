import React from "react";
import NewEmail from '../../pages/subscribers/new-email';
import Styles from 'styles/Email.module.css';

interface EmailProps {
  id: string;
  __component: string;
  title: string;
  description: string;
  emailPlaceholder: string;
  submitButton: {
    text: string;
  };
}

export default function Email({ data }: { data: EmailProps }) {

  return (
    <section>
      <div className={Styles.emailContainer}>
            <h1 className={Styles.emailTitle}>{data.title}</h1>
            <p className={Styles.emailDescription}>{data.description}</p>
            <NewEmail placeholder={data.emailPlaceholder} text={data.submitButton.text} />
      </div>
    </section>
  );
}