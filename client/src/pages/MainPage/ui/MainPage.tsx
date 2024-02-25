import { useState } from "react";
import {
  Button,
  InfoTextMainPage,
} from "@shared/ui";
import { addOverflowHiddenToBody } from "@/shared/lib/bodyOverflowHidden";
import { Modal } from "@/widgets/Modal/ui/Modal";
import { useTranslation } from "react-i18next";
import { BtnChangeLng } from "@/feature/btnChangeLng";
const MainPage = () => {
  const [active, setActive] = useState(false);
  const { t } = useTranslation();

  const handleOpen = () => {
    setActive(true);
    addOverflowHiddenToBody();
  };

  return (
    <div>
      <BtnChangeLng currentLng="ru">
        {t("Hello")}
      </BtnChangeLng>
      <BtnChangeLng currentLng="en">
        {t("Hello")}
      </BtnChangeLng>
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
