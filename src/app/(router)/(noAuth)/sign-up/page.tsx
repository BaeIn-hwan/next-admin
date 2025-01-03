import React from "react";

import SignUp from "@/pages/SignUp";
import { BreadCrumb } from "@/widgets/BreadCrumb";

export default function page() {
  return (
    <div>
      <BreadCrumb />
      <SignUp />
    </div>
  );
}
