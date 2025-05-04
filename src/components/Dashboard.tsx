import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  DndContext,
  DragEndEvent,
  useSensor,
  useSensors,
  PointerSensor,
  useDraggable,
} from "@dnd-kit/core";
import { restrictToWindowEdges } from "@dnd-kit/modifiers";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Header from "./Header";

interface CardProps {
  id: string;
  title: string;
  content: string;
  position: { x: number; y: number };
  image: string;
  width?: number;
  height?: number;
  imageHeight?: string;
  padding?: number;
  contentSpacing?: number;
}

interface CardPosition {
  id: string;
  x: number;
  y: number;
}

const Card: React.FC<CardProps> = ({
  id,
  title,
  content,
  position,
  image,
  width = 300,
  height = 400,
  imageHeight = "70%",
  padding = 2,
  contentSpacing = 2,
}) => {
  const theme = useTheme();
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <Box
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      sx={{
        position: "absolute",
        left: position.x,
        top: position.y,
        cursor: "move",
        touchAction: "none",
        zIndex: 1,
        "&:active": {
          zIndex: 2,
        },
      }}
    >
      <Paper
        elevation={3}
        sx={{
          width: width,
          height: height,
          p: padding,
          backgroundColor: theme.palette.background.paper,
          marginBottom: 2,
          "&:hover": {
            boxShadow: theme.shadows[6],
          },
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: imageHeight,
            overflow: "hidden",
            borderRadius: 1,
            mb: contentSpacing,
          }}
        >
          <img
            src={image}
            alt={title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </Box>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body1">{content}</Typography>
      </Paper>
    </Box>
  );
};

const Dashboard: React.FC = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [lastDraggedId, setLastDraggedId] = useState<string | null>(null);

  // Define card data first
  const cardData = [
    {
      id: "1",
      title: "Illustrations",
      content: "View your latest illustration projects",
      image: "/assets/cards/2.png",
      width: 350,
      height: 450,
    },
    {
      id: "2",
      title: "Books",
      content: "Manage your book projects and publications",
      image: "/assets/cards/IMG_4613.PNG",
      width: 320,
      height: 420,
    },
    {
      id: "3",
      title: "Games",
      content: "Track your game development progress",
      image: "/assets/cards/IMG_4620.PNG",
      width: 340,
      height: 440,
    },
    {
      id: "4",
      title: "Lettering",
      content: "Explore your typography and lettering work",
      image: "/assets/cards/IMG_4622.PNG",
      width: 330,
      height: 430,
    },
    {
      id: "5",
      title: "Characters",
      content: "Browse your character designs and concepts",
      image: "/assets/cards/IMG_4640.PNG",
      width: 360,
      height: 460,
    },
    {
      id: "6",
      title: "About",
      content: "Learn more about Linray Studio and the team",
      image: "/assets/cards/6.png",
      width: 310,
      height: 410,
    },
    {
      id: "7",
      title: "Contact",
      content: "Get in touch with us for collaborations",
      image: "/assets/cards/2.png",
      width: 340,
      height: 440,
    },
    {
      id: "8",
      title: "Portfolio",
      content: "View our complete portfolio of work",
      image: "/assets/cards/IMG_4613.PNG",
      width: 350,
      height: 350,
      imageHeight: "70%",
      padding: 1,
      contentSpacing: 1,
    },
  ];

  // Initialize positions based on card data
  const [cards, setCards] = useState<CardPosition[]>(() => {
    const savedPositions = localStorage.getItem("cardPositions");
    if (savedPositions) {
      try {
        const parsed = JSON.parse(savedPositions);
        // Ensure all cards have positions
        return cardData.map((card) => {
          const savedPos = parsed.find((p: CardPosition) => p.id === card.id);
          return savedPos || { id: card.id, x: 0, y: 0 };
        });
      } catch (e) {
        console.error("Error parsing saved positions:", e);
      }
    }
    // Default positions for all cards
    return cardData.map((card, index) => ({
      id: card.id,
      x: (index % 2) * 380 + 20,
      y: Math.floor(index / 2) * 480 + 20,
    }));
  });

  useEffect(() => {
    localStorage.setItem("cardPositions", JSON.stringify(cards));
  }, [cards]);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    })
  );

  const handleDragStart = (event: any) => {
    setActiveId(event.active.id);
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event;

    if (!delta) return;

    setLastDraggedId(active.id as string);
    setActiveId(null);

    setCards((prevCards) => {
      return prevCards.map((card) => {
        if (card.id === active.id) {
          return {
            ...card,
            x: card.x + delta.x,
            y: card.y + delta.y,
          };
        }
        return card;
      });
    });
  };

  const getCardZIndex = (cardId: string) => {
    if (activeId === cardId) return 2000; // Currently dragging card is on top
    if (lastDraggedId === cardId) return 1999; // Last dragged card is second highest
    return 1000; // Default z-index for other cards
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: "background.default",
        position: "relative",
        zIndex: 1,
      }}
    >
      <Box
        ref={wrapperRef}
        sx={{
          position: "relative",
          minHeight: "100vh",
          p: 2,
          overflow: "visible",
          zIndex: 2,
        }}
      >
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Header />
        </Box>
        <DndContext
          sensors={sensors}
          onDragStart={handleDragStart}
          onDragEnd={handleDragEnd}
        >
          {cardData.map((card) => {
            const cardPosition = cards.find((c) => c.id === card.id);
            if (!cardPosition) return null;

            return (
              <Box
                key={card.id}
                sx={{
                  position: "absolute",
                  zIndex: getCardZIndex(card.id),
                }}
              >
                <Card
                  id={card.id}
                  title={card.title}
                  content={card.content}
                  position={cardPosition}
                  image={card.image}
                  width={card.width}
                  height={card.height}
                  padding={card.padding}
                  contentSpacing={card.contentSpacing}
                />
              </Box>
            );
          })}
        </DndContext>
      </Box>
    </Box>
  );
};

export default Dashboard;
