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
      backgroundColor: "#00A6FB",
      color: "white",
      borderRadius: "3em",
      padding: "1em",
      border: "none",
      cursor: "pointer",
      margin: ".5em",
      fontSize: "1em",
    },
  };
  return (
    <div style={styles.container}>
      <div style={styles.heroText}>
        <h2 style={styles.investingSimplified}>
          Global lending and investing simplified
        </h2>
        <p style={styles.paragraph}>
          Connecting budding entrepreneurs with potential investors seamlessly.
          Discover, connect, and fuel innovation with ease, all in one platform.
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
  );
};

export default HeroSection;
