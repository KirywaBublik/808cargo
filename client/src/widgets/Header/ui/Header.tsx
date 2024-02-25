import { Link } from "react-router-dom";
import { navLinks } from "@widgets/Header";

export const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center py-7">
        <Link
          className="space-bold-font text-3xl"
          to="/"
        >
          808CARGO
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
        </div>
      </nav>
    </header>
  );
};
