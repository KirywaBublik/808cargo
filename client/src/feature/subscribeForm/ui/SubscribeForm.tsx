import { useForm } from "react-hook-form";
import { Button, Input } from "@shared/ui";
import { useTranslation } from "react-i18next";
import axios from "axios";
import { inputs } from "@/feature/subscribeForm/model/constants.ts";

interface LoginFields {
  name: string;
  surname?: string;
  city?: string;
  products: string;
  phone: number;
}

export const SubscribeForm = () => {
  const { t } = useTranslation("contacts");

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<LoginFields>();
  const onSubmit = handleSubmit(async (data) => {
    try {
      await axios.post(
        "https://affdf12e9349600c.mokky.dev/users",
        { ...data },
      );
      reset();
      alert("Запрос отправлен успешно!");
    } catch (error) {
      alert(
        "Ошибка запроса :(, мы уже разбираемся что не так",
      );
    }
  });

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center gap-2"
    >
      {inputs.map(
        ({ name, placeholder, required }) => (
          <Input
            key={name}
            inputProps={{
              placeholder,
              type: "text",
              //@ts-ignore
              ...register(name, {
                required,
              }),
            }}
          />
        ),
      )}
      <Button
        type="submit"
        className="mt-10 w-full"
      >
        {isSubmitting
          ? "Отправка..."
          : t("Заказать звонок")}
      </Button>
    </form>
  );
};
