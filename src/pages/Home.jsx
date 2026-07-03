import Navbar from "../components/common/Navbar";
import Header from "../components/common/Header";
import Chose from "../components/ui/chose/Chose";
import Our_collection from "../components/ui/our_collection/Our_collect";
import Works from "../components/common/works/Works";
import Footer from "../components/common/Footer";



function Home() {
  return (
    <>
      <Our_collection />
      <Chose />
      <Works/>
    </>
  );
}

export default Home ;