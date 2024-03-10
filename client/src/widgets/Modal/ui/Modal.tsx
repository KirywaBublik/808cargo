import CallModal from "@/feature/callModal/ui/CallModal";
import { removeOverflowHiddenFromBody } from "@/shared/lib/bodyOverflowHidden";
import { icons } from "@widgets/Modal/model/Icons";
import { Link } from "react-router-dom";
import { SubscribeForm } from "@/feature/subscribeForm";
import { useTranslation } from "react-i18next";
import { type ModalProps } from "@widgets/Modal/model/types.ts";

export const Modal = ({
  active,
  setActive,
  ...props
}: ModalProps) => {
  const { t } = useTranslation("contacts");
  const handleClose = () => {
    setActive(false);
    removeOverflowHiddenFromBody();
  };
  return (
    <CallModal
      active={active}
      handleClose={handleClose}
      {...props}
    >
      <div className="space-bold-font text-base text-center py-5">
        <p>{t("ЗАКАЖИТЕ ЗВОНОК")}</p>
        <p className="mb-2">
          {t("ПРЯМО СЕЙЧАС")}
        </p>
      </div>
      <SubscribeForm />
      <div className="flex justify-around my-6">
        {icons.map((icon, index) => (
          <Link
            className="pt-5"
            target="_blank"
            key={index}
            to={icon.path}
          >
            <img
              src={icon.src}
              alt={icon.alt}
              width={icon.width}
            />
          </Link>
        ))}
      </div>
    </CallModal>
  );
};
