import React from "react";
import { useTranslation } from "react-i18next";
import SocialLinks from "../components/SocialLinks";

const pageContainerStyle = { padding: "0 32px 32px 32px" };

const Games: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div style={pageContainerStyle}>
      <SocialLinks />
      <h1>{t("pages.games.title")}</h1>
      <p>{t("pages.games.description")}</p>
    </div>
  );
};

export default Games;
