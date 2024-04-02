const HeroSection = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    img: {
      width: "100%",
    },
    heroText: {
      textAlign: "center",
    },
    investingSimplified: {
      fontSize: "4em",
      margin: "0 0",
    },
    paragraph: {
      fontSize: "1.5em",
    },
    button: {
      backgroundColor: "#ff5400",
      color: "white",
      borderRadius: ".5em",
      padding: "1em",
      border: "none",
      cursor: "pointer",
      margin: ".5em",
      fontSize: "1em",
    },
  };

  return (
    <>
      <div style={styles.container}>
        <div style={styles.heroText}>
          <h2 style={styles.investingSimplified}>
            GLOBAL LENDING AND INVESTING SIMPLIFIED
          </h2>
          <p style={styles.paragraph}>
            Connecting budding entrepreneurs with potential investors
            seamlessly. Discover, connect, and fuel innovation with ease, all in
            one platform.
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
        <div>
          <img
            style={styles.img}
            src="../public/artwork/lending.jpg"
            alt="lending and investing simplified"
          />
        </div>
        <div style={styles.heroText}>
          <h2 style={styles.investingSimplified}>
            Uniting Worlds: Stelr's Peer-to-Peer Experience
          </h2>
          <p style={styles.paragraph}>
            Stelr is a peer to peer lending and payments platform that enables
            seamless connections and transactions for international
            funding/investments. Whether you’re looking to fund your business,
            expand into new territories of growth, or send money across
            countries/continents, Stelr is an inclusive all-in-one platform that
            allows customers and investors alike to make transactions with ease
            and comfort. Stelr is a platform that is designed to make
            international transactions and investments as easy as possible, with
            a focus on security and transparency.
          </p>
          <button style={styles.button}>Investor Seeking Company</button>
          <button style={styles.button}>Company Seeking Investor</button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
