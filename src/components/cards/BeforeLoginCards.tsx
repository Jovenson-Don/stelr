interface BeforeLoginCardsProps {
  title?: string;
  paragraph?: string;
  buttons?: JSX.Element;
}

const BeforeLoginCards = ({
  title,
  paragraph,
  buttons,
}: BeforeLoginCardsProps): JSX.Element => {
  const styles: { [key: string]: React.CSSProperties } = {
    h1: {
      color: "#00A6FB",
      textAlign: "center",
      fontSize: "2em",
      margin: "0 1em",
    },
    paragraph: {
      fontSize: "1.5em",
      color: "#ff5400",
      padding: "0 1em",
      textAlign: "center",
      fontWeight: "bold",
    },
  };

  return (
    <div>
      <h1 style={styles.h1}>{title}</h1>
      <p style={styles.paragraph}>{paragraph}</p>
      <span>{buttons}</span>
    </div>
  );
};

export default BeforeLoginCards;
