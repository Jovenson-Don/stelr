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
    heroText: {
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
  };

  return (
    <section style={styles.entireSection}>
      <div style={styles.backgroundSection}>
        <div style={styles.container}>
          <div style={styles.heroText}>
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
          <div style={styles.heroText}>
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
              <br />
              <br />
              Whether you’re looking to fund your business, expand into new
              territories of growth, process payments directly to international
              parties or send money across countries/continents, Stelr is an
              inclusive all-in-one platform that allows companies and investors
              alike to transact with ease and comfort.
              <br />
              <br />
              Our platform utilizes cutting edge financial technology throughout
              the lending and payment processes to improve efficiency and change
              the way the funding process takes place in underserved regions of
              the world.
              <br />
              <br />
              By creating our innovative platform, Stelr aims to serve our
              clients globally and help them achieve their goals, no matter how
              big, medium, or small.
            </p>
            <button style={styles.button}>Investor Seeking Company</button>
            <button style={styles.button}>Company Seeking Investor</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
