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
      className="py-12 px-10 rounded-xl bg-white flex flex-col justify-between items-start w-[367px] h-[340px] mb-5"
      {...props}
    >
      <img width={70} src={img} alt="" />
      <h2 className="font-bold text-2xl">
        {title}
      </h2>
      <p className="font-normal text-base text-borderInput ">
        {typography}
      </p>
    </div>
  );
};
