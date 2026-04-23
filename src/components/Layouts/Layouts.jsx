import { memo } from "react";
import Hero from "./Hero/Hero";
import HowItWork from "./HowItWork/HowItWork";
import AppShowcase from "./AppShowCase/AppShowCase";
import Features from "./Features/Features";
import SubscriptionPlans from "./SubscriptionPlans/SubscriptionPlans";
import Payment from "./Payments/Payments";

const Layouts = () => {
  return (
    <div className="layouts">
      <Hero />
      <HowItWork />
      <AppShowcase />
      <Features />
      <SubscriptionPlans />
      <Payment />
    </div>
  );
};

export default memo(Layouts);
