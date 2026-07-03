import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import { Commitment } from "../components/ui/commitment/commitment";
import { Head } from "../components/ui/head/head";
import { Quality } from "../components/ui/quality/Quality";


function About_us() {
  return (
    <>
      <Navbar />
      <Commitment />
      <Quality />
      <Head />
      <Footer />
    </>
  );
}

export default About_us;