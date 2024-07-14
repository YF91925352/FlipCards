"use client";

import { useState } from "react";
import { Card } from "@/types/card";
import CardGrid from "./CardGrid";
import { Box, Button } from "@mui/material";

interface CardsLoadMoreProps {
  initialCards: Card[];
}

const CardsLoadMore = ({ initialCards }: CardsLoadMoreProps) => {
  const [cardsToShow, setCardsToShow] = useState(3);

  const loadMoreCards = () => {
    setCardsToShow((prev) => prev + 3);
  };

  return (
    <Box>
      <CardGrid cards={initialCards.slice(0, cardsToShow)} />
      {cardsToShow < initialCards.length && (
        <Box className="flex justify-center">
          <Button onClick={loadMoreCards} variant="contained">
            See More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default CardsLoadMore;
