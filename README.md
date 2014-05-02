CodeTest
========

##Test of small conceptual bet app



The calculator displays three selections (the prices or odds) for a football game.



- For the purposes of this test the data can be hard coded with the following values:

Selection Name Id Fractional Value Decimal Value

**Norwich City to Win 1 15/2 7.5 **

**Draw 2 9/2 4.5 **

**Liverpool to Win 3 4/11 0.36 **



- Clicking on each selection will change the wins amount, as well as changing the stake 

will also update the wins amount. The formula to use for calculating the wins amount is:

 (decimal value * stake) + stake 
 


- You can only choose one selection at a time.

- When the users hit the bet now button this posts a get request with the stake and selection populated in the url: 

 http://www.example-url.com/?stake=20&selectionId=3


##License

(The MIT License)

Copyright (c) 2014

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
