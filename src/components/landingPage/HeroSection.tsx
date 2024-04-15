import LandingPageFooter from "../headers/LandingPageFooter";

const HeroSection = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    entireSection: {
      // background: "#ffbf00",
    },
    backgroundSection: {
      margin: "0 5em",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    img: {
      width: "100%",
      borderRadius: "1em",
    },
    heroText1: {
      textAlign: "center",
      borderRadius: "1em",
      background: "#ffc238",
      margin: "1em",
    },
    heroText2: {
      textAlign: "center",
      borderRadius: "1em",
      background: "#00A6FB",
      margin: "1em",
    },
    investingSimplified: {
      fontSize: "4em",
      margin: "0.2em 0 0 0",
      color: "#fff",
    },
    paragraph: {
      fontSize: "1.5em",
      color: "#fff",
      padding: "0 1em",
    },
    button: {
      backgroundColor: "#ff5400",
      color: "white",
      borderRadius: ".5em",
      padding: "1em",
      border: "1px solid white",
      cursor: "pointer",
      margin: "0 .5em 1em .5em",
      fontSize: "1em",
    },
    cardThirdsContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      padding: "1em",
    },
    cardThirds1: {
      background: "#ffc238",
      color: "#fff",
      borderRadius: "1em",
      width: "33%",
      height: "17em",
    },
    cardThirds2: {
      background: "#00A6FB",
      color: "#fff",
      borderRadius: "1em",
      width: "33%",
      height: "17em",
    },
    cardThirds3: {
      background: "#ff631d",
      color: "#fff",
      borderRadius: "1em",
      width: "33%",
      height: "17em",
    },
    h2: {
      textAlign: "center",
      margin: ".5em 0 0 0",
    },
    paragraph1: {
      fontSize: "1.5em",
      color: "#fff",
      padding: "0 1em",
      margin: ".5em 1em",
      textAlign: "center",
    },
    paragraph2: {
      fontSize: "1.5em",
      color: "#fff",
      padding: "0 1em",
      margin: ".5em 1em",
      textAlign: "center",
    },
    paragraph3: {
      fontSize: "1.5em",
      color: "#fff",
      padding: "0 1em",
      margin: ".5em 1em",
      textAlign: "center",
    },
  };

  return (
    <section style={styles.entireSection}>
      <div style={styles.backgroundSection}>
        <div style={styles.container}>
          <div style={styles.heroText1}>
            <h2 style={styles.investingSimplified}>
              GLOBAL LENDING AND INVESTING SIMPLIFIED
            </h2>
            <p style={styles.paragraph}>
              Connecting budding entrepreneurs with potential investors
              seamlessly. Discover, connect, and fuel innovation with ease, all
              in one platform.
            </p>
            <button style={styles.button}>Investor Seeking Company</button>
            <button style={styles.button}>Company Seeking Investor</button>
          </div>
          <div>
            <img
              style={styles.img}
              src="../public/artwork/lending.jpg"
              alt="lending and investing simplified"
            />
          </div>
        </div>
        <div style={styles.container}>
          <div style={styles.heroText2}>
            <h2 style={styles.investingSimplified}>
              Uniting Worlds: The Stelr Experience
            </h2>
            <p style={styles.paragraph}>
              Stelr is a lending and payments platform that enables seamless
              connections and transactions for international funding/payments.
              Whether you’re looking to fund your business, expand into new
              territories of growth, or send money across countries/continents,
              Stelr is an inclusive all-in-one platform that allows customers
              and investors alike to make transactions with ease and comfort.
              Stelr is a platform that is designed to make international
              transactions and investments as easy as possible, with a focus on
              security and transparency.
            </p>
            <button style={styles.button}>Investor Seeking Company</button>
            <button style={styles.button}>Company Seeking Investor</button>
          </div>
        </div>
        <div style={styles.cardThirdsContainer}>
          <div style={styles.cardThirds1}>
            <h2 style={styles.h2}>Transactional Inclusivity</h2>
            <p style={styles.paragraph1}>
              Whether you’re looking to fund your business, expand into new
              territories of growth, process payments directly to international
              parties or send money across countries/continents, Stelr is an
              inclusive all-in-one platform that allows companies and investors
              alike to transact with ease and comfort.
            </p>
          </div>
          <div style={styles.cardThirds2}>
            <h2 style={styles.h2}>Innovation</h2>
            <p style={styles.paragraph2}>
              Our platform utilizes cutting edge financial technology throughout
              the lending and payment processes to improve efficiency and change
              the way the funding process takes place in underserved regions of
              the world.
            </p>
          </div>
          <div style={styles.cardThirds3}>
            <h2 style={styles.h2}>Outlook</h2>
            <p style={styles.paragraph3}>
              Our mission is to change the way clients achieve their goals
              globally. We strive to provide comprehensive support to clients of
              all sizes, and empower them to succeed. Whether our clients are
              pursuing ambitious goals or navigating challenges, Stelr is
              dedicated to being a trusted partner every step of the way.
            </p>
          </div>
        </div>
      </div>
      <LandingPageFooter />
    </section>
  );
};

export default HeroSection;
