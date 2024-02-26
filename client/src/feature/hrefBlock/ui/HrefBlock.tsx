import {
  Link,
  useLocation,
} from "react-router-dom";
import { pathes } from "../model/pathes";
type path = "contacts" | "about";
export const HrefBlock = () => {
  const location = useLocation();
  return (
    <div className="font-extralight text-xs">
      <Link to="/">{pathes.main} / </Link>
      {pathes[
        location.pathname.split("/")[1] as path
      ].toLowerCase()}
    </div>
  );
};
