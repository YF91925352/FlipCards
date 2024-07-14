"use client";
import { Card } from "@/types/card";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface FlipCardProps {
  card: Card;
}

const FlipCard = ({ card }: FlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [flipDirection, setFlipDirection] = useState<"left" | "right">("right");

  const handleFlip = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isAnimating) return;

    const { offsetX } = event.nativeEvent;
    const cardWidth = event.currentTarget.offsetWidth;
    const isLeftClick = offsetX < cardWidth / 2;

    if (isFlipped) {
      // Currently showing the back
      setFlipDirection(isLeftClick ? "right" : "left");
    } else {
      // Currently showing the front
      setFlipDirection(isLeftClick ? "left" : "right");
    }

    setIsFlipped((prev) => !prev);
    setIsAnimating(true);
  };

  return (
    <Box onClick={handleFlip} className="perspective cursor-pointer w-64 h-64">
      <motion.div
        className="transition-transform preserve-3d w-full h-full"
        initial={false}
        animate={{
          rotateY: isFlipped ? (flipDirection === "left" ? -180 : 180) : 0,
        }}
        transition={{
          duration: 0.6,
          animationDirection: "normal",
        }}
        onAnimationComplete={() => setIsAnimating(false)}
      >
        <Box className="absolute backface-hidden w-full h-full">
          <Image
            src={`http://localhost:3001${card.image}`}
            alt={card.description}
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-custom-strong"
          />
        </Box>
        <Box className="absolute backface-hidden my-rotate-y-180 w-full h-full px-6 shadow-custom-strong rounded-lg bg-custom-cream-200 text-center text-yellow-950 flex flex-col items-center justify-center">
          <Typography>{card.description}</Typography>
        </Box>
      </motion.div>
    </Box>
  );
};

export default FlipCard;
