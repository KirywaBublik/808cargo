import { Button } from "@shared/ui";
import { navHeader } from "@widgets/Header";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto flex justify-between items-center">
      <div>
        <p className="space-bold-font text-bold">
          808CARGO
        </p>
        <p className="pt-6 space-medium-14">
          В 808CARGO мы верим в предоставление
          <br />
          нашим клиентам персонализированных и
          <br />
          эффективных логистических решений,
          <br />
          отвечающих их уникальным потребностям.
          <br />
        </p>
      </div>
      <div className="flex flex-col space-medium-14">
        Навигация:
        <p className="flex flex-col">
          {navHeader.map(({ name, id, path }) => (
            <Link
              className="mt-3"
              to={path}
              key={id}
            >
              {name}
            </Link>
          ))}
        </p>
      </div>
      <div>
        <Button>Заказать звонок</Button>
      </div>
    </div>
  );
};
