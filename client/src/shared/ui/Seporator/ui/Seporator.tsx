import { logo } from "@/shared/assets";
export const Seporator = () => {
  return (
    <div className="bg-seporator  w-full">
      <div className="max-w-[1170px] mx-auto py-[101px] flex justify-between">
        {[1, 2, 3, 4, 5].map((elem, index) => (
          <img
            key={index}
            className="max-w-[200px]"
            src={logo}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};
