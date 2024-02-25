import { useState } from "react";
import {
  Button,
  InfoTextMainPage,
} from "@shared/ui";
import { addOverflowHiddenToBody } from "@/shared/lib/bodyOverflowHidden";
import { Modal } from "@/widgets/Modal/ui/Modal";

const MainPage = () => {
  const [active, setActive] = useState(false);
  const handleOpen = () => {
    setActive(true);
    addOverflowHiddenToBody();
  };

  return (
    <div>
      <InfoTextMainPage />
      <div className="text-right -mt-12">
        <Button
          onClick={handleOpen}
          className="space-medium-14"
        >
          Заказать звонок
        </Button>
        <Modal
          active={active}
          setActive={setActive}
        />
      </div>
    </div>
  );
};

export default MainPage;
