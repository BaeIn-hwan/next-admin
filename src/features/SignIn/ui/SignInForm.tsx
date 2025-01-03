"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Button, Checkbox, FormControlLabel, Stack, TextField } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FormRow } from "@/shared/ui/FormRow";
import { getLocalStorage, removeLocalStorage, setLocalStorage } from "@/shared/utils/storage";

import { loginSchema, type LoginSchema } from "../model/SignInFormSchema";

export default function SignInForm() {
  const router = useRouter();

  const methods = useForm<LoginSchema>({
    mode: "onSubmit",
    resolver: zodResolver(loginSchema),
    defaultValues: {
      id: "",
      pw: "",
    },
  });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = methods;
  const [saveId, setSaveId] = useState(false);

  const onSaveId = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target;

    setSaveId(target.checked);
  };

  const onLogin = (payload: { id: string }) => {
    const { id } = payload;

    if (saveId) {
      setLocalStorage("saveId", { id });
    } else {
      removeLocalStorage("saveId");
    }

    router.replace("/");
  };

  useEffect(() => {
    if (getLocalStorage("saveId")) {
      setValue("id", getLocalStorage("saveId").id);
      setSaveId(true);
    }
  }, [setValue]);

  return (
    <Box width={500} marginTop={3}>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onLogin)}>
          <fieldset>
            <legend>Login Form</legend>

            <Stack gap={1}>
              <FormRow errorMsg={errors.id?.message}>
                <TextField sx={{ width: "100%" }} label="ID" error={!!errors.id?.message} {...register("id")} />
              </FormRow>

              <FormRow marginTop="10px" errorMsg={errors.pw?.message}>
                <TextField
                  type="password"
                  sx={{ width: "100%" }}
                  label="PW"
                  error={!!errors.pw?.message}
                  {...register("pw")}
                />
              </FormRow>

              <Box>
                <FormControlLabel control={<Checkbox checked={saveId} onChange={onSaveId} />} label="SAVE ID" />
                {JSON.stringify(saveId)}
              </Box>
            </Stack>

            <Box marginTop={4}>
              <Button type="submit" variant="contained" size="large" sx={{ width: "100%", height: "50px" }}>
                Sign In
              </Button>
            </Box>
          </fieldset>
        </form>
      </FormProvider>
    </Box>
  );
}
