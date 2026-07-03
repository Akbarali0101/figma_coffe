import React from 'react';
import Hero from '../components/ui/Hero/Hero';
import Chose from '../components/ui/chose/Chose';
import Coffeesection from '../components/ui/Coffeesection/Coffeesection';
import PlanSelector from '../components/ui/PlanSelector/PlanSelector'; 
import OrderForm from '../components/ui/OrderForm/OrderForm';
import Confik from '../components/ui/Confik/Confik';
import Deliver from '../components/ui/Deliver/Deliver';
import Beat from '../components/ui/Beat/Beat';

const Subscribe = () => {
  return (
    <div>
      < Hero/>
      < Chose/>
      < Coffeesection/>
      < PlanSelector/>
      < OrderForm/>
      < Confik/>
      < Deliver/>
      < Beat/>
    </div>
  );
};

export default Subscribe;