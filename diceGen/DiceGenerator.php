<?php
namespace Fabian\Test\diceGen;

class DiceGenerator
{
    private array $diceScorePerDiceInArray = array();

    public function __construct(private readonly IRng $rng,
                                private readonly bool $usesExplodingSix = false)
    {
    }

    public function getDiceScorePerDiceAsArray() : array
    {
        return $this->diceScorePerDiceInArray;
    }

    public function getTotalScoreForAllDices(): int
    {
        $totalDiceScore = 0;
        foreach ($this->diceScorePerDiceInArray as $diceScore) {
            $totalDiceScore += $diceScore;
        }
        return $totalDiceScore;
    }

    public function execute(int $diceAmount): void
    {
        for ($i = 0; $i < $diceAmount; $i++) {
            if ($this->usesExplodingSix) {
                $diceScore = $this->explodingSix();
            }
            else {
                $diceScore = $this->rng->randomSix();
            }

            //adding diceScores to array
            $this->diceScorePerDiceInArray[] = $diceScore;
        }
    }

    public function hasHigherOrEqual(int $threshold): bool
    {
        foreach ($this->diceScorePerDiceInArray as $value) {
            if ($value >= $threshold) {
                return true;
            }
        }
        return false;
    }

    private function explodingSix(): int
    {
        $diceScore = 0;
        while ($diceScore % 6 == 0) {
            $diceScore += $this->rng->randomSix();
        }
        return $diceScore;
    }
}
