import fetchCards from "@/lib/api";
import { Box, Typography } from "@mui/material";
import CardsLoadMore from "@/components/CardsLoadMore";

export default async function Home() {
  try {
    const data = await fetchCards();
    const cardList = data?.cards || [];
    return (
      <Box>
        <Typography
          variant="h2"
          className="text-amber-600 text-center font-bold"
        >
          Welcome to the Photos Gallery
        </Typography>
        <CardsLoadMore initialCards={cardList} />
      </Box>
    );
  } catch (error) {
    throw new Error();
  }
}
