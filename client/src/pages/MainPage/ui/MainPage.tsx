import { useState } from "react";
import {
  AboutUsSlim,
  Button,
  InfoTextMainPage,
  Recommendations,
} from "@shared/ui";
import { addOverflowHiddenToBody } from "@/shared/lib/bodyOverflowHidden";
import { Modal } from "@/widgets/Modal/ui/Modal";
import { useTranslation } from "react-i18next";
import { VideoPlayer } from "@/feature/videoPlayer";
import { OurServices } from "@/shared/ui/OurServices";
import { Seporator } from "@/shared/ui/Seporator";
import { HowItWork } from "@/shared/ui/HowItWork";
const MainPage = () => {
  const [active, setActive] = useState(false);

  const { t } = useTranslation(
    "infoTextMainPage",
  );

  const handleOpen = () => {
    setActive(true);
    addOverflowHiddenToBody();
  };

  return (
    <div>
      <InfoTextMainPage />
      <div className="max-w-[1170px] my-0 mx-auto text-right -mt-12 mb-20">
        <Button
          onClick={handleOpen}
          className="space-medium-14"
        >
          {t("Заказать звонок")}
        </Button>
        <Modal
          active={active}
          setActive={setActive}
        />
      </div>
      <AboutUsSlim />
      <OurServices />
      <Seporator />
      <HowItWork />
      <VideoPlayer />
      <Recommendations />
    </div>
  );
};

export default MainPage;
