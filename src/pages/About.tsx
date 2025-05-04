import React from "react";
import { useTranslation } from "react-i18next";
import SocialLinks from "../components/SocialLinks";

const pageContainerStyle = { padding: "0 32px 32px 32px" };

const About: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div style={pageContainerStyle}>
      <SocialLinks />
      <h1>{t("pages.about.title")}</h1>
      <p>{t("pages.about.description")}</p>
    </div>
  );
};

export default About;
