import TaxForm from "@calcom/app-store/tax/components/TaxForm";
import TaxReceipt from "@calcom/app-store/tax/components/TaxReceipt";

interface Item {
  quantity: string;
  unit_price: string;
  product_tax_code: string;
}
interface Props {
  from_country: string;
  from_zip: string;
  to_country: string;
  to_zip: string;
  total_amount: number;
  shipping_amount: number;
  line_items: any[];
}

export default function TaxCalculator() {
  return (
    <>
      <TaxForm />
    </>
  );
}
