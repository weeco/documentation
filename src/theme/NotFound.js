import React, { useState, useRef, useEffect } from "react";
import Translate, { translate } from "@docusaurus/Translate";
import { PageMetadata } from "@docusaurus/theme-common";
import Layout from "@theme/Layout";
import styles from "./styles.module.css";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const NotFoundForm = () => {
  let [formData, setFormData] = useState({});
  const handleSubmit = (e) => {
    formData.date = new Date();
    formData.url = window.location.href;
    setFormData({ ...formData });
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "notfoundForm",
        ...formData,
      }),
    })
      .then(() => {
        console.log("Form successfully submitted");
      })
      .catch((error) => alert(error));
  };

  useEffect(() => {
    handleSubmit(SubmitEvent);
  }, []);

  return (
    <form
      data-netlify="true"
      name="notfoundForm"
      method="POST"
      onSubmit={handleSubmit}
      netlify-honeypot="bot-field"
    >
      <input
        className={styles.hide}
        type="hide"
        name="form-name"
        value="notfoundForm"
      />
      <p className={styles.hide}>
        <label>
          Beep-Boop. Bot-field <input name="bot-field" />
        </label>
      </p>
      <input className={styles.hide} name="url" />
      <input className={styles.hide} name="date" />
      <input className={styles.hide} type="submit" />
    </form>
  );
};

export default function NotFound() {
  return (
    <>
      <PageMetadata
        title={translate({
          id: "theme.NotFound.title",
          message: "Page Not Found",
        })}
      />
      <Layout>
        <main className="container margin-vert--xl">
          <div className="row">
            <div className="col col--6 col--offset-3">
              <NotFoundForm/>
              <h1 className="hero__title">
                <Translate
                  id="theme.NotFound.title"
                  description="The title of the 404 page"
                >
                  Page Not Found
                </Translate>
              </h1>
              <p>
                <Translate
                  id="theme.NotFound.p1"
                  description="The first paragraph of the 404 page"
                >
                  We could not find what you were looking for.
                </Translate>
              </p>
              <p>
                <Translate
                  id="theme.NotFound.p2"
                  description="The 2nd paragraph of the 404 page"
                >
                  Please contact the owner of the site that linked you to the
                  original URL and let them know their link is broken.
                </Translate>
              </p>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
}
