import {
  Button,
  Input,
  Loading,
} from "@shared/ui";
import { useState } from "react";
const MainPage = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <Button className="space-medium-18">
        Заказать звонок
      </Button>
      <br />
      <br />
      <br />
      <Button className="space-medium-14">
        Кнопка
      </Button>
      <br />
      <br />
      <br />
      <Input
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
        placeholder="Ваш город"
      />
      <br />
      <br />
      <br />
      <p className="space-medium-14">{value}</p>
      <br />
      <br />
      <br />
      <Loading />
    </div>
  );
};

export default MainPage;
