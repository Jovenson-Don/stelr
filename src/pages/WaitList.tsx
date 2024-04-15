import logo from "../../public/artwork/stelrLogoWhiteYellowAccent.svg";
import background from "../../public/artwork/loginSignupBackground.png";
import { Link } from "react-router-dom";

function WaitList() {
  const styles: { [key: string]: React.CSSProperties } = {
    entirePage: {
      display: "flex",
    },
    pageLeft: {
      minHeight: "100vh",
      background: `url(${background})`,
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      color: "#fff",
      padding: "2em",
    },
    pageRight: {
      minHeight: "100vh",
      textAlign: "center",
      width: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "2em",
    },
    logo: {
      width: "6.5em",
      height: "auto",
      marginBottom: "2em",
    },
    heading: {
      fontSize: "2em",
      margin: "0em",
      textAlign: "center",
    },
    subheading: {
      fontSize: "1.2em",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
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
    selectInput: {
      width: "31em",
      height: "3em",
      marginBottom: "1em",
      padding: "0.5em",
      borderRadius: "0.5em",
      border: "1px solid #ccc",
      background: "rgba(128, 128, 128, 0.1)",
      color: "#000",
    },
    label: {
      textAlign: "left",
      width: "90%",
      marginBottom: "0.5em",
      marginRight: "2.5em",
    },
  };

  return (
    <div style={styles.entirePage}>
      <div style={styles.pageLeft}>
        <Link to="/">
          <h1>
            <img src={logo} style={styles.logo} alt="Stelr Logo" />
          </h1>
        </Link>
        <h2 style={styles.heading}> GLOBAL LENDING AND INVESTING SIMPLIFIED</h2>
      </div>
      <div style={styles.pageRight}>
        <h1 style={styles.heading}>Join Our Waitlist</h1>
        <p style={styles.subheading}>
          Please enter your information to Join Our Waitlist
        </p>
        <form style={styles.form}>
          <label style={styles.label} htmlFor="fullName">
            Full Name:
          </label>
          <input
            id="fullName"
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
            style={styles.input}
            placeholder="Email Address"
            required
          />
          <label style={styles.label} htmlFor="accountType">
            Account Type
          </label>
          <select id="accountType" style={styles.selectInput}>
            <option value="company">Company</option>
            <option value="investor">Lender</option>
          </select>
          <button style={styles.button}>Join</button>
        </form>
      </div>
    </div>
  );
}

export default WaitList;
