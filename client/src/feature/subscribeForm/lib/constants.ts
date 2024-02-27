interface Input {
  type: string;
  placeholder: string;
  register:
    | "firstName"
    | "lastName"
    | "patronymic"
    | "phone"
    | "city";
}
export const inputs: Input[] = [
  {
    type: "text",
    placeholder: "Имя",
    register: "firstName",
  },
  {
    type: "text",
    placeholder: "Фамилия",
    register: "lastName",
  },
  {
    type: "text",
    placeholder: "Отчество",
    register: "patronymic",
  },
  {
    type: "text",
    placeholder: "Город",
    register: "city",
  },
];
