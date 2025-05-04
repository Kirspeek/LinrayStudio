import React from "react";
import { useTranslation } from "react-i18next";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";

const catIcon = "/assets/header/icons/cat_icon.png";
const headerMain = "/assets/header/icons/header_main.png";

const socialLinks = [
  {
    icon: "/assets/header/icons/behance.png",
    alt: "Behance",
    url: "https://www.behance.net/yakuninaalia",
  },
  {
    icon: "/assets/header/icons/pinterest.png",
    alt: "Pinterest",
    url: "https://pin.it/3BoVvUZQi",
  },
  {
    icon: "/assets/header/icons/gmail.png",
    alt: "Email",
    url: "mailto:linraystudio@gmail.com",
  },
  {
    icon: "/assets/header/icons/instagram.png",
    alt: "Instagram",
    url: "https://www.instagram.com/alina_yakinina?igsh=MWpleGt1ZzdvdHNwcw%3D%3D&utm_source=qr",
  },
  {
    icon: "/assets/header/icons/dribbble.png",
    alt: "Dribbble",
    url: "https://dribbble.com/AlinaYakunina",
  },
  {
    icon: "/assets/header/icons/upwork.png",
    alt: "Upwork",
    url: "https://www.upwork.com/freelancers/alinayakunina?mp_source=share",
  },
];

const navItems = [
  "illustrations",
  "books",
  "games",
  "lettering",
  "characters",
  "about",
];

const Header: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  return (
    <Box
      component="header"
      sx={{
        fontFamily: theme.typography.fontFamily,
      }}
    >
      {/* Social Icons */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 1,
          px: 4,
          gap: 4,
          mt: 2,
        }}
      >
        {socialLinks.map((item) => (
          <Box
            key={item.alt}
            component="a"
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              display: "inline-flex",
              alignItems: "center",
              width: 36,
              height: 36,
              transition: "transform 0.15s",
              "&:hover": { transform: "scale(1.12)" },
            }}
          >
            <Box
              component="img"
              src={item.icon}
              alt={item.alt}
              sx={{
                width: 32,
                height: 32,
                objectFit: "contain",
                ...(item.alt === "Dribbble" && { mt: "2px" }),
              }}
            />
          </Box>
        ))}
      </Box>
      {/* Navigation */}
      <Box
        sx={
          {
            // removed borderBottom and bgcolor for clean look
          }
        }
      >
        <Box
          component="nav"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 0,
            py: 2,
          }}
        >
          {navItems.map((item, idx) => (
            <React.Fragment key={item}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  fontSize: theme.typography.h2.fontSize,
                  color: theme.palette.text.secondary,
                  letterSpacing: "0.01em",
                  mx: 2,
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  transition: "color 0.2s",
                  "&:hover": { color: theme.palette.primary.main },
                }}
              >
                <Link
                  to={`/${item}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  {t(`nav.${item}`)}
                </Link>
              </Typography>
              {idx < navItems.length - 1 && (
                <Box
                  component="img"
                  src={catIcon}
                  alt="cat icon"
                  sx={{
                    mx: 2,
                    width: 24,
                    height: 24,
                    verticalAlign: "middle",
                    display: "inline-block",
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </Box>
      </Box>
      {/* Banner with overlayed logo and author */}
      <Box sx={{ width: "100%", mt: 0 }}>
        <Box
          component="img"
          src={headerMain}
          alt="Header Banner"
          sx={{ width: "100%", height: "auto", display: "block" }}
        />
      </Box>
    </Box>
  );
};

export default Header;
