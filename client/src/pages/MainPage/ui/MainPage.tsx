import { Link } from "react-router-dom";
import { useState } from "react";

import {
  Button,
  Input,
  Loading,
} from "@shared/ui";
import { addOverflowHiddenToBody } from "@/shared/lib/bodyOverflowHidden";
import { Modal } from "@/widgets/Modal/ui/Modal";

const MainPage = () => {
  const [value, setValue] = useState("");
  const [active, setActive] = useState(false);

  const handleOpen = () => {
    setActive(true);
    addOverflowHiddenToBody();
  };

  return (
    <div>
      <Link className="text-2xl" to="/about">
        Привет
      </Link>
      <br />
      <br />
      <br />
      <Button className="space-medium-18">
        Заказать звонок
      </Button>
      <br />
      <br />
      <br />
      <Button
        onClick={handleOpen}
        className="space-medium-14"
      >
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
      <Modal
        active={active}
        setActive={setActive}
      />
      <Loading />
    </div>
  );
};

export default MainPage;
