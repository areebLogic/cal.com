import { useRef, useState, useEffect } from "react";

// import * as TaxJar from "taxjar";
// import Taxjar from "taxjar";
import { TaxForm } from "@calcom/app-store/tax/components/TaxCalculator";
import { useLocale } from "@calcom/lib/hooks/useLocale";
import { trpc } from "@calcom/trpc/react";
import { Button } from "@calcom/ui";
import { Icon } from "@calcom/ui/Icon";
import { Alert } from "@calcom/ui/v2/core/Alert";
import { Dialog, DialogContent, DialogFooter } from "@calcom/ui/v2/core/Dialog";

export default function CreateTaxForm() {
  return <TaxForm />;
}
