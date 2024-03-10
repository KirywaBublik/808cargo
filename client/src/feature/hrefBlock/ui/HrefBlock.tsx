import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export const HrefBlock = ({
  pathes,
}: {
  pathes: string[];
}) => {
  const { t } = useTranslation("href");
  return (
    <div className="font-extralight text-xs pt-7">
      <Link to="/">
        {t(pathes[0])}
        {pathes.length >= 2 && " " + "/" + " "}
      </Link>
      {t(pathes[1]).toLowerCase()}
    </div>
  );
};
