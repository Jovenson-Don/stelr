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
      fontSize: "24px",
    },
  };

  return (
    <footer style={styles.footer}>
      <Link style={styles.footerLinks} to="/about">
        <span style={styles.spans}>About Us</span>
      </Link>
      <Link style={styles.footerLinks} to="/contact">
        <span style={styles.spans}>Contact</span>
      </Link>
      <Link style={styles.footerLinks} to="/faq">
        <span style={styles.spans}>FAQ</span>
      </Link>
    </footer>
  );
};

export default LandingPageFooter;
