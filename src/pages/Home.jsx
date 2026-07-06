// import Header from '../components/common/Header';
import Hero from '../components/ui/Hero/Hero';
import Chose from '../components/ui/chose/Chose';
import Our_collection from '../components/ui/our_collection/Our_collect';
import Works from '../components/common/works/Works';

function Home() {
  return (
    <>
      {/* <Header /> */}
      <Hero backgroundImage="/hero-bg/bg1.png" />
      <Our_collection />
      <Chose />
      <Works isDark={false} />
    </>
  );
}

export default Home;