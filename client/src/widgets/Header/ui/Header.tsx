import { Link } from "react-router-dom";
import { navLinks } from "@widgets/Header";
import { useTranslation } from "react-i18next";
import { BtnChangeLng } from "@/feature/btnChangeLng";
import { logo } from "@shared/assets";
import { btnChange } from "@widgets/Header/model/constants.ts";
import classNames from "classnames";
import { useLocalStorageState } from "@widgets/Header/lib/useCurrentBtnSession.ts";
export const Header = () => {
  const { t } = useTranslation();
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
      <nav className="max-w-[1170px] my-0 mx-auto flex justify-between items-center py-7">
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
        <div className="space-medium-18 flex flex-row gap-6">
          {navLinks.map(({ id, name, path }) => (
            <Link
              className="underline-effect"
              to={path}
              key={id}
            >
              {name}
            </Link>
          ))}
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
                    "text-btn",
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
      </nav>
    </header>
  );
};
