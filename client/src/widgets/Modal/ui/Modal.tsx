import CallModal from "@/feature/callModal/ui/CallModal";
import { type ModalProps } from "../modal/types";

import { removeOverflowHiddenFromBody } from "@/shared/lib/bodyOverflowHidden";
import { Input, Button } from "@/shared/ui";
import {
  telephoneModal,
  whatsappModal,
  telegramModal,
} from "@/shared/assets";

export const Modal = ({
  active,
  setActive,
  ...props
}: ModalProps) => {
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
      <form
        className="flex flex-col m-2 gap-3 items-center"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <p>ЗАКАЖИТЕ ЗВОНОК</p>
        <p>ПРЯМО СЕЙЧАС</p>
        <Input placeholder="Ваше имя" />
        <Input
          type="tel"
          placeholder="Ваш телефон"
        />
        <Button className="mt-2 w-full">
          Отправить
        </Button>
      </form>
      <div className="flex justify-around mt-6">
        <img
          width={40}
          src={telephoneModal}
          alt=""
        />
        <img
          width={40}
          src={whatsappModal}
          alt=""
        />
        <img
          width={40}
          src={telegramModal}
          alt=""
        />
      </div>
    </CallModal>
  );
};
