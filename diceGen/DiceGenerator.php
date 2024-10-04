<?php
namespace Fabian\Test\diceGen;

class DiceGenerator
{
    private array $diceCountPerDiceArray = array();

    public function __construct(private readonly IRng $rng,
                                private readonly bool $usesExplodingSix = false)
    {
    }

    public function getDiceThrowsAsArray() : array
    {
        return $this->diceCountPerDiceArray;
    }

    public function getTotalCount(): int
    {
        $totalCount = 0;
        foreach ($this->diceCountPerDiceArray as $diceCount) {
            $totalCount += $diceCount;
        }
        return $totalCount;
    }

    public function execute(int $diceAmount): void
    {
        for ($i = 0; $i < $diceAmount; $i++) {
            if ($this->usesExplodingSix) {
                $count = $this->explodingSix();
            }
            else {
                $count = $this->rng->randomSix();
            }

            //adding diceScores to array
            $this->diceCountPerDiceArray[] = $count;
        }
    }

    public function hasHigherOrEqual(int $threshold): bool
    {
        foreach ($this->diceCountPerDiceArray as $value) {
            if ($value >= $threshold) {
                return true;
            }
        }
        return false;
    }

    private function explodingSix(): int
    {
        $count = 0;
        while ($count % 6 == 0) {
            $count += $this->rng->randomSix();
        }
        return $count;
    }
}
