import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import {
  contactChannels,
  contactHeading,
  contactIntro,
  formEndpoint,
} from "../../content/contactContent";
import styles from "./Contact.module.css";

type SubmitStatus = "idle" | "sending" | "sent" | "error";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const emptyForm: FormValues = { name: "", email: "", message: "" };

export function Contact() {
  const [values, setValues] = useState<FormValues>(emptyForm);
  const [status, setStatus] = useState<SubmitStatus>("idle");

  function handleChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;

    setValues((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setValues(emptyForm);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section
      className={styles.section}
      id="contact"
      aria-labelledby="contact-heading"
    >
      <div className={styles.grid}>
        <div className={styles.intro}>
          <h2 className={styles.heading} id="contact-heading">
            {contactHeading}
          </h2>
          <p className={styles.introBody}>{contactIntro}</p>

          <dl className={styles.channels}>
            {contactChannels.map((channel) => (
              <div className={styles.channel} key={channel.label}>
                <dt className={styles.channelLabel}>{channel.label}</dt>
                <dd className={styles.channelValue}>
                  {channel.href ? (
                    <a className={styles.channelLink} href={channel.href}>
                      {channel.value}
                    </a>
                  ) : (
                    channel.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-name">
              Name
            </label>
            <input
              className={styles.input}
              id="contact-name"
              name="name"
              type="text"
              value={values.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-email">
              Email
            </label>
            <input
              className={styles.input}
              id="contact-email"
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label className={styles.label} htmlFor="contact-message">
              Message
            </label>
            <textarea
              className={styles.textarea}
              id="contact-message"
              name="message"
              rows={5}
              value={values.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.actions}>
            <button
              className={styles.submit}
              type="submit"
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending" : "Send message"}
            </button>

            <p className={styles.status} role="status">
              {status === "sent" && "Message sent. I'll reply shortly."}
              {status === "error" &&
                "That didn't send. Email robinroy.engineer@gmail.com instead."}
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}