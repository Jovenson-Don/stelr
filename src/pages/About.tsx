import BeforeLoginCards from "../components/cards/BeforeLoginCards";
import LandingPageFooter from "../components/headers/LandingPageFooter";

const About = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    h1: {
      color: "#00A6FB",
      textAlign: "center",
      fontSize: "2em",
      margin: "1em",
    },
  };

  return (
    <div>
      <BeforeLoginCards title="About Us" paragraph="paragraph" />
      <h1 style={styles.h1}>About Us</h1>
      <p>
        Stelr is a peer to peer lending and payments platform that enables
        seamless connections and transactions for international funding,
        borrowing, and payments. (**Focused on improving effieciency and
        innovation in emerging markets & Developing countries) Whether you’re
        looking to fund your business, expand into new territories of growth, or
        send money across countries/continents, Stelr is an inclusive all-in-one
        platform that allows customers and investors alike to make transactions
        with ease and comfort. Our platform utilizes cutting edge financial
        technology throughout the lending and payment processes to improve
        efficiency and change the way the funding process takes place in
        underserved regions of the world. By creating our innovative platform,
        Stelr aims to serve our clients globally and help them achieve their
        goals, no matter how big, medium, or small. “
      </p>
      <LandingPageFooter />
    </div>
  );
};

export default About;
