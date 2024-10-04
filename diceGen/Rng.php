<?php

namespace Fabian\Test\diceGen;

class Rng implements IRng
{
    /**
     * @codeCoverageIgnore
     */
    public function randomSix(): int
    {
        return rand(1, 6);
    }
}