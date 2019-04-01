# Escher

### 01 - The Ship Teams
You have to divide all your crew members into 2 teams with the next rules: those who are elder than 40 y.o. or younger than 20, should be on the first ship and all the others - on the second. It will helps the young sailors gain the experience of the elder collegues. The input data will be the dictionary where keys will be the surnames of the sailors and the values will be their ages. After the crew formating, you should sort all of the sailors in the alphabetical order in the each list of surnames.

Input: Dictionary with the sailors and their ages.

Output: List of the lists with 2 teams.

[Published Solution on CheckIO](https://js.checkio.org/mission/the-ship-teams/publications/BenMerch/js-node/needs-less-objects/)

### 02 - Ground for the House
As the input data you will get the multiline string consists of '0' & '#'. where '0' means the empty piece of the ground and the '#' is the piece of your house. Your task is to count the minimal area of the rectangle ground which is enough for the building.

Input: The plan of the house.

Output: The total area of the rectangle piece of the ground.

[Published Solution on CheckIO](https://js.checkio.org/mission/ground-for-the-house/publications/BenMerch/js-node/minimum-working-solution-needs-tuning-shouldve-seen-it-before-the-refactor/)

### 03 - Compass, Map and Spyglass
Your task is to count the sum of the number of steps required to pick up all 3 items - ('C' - compass), ('M' - map), ('S' - spyglass) from your starting position. So the result will be the sum of distance from Y to C, from Y to M and from Y to S (not Y-C-M-S).
Note that you can walk in 8 directions - left, right, up, down and sideways (on the diagonal in any direction). Your starting position is 'Y'.

Input: Array with the objects placements.

Output: The length of the path.

Precondition: 3x3 <= array size <= 10x10

[Published Solution on CheckIO](https://js.checkio.org/mission/compass-map-and-spyglass/publications/BenMerch/js-node/verbose-callback-hell-but-we-could-go-deeper/)

### 04 - The Stone Wall
As input you'll get a multiline string consists of '0' and '#' - a view of a stone wall from above. The '#' will show the stone part of the wall and the '0' will show the empty part. The relative location of you and the wall is as follows: you look at the array from the bottom of it.
Your task is to find the index of the place where the wall is the narrowest (as shown at the picture below). The width of the wall is the height of the columns of the array (multiline string). If there are several such places, return the index of leftmost. Index starts from 0.
Input: Array represents the stone wall.

Output: List of the weakest spots.
Precondition: 3x3 <= array size <= 10x10
