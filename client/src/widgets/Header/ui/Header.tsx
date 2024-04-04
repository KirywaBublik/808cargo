import { Link } from "react-router-dom";
import { navLinks } from "@widgets/Header";
import { useTranslation } from "react-i18next";
import {
  logo,
  burger,
  cross,
} from "@shared/assets";
import { btnChange } from "@widgets/Header/model/constants.ts";
import classNames from "classnames";
import { useLocalStorageState } from "@widgets/Header/lib/useCurrentBtnSession.ts";
import { useState, useEffect } from "react";
import "@shared/assets/styles/adaptive.css";

export const Header = () => {
  const { t, i18n } = useTranslation("header");

  const toggle = (changeLanguage: string) => {
    void i18n.changeLanguage(changeLanguage);
  };

  const [isOpen, setIsOpen] = useState(false);

  const currentBtn = (id: number) => {
    const style =
      id !== 2
        ? "border-r-2 border-dashed border-testBg pr-2"
        : "border-none";
    const style2 = id === 1 && "-ml-2";
    const style3 = id === 2 && "-ml-2";

    return `${style} + ${style2} + ${style3}`;
  };

  const [selectedBtn, setSelectedBtn] =
    useLocalStorageState("selectedBtn");

  useEffect(() => {
    localStorage.getItem("i18nextLng") === "en" ||
    localStorage.getItem("i18nextLng") === "en-US"
      ? setSelectedBtn(1)
      : localStorage.getItem("i18nextLng") ===
            "ru" ||
          localStorage.getItem("i18nextLng") ===
            "ru-RU"
        ? setSelectedBtn(0)
        : setSelectedBtn(2);
  });

  return (
    <header className="bg-white header">
      <nav className="relative max-w-[1170px] w-full my-0 mx-auto flex justify-between items-center pt-7 px-3 md:px-0">
        <Link
          className="space-bold-font text-3xl"
          to="/"
        >
          <img
            className="w-60 h-15 sm:w-80 sm:h-20 imgHead"
            src={logo}
            alt=""
          />
        </Link>
        {window.innerWidth <= 320 && (
          <p className="ml-8"></p>
        )}
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
          className={`rounded-b-lg text-testBg border-solid  border-b-2 py-12 border-sky-100 transition-all ease-in-out fixed lg:static lg:border-none left-0 p-4 flex flex-col items-center space-medium-18 bg-white lg:bg-white ${isOpen ? "top-0" : "top-[-420px]"} h-auto w-full gap-6 lg:flex-row lg:h-auto lg:w-auto`}
        >
          {navLinks.map(({ id, name, path }) => (
            <Link
              className="underline-effect"
              to={path}
              onClick={() => {
                setIsOpen(false);
              }}
              key={id}
            >
              {t(`${name}`)}
            </Link>
          ))}
          <div className="flex gap-6">
            {btnChange.map(({ id, lang }) => (
              <div key={id}>
                <button
                  className={classNames(
                    currentBtn(id),
                    selectedBtn === id &&
                      "text-btn ",
                  )}
                  onClick={() => {
                    toggle(lang);
                  }}
                >
                  {t(
                    `${lang.charAt(0).toUpperCase() + lang.slice(1)}`,
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  );
};
