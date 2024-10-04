<?php

namespace Fabian\Test;

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