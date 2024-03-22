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
  };
  return (
    <div style={styles.container}>
      <div style={styles.heroText}>
        <h2>Global lending and investing simplified</h2>
        <p>
          Connecting budding entrepreneurs with potential investors seamlessly.
          Discover, connect, and fuel innovation with ease, all in one platform.
        </p>
        <button>Investor Seeking Company</button>
        <button>Company Seeking Investor</button>
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
