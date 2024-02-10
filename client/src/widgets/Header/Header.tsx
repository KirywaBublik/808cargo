import { burger, logo } from "../../shared/icons";
export const Header = () => {
  const headerList = [
    {
      id: 0,
      name: "главная",
      // scroll: "",
    },
    {
      id: 1,
      name: "каталог",
      // scroll?: "",
    },
    {
      id: 2,
      name: "контакты",
      // scroll?: "",
    },
  ];
  return (
    <div className="relative">
      <div className="fixed top-0 left-0 right-0 bg-dark-header text-white flex justify-between items-center p-3.5">
        <img className="cursor-pointer" src={logo} alt="logo" />
        <ul className="flex justify-center items-center">
          {headerList.map(({ id, name }) => (
            <li className="abc cursor-pointer" key={id}>
              {name}
            </li>
          ))}
        </ul>
        <button>
          <img src={burger} alt="" />
        </button>
      </div>
    </div>
  );
};
