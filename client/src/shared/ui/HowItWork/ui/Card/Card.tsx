export interface Card {
  title: string;
  text: string;
  image: string;
  alt: string;
  step: string;
}
export const CardItem = ({
  title,
  text,
  image,
  step,
  alt,
}: Card) => {
  return (
    <div className="flex flex-col items-center max-w-[287px] gap-[32px]">
      <div className="flex flex-col items-center gap-[12px]">
        <img src={step} alt="" />
        <img width={132} src={image} alt={alt} />
      </div>
      <div className="flex flex-col items-center gap-[16px]">
        <span className="text-2xl font-bold uppercase">
          {title}
        </span>
        <p className="font-normal text-center text-borderInput  ">
          {text}
        </p>
      </div>
    </div>
  );
};
