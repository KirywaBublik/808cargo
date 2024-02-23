import { Link } from "react-router-dom";
import {
  Button,
  Input,
  Loading,
} from "@shared/ui";
import { useState } from "react";
import {
  addOverflowHiddenToBody,
  removeOverflowHiddenFromBody,
} from "@/shared/lib/bodyOverflowHidden";
import { CallModal } from "@/feature/callModal/ui/CallModal";
const MainPage = () => {
  const [value, setValue] = useState("");
  const [active, setActive] = useState(false);
  const handleOpen = () => {
    setActive(true);
    addOverflowHiddenToBody();
  };
  const handleClose = () => {
    setActive(false);
    removeOverflowHiddenFromBody();
  };
  return (
    <div className="h-[200vh]">
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
      <CallModal
        actiive={active}
        handleClose={handleClose}
      >
        Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Unde officia aliquid
        magni obcaecati cum, sed soluta
        laudantium, consequuntur, eveniet eum in
        atque. Laborum consequuntur deserunt minus
        tenetur recusandae enim aspernatur.
      </CallModal>
      <Loading />
    </div>
  );
};

export default MainPage;
