"use client";
import { useState } from "react";
import { getNewEmailToken, getStrapiURL } from "../utils/api-helpers";
import React from "react";
import Styles from 'styles/Email.module.css'

export default function FormSubmit({
  placeholder,
  text,
}: {
  placeholder: string;
  text: string;
}) {
  const [subscriber_email, setEmail] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  
  const token = getNewEmailToken();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  async function handleSubmit() {
    if (subscriber_email === "") {
      setErrorMessage("Email cannot be blank.");
      return;
    }

    if (!emailRegex.test(subscriber_email)) {
      setErrorMessage("Invalid email format.");
      return;
    }

    const res = await fetch(getStrapiURL() + "/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ data: { subscriber_email } }),
    });

    if (!res.ok) {
      setErrorMessage("Email failed to submit.");
      return;
    }
    setErrorMessage("");
    setSuccessMessage("Email successfully submitted!");
    setEmail("");
  }

  return (
    <div className="flex flex-row items-center self-center justify-center flex-shrink-0 shadow-md lg:justify-end">
      <div className="flex flex-col">
        <div className="flex flex-row">
          {successMessage ? (
            <p className="text-green-700 bg-green-300 px-4 py-2 rounded-lg">
              {successMessage}
            </p>
          ) : (
            <>
            <div className={Styles.emailContainer}>
              <input
                type="email"
                className={Styles.emailInput}
                placeholder={errorMessage || placeholder}
                onChange={(e) => setEmail(e.target.value)}
                value={subscriber_email}
              />
              <button
                type="button"
                className={Styles.emailButton}
                onClick={handleSubmit}
              >
                {text}
              </button>
              </div>
            </>
          )}
        </div>

        {errorMessage && (
          <p className="text-red-500 bg-red-200 px-4 py-2 rounded-lg my-2">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
}