# Calculator
This is a repository for the Calculator assignment from The Odin Project Web Dev 101.
# Using the Calculator
You can use **either** keyboard input, retrieving values with **enter** key and deleting with backspace, or using the button interface. You **cannot** mix both; it may cause unexpected results. 
# In-order Expression Evaluation implementation
This ended up a little more complex than I was expecting. My first thought was to implement a [Binary Expression Tree](https://en.wikipedia.org/wiki/Binary_expression_tree); but since the user inputs in-order expressions, it proved easier to use the [Shunting-Yard Algorithm](https://en.wikipedia.org/wiki/Shunting-yard_algorithm). I based my implementation off of [this](https://www.cis.upenn.edu/~matuszek/cit594-2002/Assignments/5-expressions.html) document.
I should note that, as I found it myself after starting the implementation, you can simply use the built-in eval() method to evaluate mathematical expressions. There is no need to implement it yourself, but I found it interesting anyway (and I had already spent a good amount of time to waste it all).
# Parsing the string
Using split(), I wasn't able to parse numbers with two or more digits together. There is definitely some way to do it using regex, but I ended up just creating a function to parse it for me. What it does is split the string in individual characters, and then loop through the resulting array adding numbers in a single string; when it finds an operator, adds the number and the operator to another array.