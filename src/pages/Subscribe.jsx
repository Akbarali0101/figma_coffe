import Header from "../components/common/Header";
// import Hero from '../components/ui/Hero/Hero';
import Works from "../components/common/works/Works";
import Coffeesection from "../components/ui/Coffeesection/Coffeesection";
import PlanSelector from "../components/ui/PlanSelector/PlanSelector";
import OrderForm from "../components/ui/OrderForm/OrderForm";
import Confik from "../components/ui/Confik/Confik";
import Deliver from "../components/ui/Deliver/Deliver";
import Beat from "../components/ui/Beat/Beat";
import Chose from "../components/ui/chose/Chose";

const Subscribe = () => {
  return (
    <div>
      <Header
        title="Create a plan"
        description="Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door."
        backgroundImage="/hero-bg/subs.png"
        showButton={false}
      />
      <Works isDark={true} />
      <Chose />
      <Coffeesection />
      <PlanSelector />
      <OrderForm />
      <Confik />
      <Deliver />
      <Beat />
    </div>
  );
};

export default Subscribe;
