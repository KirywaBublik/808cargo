import { Input, Button } from "@/shared/ui";
import {
  type LoginFormSchema,
  loginFormSchema,
} from "@/widgets/Modal/modal/modalSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSubscribeMailing } from "../api";

export const SubscribeForm = () => {
  const mutate = useSubscribeMailing();

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
      className="flex flex-col m-2 gap-3 items-center"
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onSubmit={handleSubmit(onSubmit)}
    >
      <p>ЗАКАЖИТЕ ЗВОНОК</p>
      <p className="mb-2">ПРЯМО СЕЙЧАС</p>

      <Input
        className={`cursor-text w-full ${errors.name != null ? `border-red-600 ` : ``}`}
        placeholder="Ваше имя"
        {...register("name")}
      />
      <Input
        className={`cursor-text w-full ${errors.phone != null ? `border-red-600 ` : ``}`}
        type="tel"
        placeholder="Ваш телефон"
        {...register("phone")}
      />
      <Input
        type="text"
        className={`cursor-text w-full ${errors.city != null ? `border-red-600 ` : ``}`}
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
  );
};
