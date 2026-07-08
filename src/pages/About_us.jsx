import { Commitment } from "../components/ui/commitment/commitment";
import { Head } from "../components/ui/head/Head";
import { Quality } from "../components/ui/quality/Quality";
import Header from "../components/common/Header/Header";

function About() {
  return (
    <>
      <Header
        title="About Us"
        description="Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment."
        backgroundImage="/hero-bg/about.png"
        showButton={false}
      />
      <Commitment />
      <Quality />
      <Head />
    </>
  );
}

export default About;
