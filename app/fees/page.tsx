import FeesHero from "@/components/fees/FeesHero";
import FeeTable from "@/components/fees/FeeTable";
import PaymentOptions from "@/components/fees/PaymentOptions";
import RefundPolicy from "@/components/fees/RefundPolicy";
import FeesCTA from "@/components/fees/FeesCTA";
import AdmissionProcess from "@/components/fees/AdmissionProcess";

export default function FeesPage() {
  return (
    <main>

      <FeesHero />

      <FeeTable />

      <AdmissionProcess />

      <PaymentOptions />

      <RefundPolicy />

      <FeesCTA />

    </main>
  );
}