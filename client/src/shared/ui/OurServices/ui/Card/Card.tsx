import { type ComponentProps } from "react";
import { type Card } from "../../model/types";

export const CardItem = ({
  title,
  typography,
  img,
  alt,
  ...props
}: Card & ComponentProps<"div">) => {
  return (
    <div
      className="p-10 rounded-xl bg-white flex flex-col justify-between items-start w-[367px] h-[430px] mx-2"
      {...props}
    >
      <img width={70} src={img} alt="" />
      <p className="font-bold text-2xl">
        {title}
      </p>
      <p className="font-normal text-base text-borderInput ">
        {typography}
      </p>
    </div>
  );
};
