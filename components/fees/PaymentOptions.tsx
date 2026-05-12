import {
  Smartphone,
  CreditCard,
  Landmark,
  CalendarClock,
} from "lucide-react";

export default function PaymentOptions() {
  return (
    <section className="paymentSection">

      <div className="sectionTag">
        Flexible Payment Methods
      </div>

      <h2 className="sectionTitle">
        Multiple Payment Options
      </h2>

      <div className="paymentGrid">

        <div className="paymentCard">

          <div className="paymentIcon">
            <Smartphone size={34} />
          </div>

          <h3>UPI Payments</h3>

          <p>
            Pay instantly using any UPI application.
          </p>

        </div>

        <div className="paymentCard">

          <div className="paymentIcon">
            <CreditCard size={34} />
          </div>

          <h3>Debit / Credit Cards</h3>

          <p>
            Secure online card payment gateway.
          </p>

        </div>

        <div className="paymentCard">

          <div className="paymentIcon">
            <Landmark size={34} />
          </div>

          <h3>Net Banking</h3>

          <p>
            All major Indian banks supported.
          </p>

        </div>

        <div className="paymentCard">

          <div className="paymentIcon">
            <CalendarClock size={34} />
          </div>

          <h3>EMI & Instalments</h3>

          <p>
            Flexible semester-wise financing options.
          </p>

        </div>

      </div>

    </section>
  );
}