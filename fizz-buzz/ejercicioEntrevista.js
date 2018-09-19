var numeroTotal = 1;

/*while (numeroTotal <= 100)
{
  if ((numeroTotal%3 == 0 ) && (numeroTotal%5) == 0)
  {
      console.log("fizz y buzz");
  }else if ((numeroTotal%5) == 0)
  {
      console.log("buzz");
  }else if ((numeroTotal%3) == 0)
  {
    console.log("fizz");
  }else
  {
    console.log(numeroTotal);
  }
  numeroTotal++;
}*/

for (var i = 1; i <= 100; i++)
{
  if (esDivisible(i, 3))
  {
    document.write("Fizz");
  }
  if (esDivisible(i, 5))
  {
    document.write("Buzz");
  }
  if (!esDivisible(i, 3) && !esDivisible(i, 5))
  {
    document.write(i);
  }
  document.write("<br/>")
}

function esDivisible(num, divisor)
{
  if (num % divisor == 0)
  {
    return true;
  }else
  {
    return false;
  }
}
