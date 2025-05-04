import React from "react";
import { useTranslation } from "react-i18next";
import SocialLinks from "../components/SocialLinks";

const pageContainerStyle = { padding: "0 32px 32px 32px" };

const Books: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div style={pageContainerStyle}>
      <SocialLinks />
      <h1>{t("pages.books.title")}</h1>
      <p>{t("pages.books.description")}</p>
    </div>
  );
};

export default Books;
