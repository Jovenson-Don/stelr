const FAQ = () => {
  const styles: { [key: string]: React.CSSProperties } = {
    entirePage: {
      background:
        "linear-gradient(330deg, rgba(255, 194, 56, 0.2), rgba(255, 99, 29, 0.2), rgba(0, 166, 251, 0.2))",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    // pageLeft: {
    //   minHeight: "100vh",
    //   background: `url(${background})`,
    //   width: "50%",
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   color: "#fff",
    //   padding: "2em",
    // },
    // pageRight: {
    //   minHeight: "100vh",
    //   textAlign: "center",
    //   width: "50%",
    //   display: "flex",
    //   flexDirection: "column",
    //   justifyContent: "center",
    //   alignItems: "center",
    //   padding: "2em",
    // },
    // logo: {
    //   width: "6.5em",
    //   height: "auto",
    //   marginBottom: "2em",
    // },
    // heading: {
    //   fontSize: "2em",
    //   margin: "0em",
    //   textAlign: "center",
    // },
    // subheading: {
    //   fontSize: "1.2em",
    // },
    // form: {
    //   display: "flex",
    //   flexDirection: "column",
    //   alignItems: "center",
    // },
    // input: {
    //   width: "30em",
    //   height: "3em",
    //   marginBottom: "1em",
    //   padding: "0.5em",
    //   borderRadius: "0.5em",
    //   border: "1px solid #ccc",
    //   background: "rgba(128, 128, 128, 0.1)",
    // },
    // button: {
    //   width: "20em",
    //   height: "3em",
    //   backgroundColor: "#00A6FB",
    //   color: "#fff",
    //   borderRadius: "0.5em",
    // },
  };

  return (
    <section style={styles.entirePage}>
      <div>
        <h1>FAQ</h1>
      </div>
    </section>
  );
};

export default FAQ;
