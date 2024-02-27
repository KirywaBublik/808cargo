import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
export const HrefBlock = ({
  pathes,
}: {
  pathes: string[];
}) => {
  const { t } = useTranslation();
  return (
    <div className="font-extralight text-xs">
      <Link to="/">{t(pathes[0])} / </Link>
      {t(pathes[1]).toLowerCase()}
    </div>
  );
};
