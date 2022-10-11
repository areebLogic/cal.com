import { Button } from "@calcom/ui";
import { Icon } from "@calcom/ui/Icon";

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

export default function TaxReceipt() {
  return (
    <div className="flex-col">
      <div className="h-50 border-black-500 border-2">
        <div className="flex flex-col">
          <div className="flex flex-row justify-around">
            <div>
              <label>
                <b>From Country</b>
              </label>
              <span className="block text-sm font-medium text-gray-700">
                {data.from_country.toUpperCase()}
              </span>
              <label>
                <b>From Zip</b>
              </label>
              <span className="block text-sm font-medium text-gray-700">{data.from_zip}</span>
            </div>
            <div>
              <label>
                <b>To Country</b>
              </label>
              <span className="block text-sm font-medium text-gray-700">{data.to_country.toUpperCase()}</span>
              <label>
                <b>To Zip</b>
              </label>
              <span className="block text-sm font-medium text-gray-700">{data.to_zip}</span>
            </div>
          </div>
          <div>
            <hr />
            <div className="m-3 flex flex-row justify-around">
              <div>
                <label>
                  <b>Tax</b>
                </label>
                <span className="block text-sm font-medium text-gray-700">{salesTax ? salesTax : 0.0}</span>
              </div>
              <div>
                <label>
                  <b>Shipping Amount</b>
                </label>
                <span className="block text-sm font-medium text-gray-700">{data.shipping}</span>
              </div>
              <div>
                <label>
                  <b>Total Amount</b>
                </label>
                <span className="block text-sm font-medium text-gray-700">{data.total_amount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <div className="relative overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="rounded-l-lg py-3 px-6">
                  Quantity
                </th>
                <th scope="col" className="py-3 px-6">
                  Unit Price
                </th>
                <th scope="col" className="rounded-r-lg py-3 px-6">
                  Tax Code
                </th>
              </tr>
            </thead>
            <tbody>
              {data.line_items &&
                data.line_items.map((it, index) => {
                  return (
                    <tr className="bg-white dark:bg-gray-800">
                      <td className="py-4 px-6" key={index}>
                        {it.quantity}
                      </td>
                      <td className="py-4 px-6" key={index + 1}>
                        {it.unit_price}
                      </td>
                      <td className="py-4 px-6" key={index + 2}>
                        {it.product_tax_code}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
            <tfoot>
              <tr className="font-semibold text-gray-900 dark:text-white">
                <th scope="row" className="py-3 px-6 text-base" />
                <td className="py-3 px-6" />
                <td className="py-3 px-6">
                  Total:{" "}
                  {salesTax
                    ? parseInt(salesTax) + parseInt(data.total_amount) + parseInt(data.shipping)
                    : parseInt(data.total_amount) + parseInt(data.shipping)}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
        <Button
          className="bg-black-500 hover:bg-grey-700 rounded-md py-2 px-4 font-bold text-white"
          type="button"
          onClick={handleAPIReq}>
          {t("Get Tax")}
        </Button>
      </div>
    </div>
  );
}
