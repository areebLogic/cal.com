import { useState } from "react";

import TaxCalculator from "@calcom/app-store/tax/components/TaxCalculator";
import TaxForm from "@calcom/app-store/tax/components/TaxCalculator";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { trpc } from "@calcom/trpc/react";
import { Icon } from "@calcom/ui/Icon";
import { Shell } from "@calcom/ui/v2";
import Button from "@calcom/ui/v2/core/Button";

function Tax() {
  const { t } = useLocale();

  return (
    <Shell heading={t("Tax")} subtitle={t("calculate_tax")}>
      <div>
        <TaxForm />
      </div>
    </Shell>
  );
}

Tax.requiresLicense = false;

export default Tax;
