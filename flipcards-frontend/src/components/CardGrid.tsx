"use client";
import { Card } from "@/types/card";
import FlipCard from "./FlipCard";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface CardGridProps {
  cards: Card[];
}

const CardGrid = ({ cards }: CardGridProps) => {
  return (
    <Box className="flex flex-col items-center justify-start p-4 sm:p-8">
      {(!cards || cards.length === 0) && (
        <Typography
          variant="h2"
          className="font-bold text-amber-500 text-center"
        >
          No cards available.
        </Typography>
      )}

      {cards && cards.length > 0 && (
        <Box className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card) => (
            <FlipCard key={card.id} card={card} />
          ))}
        </Box>
      )}
    </Box>
  );
};

export default CardGrid;
