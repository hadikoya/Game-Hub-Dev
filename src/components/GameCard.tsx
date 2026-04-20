import React from "react";
import { Game } from "../hooks/useGame";
import { Card, CardBody, Heading, Text } from "@chakra-ui/react";
import { Platform } from "./../hooks/useGame";
import PlatformIconList from "./PlatformIconList";

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
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </CardBody>
      </Card>
    </div>
  );
}

export default GameCard;
