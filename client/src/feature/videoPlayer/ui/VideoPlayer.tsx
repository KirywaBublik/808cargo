import { video } from "@shared/assets";
import "@shared/assets/styles/adaptive.css";

export const VideoPlayer = () => {
  return (
    <div className="bg-blueVideo py-20">
      <div className="max-w-[1170px] my-0 mx-auto ">
        <video controls className="video">
          <source src={video} type="video/mp4" />
        </video>
      </div>
    </div>
  );
};
