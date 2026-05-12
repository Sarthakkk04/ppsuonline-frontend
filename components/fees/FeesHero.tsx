import {
  CreditCard,
  Smartphone,
  Landmark,
  CalendarClock,
} from "lucide-react";

export default function FeesHero() {
  return (
    <section className="feesHero">

      <div className="feesHeroGlowOne" />
      <div className="feesHeroGlowTwo" />

      <div className="feesHeroContent">

        <div className="feesHeroBadge">
          Transparent & Flexible Payment Structure
        </div>

        <h1>
          Fees & <span>Payment</span>
        </h1>

        <p>
          Affordable, flexible and student-friendly fee
          structure designed to make quality online education
          accessible for every learner.
        </p>

        <button className="feesHeroBtn">
          Fee Payment Portal
        </button>

      </div>

<div className="feesFloatingCards">

  <div className="feesFloatCard">

    <div className="feesHeroIcon">
      <CreditCard size={30} strokeWidth={2.2} />
    </div>

    <h3>Cards Accepted</h3>

  </div>

  <div className="feesFloatCard">

    <div className="feesHeroIcon">
      <Smartphone size={30} strokeWidth={2.2} />
    </div>

    <h3>UPI Payments</h3>

  </div>

  <div className="feesFloatCard">

    <div className="feesHeroIcon">
      <Landmark size={30} strokeWidth={2.2} />
    </div>

    <h3>Net Banking</h3>

  </div>

  <div className="feesFloatCard">

    <div className="feesHeroIcon">
      <CalendarClock size={30} strokeWidth={2.2} />
    </div>

    <h3>EMI Available</h3>

  </div>

</div>

    </section>
  );
}