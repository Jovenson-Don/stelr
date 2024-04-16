interface InfoCardProps {
  header: string;
  paragraph: string;
}

const InfoCard = ({ header, paragraph }: InfoCardProps) => {
  const styles: { [key: string]: React.CSSProperties } = {
    cardAlign: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "stretch", // Align items to stretch vertically
      padding: "1em",
    },
    card: {
      background: "#ffc238",
      color: "#fff",
      borderRadius: "1em",
      flex: 1, // Let the card take up equal space
      maxWidth: "calc(33% - 2em)", // Adjusting width to account for padding
      margin: "0 0.5em", // Add margin for spacing between cards
    },
    h2: {
      textAlign: "center",
      margin: ".5em 0 0 0",
    },
    paragraph: {
      fontSize: "1.5em",
      color: "#fff",
      padding: "0 1em",
      margin: ".5em 1em",
      textAlign: "center",
    },
  };
  return (
    <section style={styles.cardAlign}>
      <div style={styles.card}>
        <h2 style={styles.h2}>{header}</h2>
        <p style={styles.paragraph1}>{paragraph}</p>
      </div>
    </section>
  );
};

export default InfoCard;
