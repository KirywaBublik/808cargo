interface slideTypes {
  counter: string;
  text: string;
}
export const Slides = ({
  counter,
  text,
}: slideTypes) => {
  return (
    <div className="text-white bg-bg rounded-xl space-bold-font text-2xl w-[450px] h-56">
      <div className="flex justify-center items-center my-24 gap-3">
        <p className="border-r-2 border-dashed border-white pr-3">
          {counter}
        </p>
        <p>{text}</p>
      </div>
    </div>
  );
};
