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
      margin: "1em",
    },
  };

  return (
    <div>
      <h1 style={styles.h1}>{title}</h1>
      <p>{paragraph}</p>
      <span>{buttons}</span>
    </div>
  );
};

export default BeforeLoginCards;
