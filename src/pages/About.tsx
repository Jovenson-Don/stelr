import BeforeLoginCards from "../components/cards/BeforeLoginCards";
import InfoCard from "../components/cards/InfoCard";
import LandingPageFooter from "../components/headers/LandingPageFooter";

const styles: { [key: string]: React.CSSProperties } = {
  entirePage: {
    background:
      "linear-gradient(330deg, rgba(255, 194, 56, 0.2), rgba(255, 99, 29, 0.2), rgba(0, 166, 251, 0.2))",
  },
  cardsHolder: {
    margin: "0 5em",
  },
  cardsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch", // Align items to stretch vertically
    padding: "1em",
  },
  cardDivider: {
    background: "#00A6FB",
    color: "#fff",
    borderRadius: "1em",
    flex: 1, // Let the card take up equal space
    maxWidth: "calc(33% - 2em)", // Adjusting width to account for padding
    margin: "0 0.5em", // Add margin for spacing between cards
  },
  cardDivider2: {
    background: "#00A6FB",
    color: "#fff",
    borderRadius: "1em",
    flex: 1, // Let the card take up equal space
    maxWidth: "calc(50% - 2em)", // Adjusting width to account for padding
    margin: "0 0.5em", // Add margin for spacing between cards
  },
};

const About = () => {
  return (
    <div style={styles.entirePage}>
      <div style={styles.cardsHolder}>
        <BeforeLoginCards
          title="About Us"
          paragraph="Stelr is a cross-border lending and payments platform that enables seamless connections and transactions for international funding, borrowing, and payments.
       Securing funding, processing payments or sending/receiving money in developing countries and emerging markets can be challenging due to various reasons such as limited access to capital, regulatory constraints, economic instability, and a lack of established financial infrastructure. SMBs/SMEs and Startups are less likely to be able to obtain bank loans than large firms; instead, they rely on internal/personal funds, or cash from friends and family, to launch and initially run their ventures. 
       At Stelr, we’re helping to bridge the gap and provide viable funding/payment solutions and necessary resources to entrepreneurs, individuals and other entities in these underserved markets while demand in these areas continues to steadily increase."
        />
        <div style={styles.cardsContainer}>
          <div style={styles.cardDivider}>
            <InfoCard
              header="Access to Viable Funding/Payment Solutions"
              paragraph="We bring you the best solutions to secure funding and make cross-country/international payments with the utilization of our innovative software and platform."
            />
          </div>
          <div style={styles.cardDivider}>
            <InfoCard
              header="Low Transactional Fees and Interest Rates"
              paragraph="Our competitive fees and rate structures allow us to offer our clients the best deals on the services they are looking to fulfill."
            />
          </div>
          <div style={styles.cardDivider}>
            <InfoCard
              header="Fast and Seamless Processing From Start to Finish"
              paragraph="Our platform allows users to decrease the overall start-to-finish time it takes to complete these traditionally long and grueling processes when completed through other service providers."
            />
          </div>
        </div>
        <div style={styles.cardsContainer}>
          <div style={styles.cardDivider}>
            <InfoCard
              header="Transparency and Fairness"
              paragraph="Here at Stelr, transparency and fairness are some of our core beliefs. We believe in providing the most competitive offerings to our clients all while providing transparency and fairness throughout the process."
            />
          </div>
          <div style={styles.cardDivider}>
            <InfoCard
              header="Financial Empowerment"
              paragraph="Whether you’re looking to invest in the next big opportunity, send/receive payments, or build and grow your organization, Stelr allows you to make those big financial decisions with ease through the use of our innovative financial software. Our platform allows you to have confidence knowing you chose the right platform to execute these services through."
            />
          </div>
          <div style={styles.cardDivider}>
            <InfoCard
              header="Community Engagement"
              paragraph="We provide an actively engaged community of clients with like minded goals they are looking to accomplish and provide an environment that fosters growth, inclusion, and empowerment to our users."
            />
          </div>
        </div>
        <div style={styles.cardsContainer}>
          <div style={styles.cardDivider2}>
            <InfoCard
              header="Risk Mitigation"
              paragraph="We work diligently to bring you the most viable options that are best suited for you as an investor or company, based off of metrics that allow us to curate a bespoke selection for you, all while mitigating the risk that is associated with the lending/borrowing and payment processes."
            />
          </div>
          <div style={styles.cardDivider2}>
            <InfoCard
              header="Exceptional End-to-End User Experience"
              paragraph="Clients can make investments, send and receive payments, and seek to expand into new international territories with Stelr’s easy to use all-in-one platform. Engaging in these services has never been made this easy until Stelr."
            />
          </div>
        </div>
      </div>
      <LandingPageFooter />
    </div>
  );
};

export default About;
