"use client";

import { SignUpComplete, SignUpForm } from "@/features/SIgnUp";
import { useSignUpStore } from "@/shared/store/useSignUpStore";

export default function SignUp() {
  const step = useSignUpStore((state) => state.step);

  return (
    <div>
      <h2>SignUp</h2>
      {step === 1 ? <SignUpForm /> : <SignUpComplete />}
    </div>
  );
}
