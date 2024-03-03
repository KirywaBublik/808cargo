import { Button, Input } from "@/shared/ui";
import {
  type LoginFormSchema,
  loginFormSchema,
} from "@/widgets/Modal/modal/modalSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSubscribeMailing } from "../api";
import { inputs } from "../lib/constants";
import {
  type FormEvent,
  useState,
  type ChangeEvent,
} from "react";
import { useTranslation } from "react-i18next";

export const SubscribeForm = () => {
  const mutate = useSubscribeMailing();
  const [phoneNumber, setPhoneNumber] =
    useState<string>();
  const { t } = useTranslation();
  const handlePhoneChange = (
    e: FormEvent<HTMLInputElement>,
  ) => {
    const inputPhoneNumber = (
      e.target as HTMLInputElement
    ).value;
    const processedPhoneNumber =
      inputPhoneNumber.replace(/[^\d]/g, "");

    if (
      processedPhoneNumber.length >= 1 &&
      processedPhoneNumber.charAt(0) !== "7"
    ) {
      setPhoneNumber("+7" + processedPhoneNumber);
    } else {
      setPhoneNumber(processedPhoneNumber);
    }
  };
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });
  const onSubmit = (
    userData: LoginFormSchema,
  ) => {
    mutate.mutate(userData);
  };
  return (
    <form
      className="flex flex-col  gap-3 items-center pb-20"
      onSubmit={() => handleSubmit(onSubmit)}
    >
      {inputs.map((input, index) => (
        <Input
          key={index}
          placeholder={t(input.placeholder)}
          className={`w-full cursor-text ${errors[input.register] != null ? `border-red-600 ` : ``}`}
          {...register(input.register)}
        />
      ))}
      <Input
        type="tel"
        maxLength={11}
        placeholder={t("Телефон")}
        value={phoneNumber}
        className={`w-full cursor-tex`}
        onInput={(
          e: ChangeEvent<HTMLInputElement>,
        ) => {
          const processedPhoneNumber =
            e.target.value.replace(/[^\d]/g, "");
          if (
            processedPhoneNumber.length >= 1 &&
            processedPhoneNumber.charAt(0) !== "7"
          ) {
            e.target.value =
              "+7" + processedPhoneNumber;
          } else {
            e.target.value = processedPhoneNumber;
          }
          handlePhoneChange(e);
        }}
        {...register("phone")}
      />
      <Button
        type="submit"
        className="mt-2 w-full"
        disabled={mutate.isPending}
      >
        {mutate.isPending
          ? "Загрузка..."
          : t("Заказать звонок")}
      </Button>
    </form>
  );
};
