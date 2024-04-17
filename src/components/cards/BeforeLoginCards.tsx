interface BeforeLoginCardsProps {
  title?: string;
  paragraph?: string;
  buttons?: JSX.Element;
  backgroundColor?: string;
}

const BeforeLoginCards = ({
  title,
  paragraph,
  buttons,
  backgroundColor,
}: BeforeLoginCardsProps): JSX.Element => {
  const styles: { [key: string]: React.CSSProperties } = {
    cardAlign: {
      display: "flex",
      justifyContent: "space-between",
      padding: "1em",
    },
    card: {
      background: backgroundColor || "#ff5400",
      color: "#fff",
      borderRadius: "1em",
    },
    h1: {
      textAlign: "center",
      margin: ".5em 0 0 0",
      fontSize: "3em",
    },
    paragraph: {
      textAlign: "center",
      fontSize: "1.5em",
      padding: "0 2em",
    },
  };

  return (
    <section style={styles.cardAlign}>
      <div style={styles.card}>
        <h1 style={styles.h1}>{title}</h1>
        <p style={styles.paragraph}>{paragraph}</p>
        <span>{buttons}</span>
      </div>
    </section>
  );
};

export default BeforeLoginCards;
