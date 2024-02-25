import { Link } from "react-router-dom";
import { navHeader } from "@widgets/Header";

export const Header = () => {
  return (
    <div className="max-w-[1200px] w-full mx-auto">
      <nav className="w-full flex justify-between items-center py-7">
        <Link
          className="space-bold-font text-bold"
          to="/"
        >
          808CARGO
        </Link>
        <div className="space-medium-14 flex flex-row gap-6">
          {navHeader.map(({ id, name, path }) => (
            <Link
              className="underline-effect"
              to={path}
              key={id}
            >
              {name}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};
