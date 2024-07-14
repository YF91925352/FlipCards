import { Card } from "../types/card";
interface CardResponse {
  cards: Card[];
}
const fetchCards = async (): Promise<CardResponse> => {
  const res = await fetch("http://localhost:3001/cards", {
    next: { revalidate: 0 },
  });

  !res.ok &&
    (() => {
      throw new Error("Failed to fetch cards");
    })();
  return res.json();
};

export default fetchCards;
