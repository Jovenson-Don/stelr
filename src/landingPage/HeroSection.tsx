const HeroSection = () => {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
  };
  return (
    <div style={styles.container}>
      <div>
        <h2>Global lending and investing simplified</h2>
      </div>
      <div>
        <img src="https://via.placeholder.com/150" alt="hero" />
      </div>
    </div>
  );
};

export default HeroSection;
