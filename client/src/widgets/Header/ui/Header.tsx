import { Link } from "react-router-dom";
import { navLinks } from "@widgets/Header";
import { useTranslation } from "react-i18next";
import { BtnChangeLng } from "@/feature/btnChangeLng";
import {
  logo,
  burger,
  cross,
} from "@shared/assets";
import { btnChange } from "@widgets/Header/model/constants.ts";
import classNames from "classnames";
import { useLocalStorageState } from "@widgets/Header/lib/useCurrentBtnSession.ts";
import { useState } from "react";
export const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] =
    useState<boolean>(false);
  const currentBtn = (id: number) => {
    const style =
      id !== 2
        ? "border-r-2 border-dashed border-white pr-2"
        : "border-none";
    const style2 = id === 1 && "-ml-2";
    const style3 = id === 2 && "-ml-2";

    return `${style} + ${style2} + ${style3}`;
  };

  const [selectedBtn, setSelectedBtn] =
    useLocalStorageState("selectedBtn", 0);

  const handleBtnClick = (id: number) => {
    setSelectedBtn(id);
  };

  return (
    <header>
      <nav className="relative max-w-[1170px] w-full my-0 mx-auto flex justify-between items-center py-7">
        <Link
          className="space-bold-font text-3xl"
          to="/"
        >
          <img
            className="w-80 h-20"
            src={logo}
            alt=""
          />
        </Link>
        <div
          className={`lg:hidden fixed z-10 ${isOpen ? "fixed" : "absolute"} top-10 right-5`}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img
            className="w-8 h-8"
            src={isOpen ? cross : burger}
            alt=""
          />
        </div>
        <div
          className={`rounded-b-lg border-solid border-b-2 py-12 border-sky-100 transition-all ease-in-out fixed lg:static lg:border-none left-0 p-4 flex flex-col items-center space-medium-18 bg-[#121d50] ${isOpen ? "top-0" : "top-[-420px]"} h-[33vh] w-full gap-6 lg:flex-row lg:h-auto lg:w-auto`}
        >
          {navLinks.map(({ id, name, path }) => (
            <Link
              className="underline-effect"
              to={path}
              key={id}
            >
              {name}
            </Link>
          ))}
          <div className="flex gap-6">
            {btnChange.map(({ id, lang }) => (
              <div
                key={id}
                onClick={() => {
                  handleBtnClick(id);
                }}
              >
                <BtnChangeLng
                  className={classNames(
                    currentBtn(id),
                    selectedBtn === id &&
                      "text-btn ",
                  )}
                  currentLng={lang}
                >
                  {t(
                    `${lang.charAt(0).toUpperCase() + lang.slice(1)}`,
                  )}
                </BtnChangeLng>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
