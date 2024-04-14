import { Link } from "react-router-dom";

const LandingPageFooter = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    footer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "3em",
      background: "#00A6FB",
      color: "white",
    },
    footerLinks: {
      textDecoration: "none",
      color: "#fff",
    },
    spans: {
      padding: "0 1em",
      margin: "0 1em",
    },
  };

  return (
    <footer style={styles.footer}>
      <Link style={styles.footerLinks} to="/about">
        <span style={styles.spans}>About Us</span>
      </Link>
      <span style={styles.spans}>Contact</span>
      <span style={styles.spans}>FAQ</span>
    </footer>
  );
};

export default LandingPageFooter;
