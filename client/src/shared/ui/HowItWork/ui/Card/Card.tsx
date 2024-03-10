export interface Card {
  title?: string;
  text: string;
  image: string;
  alt: string;
  step: string;
}
export const CardItem = ({
  text,
  image,
  step,
  alt,
}: Card) => {
  return (
    <div className="flex flex-col items-center max-w-[287px] gap-[32px]">
      <div className="flex flex-col items-center gap-[12px]">
        <div className="border-2 border-solid border-grayBorder rounded-full px-4 py-2">
          {step}
        </div>
        <img width={132} src={image} alt={alt} />
      </div>
      <div className="flex flex-col items-center gap-[16px]">
        <p className="font-normal text-center text-borderInput  ">
          {text}
        </p>
      </div>
    </div>
  );
};
