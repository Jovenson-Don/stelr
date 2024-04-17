const Faq = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    entirePage: {
      background:
        "linear-gradient(330deg, rgba(255, 194, 56, 0.2), rgba(255, 99, 29, 0.2), rgba(0, 166, 251, 0.2))",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
  };

  return (
    <section style={styles.entirePage}>
      <div>
        <h1>FAQ</h1>
      </div>
    </section>
  );
};

export default Faq;
