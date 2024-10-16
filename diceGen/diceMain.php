<?php
namespace Fabian\Test\diceGen;

$rng = new Rng();

$gen = new DiceGenerator($rng);

$gen -> execute(2);
$arr = $gen -> getDiceScorePerDiceAsArray();
var_dump($arr);
echo "testfhgj";