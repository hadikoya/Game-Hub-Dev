import React from "react";
import { Game } from "../hooks/useGame";
import { Card, CardBody, Heading } from "@chakra-ui/react";

interface GameCardProps {
  game: Game;
}

function GameCard({ game }: GameCardProps) {
  return (
    <div>
      <Card borderRadius={10} overflow="hidden">
        <img src={game.background_image} />
        <CardBody>
          <Heading fontSize={"2xl"}>{game.name}</Heading>
        </CardBody>
      </Card>
    </div>
  );
}

export default GameCard;
