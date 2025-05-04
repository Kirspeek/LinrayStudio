import React from "react";
import Box from "@mui/material/Box";

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

const SocialLinks: React.FC = () => (
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
);

export default SocialLinks;
