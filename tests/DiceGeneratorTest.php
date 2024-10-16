<?php
namespace Fabian\Test\tests;
use Fabian\Test\diceGen\DiceGenerator;
use Fabian\Test\diceGen\IRng;
use PHPUnit\Framework\MockObject\Exception;
use PHPUnit\Framework\TestCase;

class DiceGeneratorTest extends TestCase
{
    /**
     * @throws Exception
     */

    public function testDiceGeneratorAddingUpCounts()
    {
        $mock = $this->createMock(IRng::class);
        $mock->method('randomSix')->willReturn(1);
        $generator = new DiceGenerator($mock);
        $generator->execute(2);

        $actual = $generator->getTotalScoreForAllDices();
        $expected = 2;
        self::assertSame($expected, $actual, "Two dices equals 1 sums up to 2");
    }

    public function testDiceGeneratorExecuteZero()
    {
        $mock = $this->createMock(IRng::class);
        $generator = new DiceGenerator($mock);
        $generator->execute(0);

        $actual = $generator->getTotalScoreForAllDices();
        $expected = 0;
        self::assertSame($expected, $actual, "3 dices equals 4 + 4 + 4 = 12 counts from array");
    }


    public function testDiceGeneratorGetDiceThrows()
    {
        $mock = $this->createMock(IRng::class);
        $mock->method('randomSix')->willReturn(2);
        $generator = new DiceGenerator($mock);
        $generator->execute(2);

        $actual = $generator->getDiceScorePerDiceAsArray();
        $expected = [
            0 => 2,
            1 => 2,
        ];
        self::assertSame($expected, $actual, "2 dices equals 2 will return an Array = [0=>2,1=>2]");
    }

    public function testDiceGeneratorExplodingSix()
    {
        $mock = $this->createMock(IRng::class);
        $mock->method('randomSix')->willReturnOnConsecutiveCalls(6, 6, 2);
        $generator = new DiceGenerator($mock, true);
        $generator->execute(1);

        $actual = $generator->getTotalScoreForAllDices();
        $expected = 14;
        self::assertSame($expected, $actual, "6 + 6 + 2 dices equals 14");
    }

    public function testDiceGeneratorHighestNumberFalse()
    {
        $mock = $this->createMock(IRng::class);
        $mock->method('randomSix')->willReturn(1);
        $generator = new DiceGenerator($mock);
        $generator->execute(1);

        $actual = $generator->hasHigherOrEqual(5);
        $expected = false;
        self::assertSame($expected, $actual, "1 does not match the threshold");
    }

    public function testDiceGeneratorHighestNumberTrue()
    {
        $mock = $this->createMock(IRng::class);
        $mock->method('randomSix')->willReturn(5);
        $generator = new DiceGenerator($mock);
        $generator->execute(1);

        $actual = $generator->hasHigherOrEqual(5);
        $expected = true;
        self::assertSame($expected, $actual, "5 does match the threshold");
    }

}
