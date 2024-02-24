import CallModal from "@/feature/callModal/ui/CallModal";
import { type ModalProps } from "../modal/types";

import { removeOverflowHiddenFromBody } from "@/shared/lib/bodyOverflowHidden";
import { Input, Button } from "@/shared/ui";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import {
  type LoginFormSchema,
  loginFormSchema,
} from "../modal/modalSchema";
import { AccesSubscribe } from "./AccesSubscribe";
import { icons } from "../modal/Icons";
import { useSubscribeMailing } from "@/feature/subscribeForm/api";

export const Modal = ({
  active,
  setActive,
  ...props
}: ModalProps) => {
  const mutate = useSubscribeMailing();

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

  return (
    <CallModal
      active={active}
      handleClose={handleClose}
      {...props}
    >
      {mutate.isError || mutate.isSuccess ? (
        <AccesSubscribe />
      ) : (
        <>
          <form
            className="flex flex-col m-2 gap-3 items-center"
            // eslint-disable-next-line @typescript-eslint/no-misused-promises
            onSubmit={handleSubmit(onSubmit)}
          >
            <p>ЗАКАЖИТЕ ЗВОНОК</p>
            <p className="mb-2">ПРЯМО СЕЙЧАС</p>

            <Input
              className={`cursor-text ${errors.name != null ? `border-red-600 ` : ``}`}
              placeholder="Ваше имя"
              {...register("name")}
            />
            <Input
              className={`cursor-text ${errors.phone != null ? `border-red-600 ` : ``}`}
              type="tel"
              placeholder="Ваш телефон"
              {...register("phone")}
            />
            <Input
              type="text"
              className={`cursor-text ${errors.city != null ? `border-red-600 ` : ``}`}
              placeholder="Ваш город"
              {...register("city")}
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
