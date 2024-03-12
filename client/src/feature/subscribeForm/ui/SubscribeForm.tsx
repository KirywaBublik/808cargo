import { useForm } from "react-hook-form";
import { Button, Input } from "@shared/ui";
import { useTranslation } from "react-i18next";
import { inputs } from "@/feature/subscribeForm/model/constants.ts";
import { onFormSubmit } from "@/shared/api/api";
export interface LoginFields {
  name: string;
  surname?: string;
  city: string;
  products: string;
  phone: number;
}

export const SubscribeForm = () => {
  const { t } = useTranslation("contacts");

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<LoginFields>();

  const onSubmit = handleSubmit(async (data) => {
    await onFormSubmit(data, reset);
  });

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col items-center gap-2"
    >
      {inputs.map(
        ({ name, placeholder, required, id }) => (
          <div className="text-center" key={id}>
            <Input
              inputProps={{
                placeholder: t(`${placeholder}`),
                type: "text",
                //@ts-ignore
                ...register(name, {
                  required: {
                    value: required,
                    message: "обязательное поле",
                  },
                  maxLength: {
                    value: 25,
                    message:
                      "максимальная длина - 18",
                  },
                }),
              }}
            />
            {/* @ts-expect-error */}
            {errors[name] != null && (
              <p className="text-red-500">
                {/* @ts-expect-error */}
                {errors[name].message}
              </p>
            )}
          </div>
        ),
      )}
      <Input
        inputProps={{
          placeholder: t("Ваш телефон"),
          type: "number",
          ...register("phone", {
            required: {
              value: true,
              message: "обязательное поле",
            },
            minLength: {
              value: 10,
              message: "минимальная длина - 10",
            },
            maxLength: {
              value: 18,
              message: "максимальная длина - 18",
            },
          }),
        }}
      />
      {errors.phone != null && (
        <p className="text-red-500">
          {errors.phone.message}
        </p>
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
