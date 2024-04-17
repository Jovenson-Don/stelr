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

const Faq = () => {
  return (
    <div style={styles.entirePage}>
      <div style={styles.cardsHolder}>
        <BeforeLoginCards
          title="FAQ"
          paragraph="Welcome to our FAQ section! Here, we've compiled answers to the most common questions our customers ask. Whether you're seeking information about our products, services, policies, or anything else related to our business, you'll likely find what you need here. We understand that navigating through various inquiries can sometimes be overwhelming, so we've organized this section to provide clear and concise responses to help address any concerns you may have. If you can't find the answer you're looking for, feel free to reach out to our customer support team, and we'll be happy to assist you further. Happy exploring!"
          backgroundColor="#ffc238"
        />
        <div style={styles.cardsContainer}>
          <div style={styles.cardDivider}>
            <InfoCard
              header="What Does The Stelr Platform Offer?"
              paragraph="We are an international lending and payments service that connects borrowers directly with lenders, allowing companies to obtain loans without going through traditional financial institutions like banks or credit unions, and process payments."
            />
          </div>
          <div style={styles.cardDivider}>
            <InfoCard
              header="How does the platform ensure the security of cross-border transactions?"
              paragraph="At Stelr, user/transaction security and privacy are some of our top priorities. We utilize Anti Money Laundering (AML) and Know You Customer (KYC) technology integrated directly into our platform to ensure the proper security measures are in place to enable seamless transactions through the platform with confidence."
            />
          </div>
          <div style={styles.cardDivider}>
            <InfoCard
              header="Can I use the platform for cross-border transactions from any country?"
              paragraph="At Stelr, we’re working diligently to bring our services to many different countries and regions globally. Continue to check our site to see which countries we operate in!"
            />
          </div>
        </div>
      </div>
      <LandingPageFooter />
    </div>
  );
};

export default Faq;
