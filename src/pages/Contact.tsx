import { Link } from "react-router-dom";
import LandingPageFooter from "../components/headers/LandingPageFooter";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    entirePage: {
      background:
        "linear-gradient(330deg, rgba(255, 194, 56, 0.2), rgba(255, 99, 29, 0.2), rgba(0, 166, 251, 0.2))",
      alignItems: "center",
      height: "100vh",
    },
    pageContainer: {
      display: "flex",
      justifyContent: "center",
      height: "100%",
    },
    pageLeft: {
      background: "#fff",
      width: "35%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "2em",
      border: "1px solid #ccc",
      borderRadius: "0.5em",
      margin: "8em 0 0 5em",
      height: "60%",
    },
    h2: {
      fontSize: "2em",
      textAlign: "center",
    },
    paragraph: {
      textAlign: "center",
      fontSize: "1.5em",
    },
    link: {
      textDecoration: "none",
      color: "#00A6FB",
      cursor: "pointer",
    },
    pageRight: {
      width: "35%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "2em",
      border: "1px solid #ccc",
      borderRadius: "0.5em",
      margin: "8em 5em 0 0",
      height: "60%",
      background: "#fff",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    label: {
      textAlign: "left",
      width: "90%",
      marginBottom: "0.5em",
      marginRight: "2.5em",
    },
    input: {
      width: "30em",
      height: "3em",
      marginBottom: "1em",
      padding: "0.5em",
      borderRadius: "0.5em",
      border: "1px solid #ccc",
      background: "rgba(128, 128, 128, 0.1)",
    },
    button: {
      width: "20em",
      height: "3em",
      backgroundColor: "#00A6FB",
      color: "#fff",
      borderRadius: "0.5em",
      border: "none",
      cursor: "pointer",
      fontSize: "1em",
      margin: "1em 0 0 0",
    },
  };

  const [state, handleSubmit] = useForm("mnqelqpl");
  if (state.succeeded) {
    return <p>Thanks for reaching out! We'll be in touch soon.</p>;
  }

  return (
    <section style={styles.entirePage}>
      <div style={styles.pageContainer}>
        <div style={styles.pageLeft}>
          <h2 style={styles.h2}>We're Here to Help</h2>
          <p style={styles.paragraph}>
            At Stelr, we’re committed to helping our clients navigate their
            inquiries regarding our platform. Please visit our{" "}
            <Link style={styles.link} to="/faq">
              FAQ page here.
            </Link>{" "}
            For any additional inquiries, please fill out the side contact form
            & reach out to us at “contact@gostelr.com”
          </p>
        </div>
        <div style={styles.pageRight}>
          <h2 style={styles.h2}>
            Email us and we'll get back to you as soon as possible.
          </h2>
          <form onSubmit={handleSubmit} style={styles.form}>
            <label style={styles.label} htmlFor="fullName">
              Full Name:
            </label>
            <input
              id="fullName"
              type="text"
              name="fullName"
              style={styles.input}
              placeholder="Full Name"
            />
            <label style={styles.label} htmlFor="email">
              Email Address:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              style={styles.input}
              placeholder="Email Address"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label style={styles.label} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              style={styles.input}
              placeholder="Message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <button
              disabled={state.submitting}
              type="submit"
              style={styles.button}
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <LandingPageFooter />
    </section>
  );
};

export default Contact;
