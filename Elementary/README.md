# Elementary

## 01 - Say Hi

In this mission you should write a function that introduce a person with a given parameters in attributes.

Input: Two arguments. String and positive integer.

Output: String.

[Published Solution on CheckIO](https://js.checkio.org/mission/say-hi/publications/BenMerch/js-node/might-as-well-get-these-done/)

## 02 - Correct Sentence

For the input of your function, you will be given one sentence. You have to return a corrected version, that starts with a capital letter and ends with a period (dot).

Pay attention to the fact that not all of the fixes are necessary. If a sentence already ends with a period (dot), then adding another one will be a mistake.

Input: A string.

Output: A string.

Precondition: No leading and trailing spaces, text contains only spaces, a-z A-Z , and .

[Published Solution on CheckIO](https://js.checkio.org/mission/correct-sentence/publications/BenMerch/js-node/can-you-replace-with-regex-in-js/)

## 04 - Fizz Buzz

"Fizz buzz" is a word game we will use to teach the robots about division. Let's learn computers.

You should write a function that will receive a positive integer and return:
"**Fizz Buzz**" if the number is divisible by 3 and by 5;
"**Fizz**" if the number is divisible by 3;
"**Buzz**" if the number is divisible by 5;
The number as a string for other cases.
**Input**: A number as an integer.

**Output:** The answer as a string.
```
fizzBuzz(15 == "Fizz Buzz"
fizzBuzz(6)== "Fizz"
fizzBuzz(5)== "Buzz"
fizzBuzz(7)== "7"
```
**Precondition**: 0 < number ≤ 1000

[Published Solution on CheckIO](https://js.checkio.org/mission/fizz-buzz/publications/BenMerch/js-node/really-needs-optimized/)

## 05 - Digits Multiplication

You are given a positive integer. Your function should calculate the product of the digits excluding any zeroes.

For example: The number given is 123405. The result will be 1*2*3*4*5=120 (don't forget to exclude zeroes).

**Input**: A positive integer.

**Output**: The product of the digits as an integer.
```
digitsMultip(123405) == 120
digitsMultip(999) == 729
digitsMultip(1000) == 1
digitsMultip(1111) == 1
```
**How it is used**: This task can teach you how to solve a problem with simple data type conversion.

**Precondition**: 0 < number < 106

[Published Solution on CheckIO](https://js.checkio.org/mission/digits-multiplication/publications/BenMerch/js-node/first/)

## 06 - Secret Message

Ever tried to send a secret message to someone without using the postal service? You could use newspapers to tell your secret. Even if someone finds your message, it's easy to brush them off as paranoid and as a conspiracy theorist. One of the simplest ways to hide a secret message is to use capital letters. Let's find some of these secret messages.

You are given a chunk of text. Gather all capital letters in one word in the order that they appear in the text.

For example: text = "How are you? Eh, ok. Low or Lower? Ohhh.", if we collect all of the capital letters, we get the message "HELLO".

**Input**: A text as a string (unicode).

**Output**: The secret message as a string or an empty string.

**Example**:
```
findMessage("How are you? Eh, ok. Low or Lower? Ohhh.") == "HELLO"
findMessage("hello world!") == ""
```
**How it is used**: This is a simple exercise in working with strings: iterate, recognize and concatenate.

**Precondition**: 0 < len(text) ≤ 1000
all(ch in string.printable for ch in text)

[Published Solution on CheckIO](https://js.checkio.org/mission/secret-message/publications/BenMerch/js-node/i-know-it-sucks/)

## 13 - The Most Frequent

You have a sequence of strings, and you’d like to determine the most frequently occurring string in the sequence. It can be only one.

**Input**: non empty Array of strings.

**Output**: a string.

**Example**:
```
mostFrequent([
    'a', 'b', 'c', 
    'a', 'b',
    'a'
]) == 'a'
mostFrequent(['a', 'a', 'bi', 'bi', 'bi']) == 'bi'
```

[Published Solution on CheckIO](https://js.checkio.org/mission/the-most-frequent/publications/BenMerch/js-node/just-got-her-done-nothing-special/)