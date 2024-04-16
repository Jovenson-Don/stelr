import BeforeLoginCards from "../components/cards/BeforeLoginCards";
import InfoCard from "../components/cards/InfoCard";
import LandingPageFooter from "../components/headers/LandingPageFooter";

const styles: { [key: string]: React.CSSProperties } = {
  entirePage: {
    background:
      "linear-gradient(330deg, rgba(255, 194, 56, 0.2), rgba(255, 99, 29, 0.2), rgba(0, 166, 251, 0.2))",
  },
};

const About = () => {
  return (
    <div style={styles.entirePage}>
      <BeforeLoginCards
        title="About Us"
        paragraph="Stelr is a cross-border lending and payments platform that enables seamless connections and transactions for international funding, borrowing, and payments. 
        in emerging markets & Developing countries) 
       “Securing funding, processing payments or sending/receiving money in developing countries and emerging markets can be challenging due to various reasons such as limited access to capital, regulatory constraints, economic instability, and a lack of established financial infrastructure. SMBs/SMEs and Startups are less likely to be able to obtain bank loans than large firms; instead, they rely on internal funds, or cash from friends and family, to launch and initially run their ventures. 
       At Stelr, we’re helping to bridge the gap and provide viable funding/payment solutions and necessary resources to entrepreneurs, individuals and other entities in these underserved markets while demand in these areas continues to steadily increase. "
      />
      <div>
        <InfoCard
          header="Providing Access to Viable funding/payment solutions"
          paragraph="We bring you the best options for you to secure funding and make cross-country/international payments with the utilization of our innovative software and platform."
        />
        <InfoCard
          header="Providing Access to Viable funding/payment solutions"
          paragraph="We bring you the best options for you to secure funding and make cross-country/international payments with the utilization of our innovative software and platform."
        />
        <InfoCard
          header="Providing Access to Viable funding/payment solutions"
          paragraph="We bring you the best options for you to secure funding and make cross-country/international payments with the utilization of our innovative software and platform."
        />
      </div>
      <LandingPageFooter />
    </div>
  );
};

export default About;
