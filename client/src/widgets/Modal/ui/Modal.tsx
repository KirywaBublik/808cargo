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
import { type FormEvent, useState } from "react";

export const Modal = ({
  active,
  setActive,
  ...props
}: ModalProps) => {
  const mutate = useSubscribeMailing();
  const [phoneNumber, setPhoneNumber] =
    useState();
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
    const inputPhoneNumber = e.target.value;
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
            <p>ЗАКАЖИТЕ ЗВОНОК</p>
            <p className="mb-2">ПРЯМО СЕЙЧАС</p>
            {inputs.map((input, index) => (
              <Input
                key={index}
                placeholder={input.placeholder}
                className={`cursor-text ${errors[input.register] != null ? `border-red-600 ` : ``}`}
                {...register(input.register)}
              />
            ))}
            <Input
              type="tel"
              maxLength={11}
              placeholder="Телефон"
              className={`w-full cursor-text`}
              value={phoneNumber}
              onInput={(e) => {
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
                ? "Загрузка..."
                : "Отправить"}
            </Button>
          </form>
          <div className="flex justify-around mt-6">
            {icons.map((icon, index) => (
              <img
                key={index}
                src={icon.src}
                alt={icon.alt}
                width={icon.width}
              />
            ))}
          </div>
        </>
      )}
    </CallModal>
  );
};
