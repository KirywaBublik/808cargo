import { Button } from "@shared/ui";
import { Modal } from "@widgets/Modal/ui/Modal.tsx";
import { useState } from "react";
import { addOverflowHiddenToBody } from "@shared/lib/bodyOverflowHidden.ts";
import { navLinks } from "@widgets/Header";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [active, setActive] = useState(false);
  const handleOpen = () => {
    setActive(true);
    addOverflowHiddenToBody();
  };
  return (
    <footer className="mb-5">
      <div className="flex justify-between items-center pb-10 border-dashed border-b-2 border-white">
        <div className="space-bold-font text-3xl">
          808CARGO
          <p className="pt-5 space-medium-14 max-w-96">
            В 808CARGO мы верим в предоставление
            нашим клиентам персонализированных и
            эффективных логистических решений,
            отвечающих их уникальным потребностям.
          </p>
        </div>
        <div className="space-bold-font text-3xl">
          Навигация
          <br />
          <div className="pt-5 inline-flex flex-col gap-2">
            {navLinks.map(
              ({ id, name, path }) => (
                <Link
                  key={id}
                  className="space-medium-14"
                  to={path}
                >
                  {name}
                </Link>
              ),
            )}
          </div>
        </div>
        <div>
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
    </footer>
  );
};
