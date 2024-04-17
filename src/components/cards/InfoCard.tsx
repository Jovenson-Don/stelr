interface InfoCardProps {
  header: string;
  paragraph: string;
}

const InfoCard = ({ header, paragraph }: InfoCardProps) => {
  const styles: { [key: string]: React.CSSProperties } = {
    cardAlign: {
      display: "flex",
      justifyContent: "space-between",
      padding: "1em",
    },
    card: {
      background: "#00A6FB",
      color: "#fff",
      borderRadius: "1em",
    },
    h2: {
      textAlign: "center",
      margin: ".5em 0 0 0",
      fontSize: "2em",
    },
    paragraph: {
      textAlign: "center",
      fontSize: "1.5em",
    },
  };
  return (
    <section style={styles.cardAlign}>
      <div style={styles.card}>
        <h2 style={styles.h2}>{header}</h2>
        <p style={styles.paragraph}>{paragraph}</p>
      </div>
    </section>
  );
};

export default InfoCard;
