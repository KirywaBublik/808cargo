import { Button } from "@shared/ui";
import { Modal } from "@widgets/Modal/ui/Modal.tsx";
import { useState } from "react";
import { addOverflowHiddenToBody } from "@shared/lib/bodyOverflowHidden.ts";
import { navLinks } from "@widgets/Header";
import {
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { logo } from "@shared/assets";
import { scrollTo } from "@shared/lib";
import { useTranslation } from "react-i18next";
import "@shared/assets/styles/adaptive.css";

export const Footer = () => {
  const { t } = useTranslation("header");

  const [active, setActive] = useState(false);

  const navigate = useNavigate();

  const location = useLocation();

  const handleOpen = () => {
    setActive(true);
    addOverflowHiddenToBody();
  };

  return (
    <footer className="py-5 bg-white text-testBg header">
      <div className="max-w-[1170px] my-0 mx-auto flex flex-col px-3 gap-9 md:px-0 md:gap-0 md:flex-row md:justify-between md:items-center pb-10 border-dashed border-b-2 border-testBg headerMin">
        <div className="space-bold-font text-lg">
          {t("Навигация")}
          <br />
          <div className="pt-5 inline-flex flex-col gap-2">
            {navLinks.map(
              ({ id, name, path }) => (
                <Link
                  onClick={
                    id === 0
                      ? scrollTo
                      : undefined
                  }
                  key={id}
                  className="space-medium-14"
                  to={path}
                >
                  {t(`${name}`)}
                </Link>
              ),
            )}
          </div>
        </div>
        <div className="space-bold-font text-lg ml-20 headerImg">
          <img
            onClick={
              location.pathname === "/"
                ? scrollTo
                : () => {
                    navigate("/");
                  }
            }
            className="w-64 h-20 cursor-pointer my-0 mx-auto"
            src={logo}
            alt=""
          />
        </div>
        <div>
          <Button
            onClick={handleOpen}
            className="space-medium-14 text-white"
          >
            {t("Заказать звонок")}
          </Button>
          <Modal
            active={active}
            setActive={setActive}
          />
        </div>
      </div>
    </footer>
  );
};
