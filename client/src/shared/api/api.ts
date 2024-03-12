import axios from "axios";
import { BASE_URL } from ".";
import { type LoginFields } from "@/feature/subscribeForm/ui/SubscribeForm";

type ResetFunction = () => void;

export const onFormSubmit = async (
  data: LoginFields,
  reset: ResetFunction,
) => {
  try {
    await axios.post(BASE_URL, { ...data });
    reset();
    alert("Запрос отправлен успешно!");
  } catch (error) {
    alert("Ошибка запроса :(");
  }
};
