CodeTest
========

Test of small conceptual bet app



The calculator displays three selections (the prices or odds) for a football game.

- For the purposes of this test the data can be hard coded with the following values:

Selection Name Id Fractional Value Decimal Value

Norwich City to Win 1 15/2 7.5

Draw 2 9/2 4.5

Liverpool to Win 3 4/11 0.36

- Clicking on each selection will change the wins amount, as well as changing the stake 

will also update the wins amount. The formula to use for calculating the wins 

amount is:

 (decimal value * stake) + stake 

- You can only choose one selection at a time.

- When the users hit the bet now button this posts a get request with the stake and 

selection populated in the url: 

o http://www.example-url.com/?stake=20&selectionId=3

