import { create } from "zustand";
import { devtools } from "zustand/middleware";

type TState = {
  step: number;
};

type TAction = {
  actions: {
    setStep: (step: number) => void;
  };
};

const initState = {
  step: 1,
};

const useSignUpStore = create<TState & TAction>()(
  devtools((set) => ({
    ...initState,
    actions: {
      setStep: (step: number) => set({ step }),
    },
  })),
);

const useSignUpAction = () => useSignUpStore((state) => state.actions);

export { useSignUpStore, useSignUpAction };
