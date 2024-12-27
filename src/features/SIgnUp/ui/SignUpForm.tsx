"use client";

import { Button } from "@mui/material";
import React from "react";

import { useSignUpAction } from "@/shared/store/useSignUpStore";

export default function SignUpForm() {
  const { setStep } = useSignUpAction();

  const handleNext = () => {
    setStep(2);
  };

  return (
    <div>
      SignUpForm
      <div>
        <Button onClick={handleNext}>Next</Button>
      </div>
    </div>
  );
}
