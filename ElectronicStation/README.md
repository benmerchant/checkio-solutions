# Electronic Station

## Fast Train

## 02 - The Hamming Distance

The Hamming distance between two binary integers is the number of bit positions that differs.

```js
117 = 0 1 1 1 0 1 0 1
17  = 0 0 0 1 0 0 0 1
H   = 0+1+1+0+0+1+0+0 = 3
```

You are given two positive numbers (N, M) in decimal form. You should calculate the Hamming distance between these two numbers in binary form.

**Input:** Two arguments as integers.

**Output:** The Hamming distance as an integer.

**Example:**

```js
hammingDistance(117, 17) == 3
hammingDistance(1, 2) == 2
hammingDistance(16, 15) == 5
```

**How it is used:** This is a basis for Hamming code and other linear error-correcting programs. The Hamming distance is used in systematics as a measure of genetic distance. On a grid (ie: a chessboard,) the Hamming distance is the minimum number of moves it would take a rook to move from one cell to the other.

**Precondition:**
0 < n < 10^6
0 < m < 10^6

[Published Solution on CheckIO](https://js.checkio.org/mission/hamming-distance/publications/BenMerch/js-node/lot-of-cleanup-needed/)

## Counting Tiles

## 04 - Brackets

You are given an expression with numbers, brackets and operators. For this task only the brackets matter. Brackets come in three flavors: "{}" "()" or "[]". Brackets are used to determine scope or to restrict some expression. If a bracket is open, then it must be closed with a closing bracket of the same type. The scope of a bracket must not intersected by another bracket. In this task you should make a decision, whether to correct an expression or not based on the brackets. Do not worry about operators and operands.

**Input:** An expression with different of types brackets as a string (unicode).

**Output:** A verdict on the correctness of the expression in boolean (True or False).

**Example:**

```js
brackets("((5+3)*2+1)") == true
brackets("{[(3+1)+2]+}") == true
brackets("(3+{1-1)}") == false
brackets("[1+1]+(2*2)-{3/3}") == true
brackets("(({[(((1)-2)+3)-3]/3}-3)") == false
brackets("2+3") == True // <=== typo
```

**How it is used:** When you write code or complex expressions in a mathematical package, you can get a huge headache when it comes to excess or missing brackets. This concept can be useful for your own IDE.

**Precondition:**
There are only brackets ("{}" "()" or "[]"), digits or operators ("+" "-" "*" "/").
0 < len(expression) < 10^3

## Network Attack

## Broken Clock

## String Conversion

## Pearls in the Box

## Xs and Os Rereree

## Caesar Cipher (encryptor)

## Time Converter (24h to 12h)

## Super Root

## Simple Areas

## Repeating Decimals

## Determinant

## Create Intervals

## Double Substring

## Ascending List

## Rectangles Union
