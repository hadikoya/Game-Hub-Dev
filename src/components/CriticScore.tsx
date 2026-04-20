import { Badge } from "@chakra-ui/react";

interface CriticScoreProps {
  score: number;
}

const CriticScore = ({ score }: CriticScoreProps) => {
  return (
    <div>
      <Badge
        fontSize={"14px"}
        borderRadius="4px"
        paddingX={2}
        colorScheme={score > 75 ? "green" : score > 50 ? "yellow" : "red"}
      >
        {score}
      </Badge>
    </div>
  );
};

export default CriticScore;
