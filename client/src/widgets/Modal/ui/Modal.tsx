import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import CallModal from "@/feature/callModal/ui/CallModal";
import { useSubscribeMailing } from "@/feature/subscribeForm/api";

import { Input, Button } from "@/shared/ui";
import { removeOverflowHiddenFromBody } from "@/shared/lib/bodyOverflowHidden";

import {
  type LoginFormSchema,
  loginFormSchema,
} from "../modal/modalSchema";
import { type ModalProps } from "../modal/types";
import { AccessSubscribe } from "./AccesSubscribe";
import { icons } from "../modal/Icons";
import { inputs } from "../lib/constants";
import {
  type FormEvent,
  useState,
  type ChangeEvent,
} from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Modal = ({
  active,
  setActive,
  ...props
}: ModalProps) => {
  const { t } = useTranslation("contacts");
  const mutate = useSubscribeMailing();
  const [phoneNumber, setPhoneNumber] =
    useState<string>();
  const {
    formState: { errors },
    handleSubmit,
    register,
  } = useForm<LoginFormSchema>({
    resolver: zodResolver(loginFormSchema),
  });

  const handleClose = () => {
    setActive(false);
    removeOverflowHiddenFromBody();
  };
  const onSubmit = (
    userData: LoginFormSchema,
  ) => {
    mutate.mutate(userData);
  };
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
  return (
    <CallModal
      active={active}
      handleClose={handleClose}
      {...props}
    >
      {mutate.isError || mutate.isSuccess ? (
        <AccessSubscribe />
      ) : (
        <>
          <form
            className="flex flex-col m-2 gap-3 items-center"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="space-bold-font text-base text-center">
              <p>{t("ЗАКАЖИТЕ ЗВОНОК")}</p>
              <p className="mb-2">
                {t("ПРЯМО СЕЙЧАС")}
              </p>
            </div>
            {inputs.map((input, index) => (
              <Input
                key={index}
                placeholder={t(input.placeholder)}
                className={`cursor-text w-80  ${errors[input.register] != null ? `border-red-600 ` : ``}`}
                {...register(input.register)}
              />
            ))}
            <Input
              type="tel"
              maxLength={11}
              placeholder={t("Телефон")}
              className={`w-80 cursor-text`}
              value={phoneNumber}
              onInput={(
                e: ChangeEvent<HTMLInputElement>,
              ) => {
                const processedPhoneNumber =
                  e.target.value.replace(
                    /[^\d]/g,
                    "",
                  );
                if (
                  processedPhoneNumber.length >=
                    1 &&
                  processedPhoneNumber.charAt(
                    0,
                  ) !== "7"
                ) {
                  e.target.value =
                    "+7" + processedPhoneNumber;
                } else {
                  e.target.value =
                    processedPhoneNumber;
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
                ? t("Загрузка...")
                : t("Заказать звонок")}
            </Button>
          </form>
          <div className="flex justify-around my-6">
            {icons.map((icon, index) => (
              <Link
                target="_blank"
                key={index}
                to={icon.path}
              >
                <img
                  src={icon.src}
                  alt={icon.alt}
                  width={icon.width}
                />
              </Link>
            ))}
          </div>
        </>
      )}
    </CallModal>
  );
};
