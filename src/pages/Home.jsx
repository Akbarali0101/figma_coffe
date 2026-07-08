import {Header} from "../components/common/Header/Header"; // 1. Add this missing import
import Chose from "../components/ui/chose/Chose";
import Our_collection from "../components/ui/our_collection/Our_collect";
import Works from "../components/common/works/Works";

function Home() {
  return (
    <>
      <Header
        title="Great coffee made simple."
        description="Start your mornings with the world's best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule."
        backgroundImage="/hero-bg/home.png"
        showButton={true}
      />
      <Our_collection />
      <Chose />
      <Works isDark={false} />
    </>
  );
}

export default Home;
