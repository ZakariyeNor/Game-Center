# Testing HTML, CSS and JavaScript


## Testing HTML

- When testing HTML in HTML validator I got three errors, and all of them are in the main
section.
- Error: The main element must
not appear as a
descendant of the section
element.
From line 24, column 9; to line
24, column 24
>↩ <main id="quiz">↩↩
- Error: Duplicate ID
ans14.
From line 220, column 9; to line
220, column 39
>↩ <div class="answer"
id="ans14">↩
- Warning: The first
occurrence of ID ans14
was here.
From line 51, column 13; to line
51, column 43
<div class="answer"
id="ans14">↩

### The solution of the three errors

1. The error was that I used main in the section as a descendant, and I changed to
article.
2. The second error was that I duplicated the answer IDs in question 2 and I solved it.
3. The third error was because of the second error and now IDs are changed.

- Now there are no errors and no warnings in HTML.

 
## Testing CSS

- When I tested CSS in validator there was just one error, and it was the google fonts import
and I don’t know how I can fix this problem.


## Testing JavaScript

- Testing of JavaScripot in Jshinst there are 28 warnings.
28 warnings. 

5 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
6 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
7 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
10 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
11 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
12 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
19 Missing semicolon.
20 Missing semicolon.
28 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
32 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
33 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
33 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
34 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
40 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
42 Missing semicolon.
47 Missing semicolon.
64 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
67 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
76 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
83 Missing semicolon.
92 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
93 'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
98 'template literal syntax' is only available in ES6 (use 'esversion: 6').
100 'template literal syntax' is only available in ES6 (use 'esversion: 6').
102 'template literal syntax' is only available in ES6 (use 'esversion: 6').
120 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').
122 'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
123 'arrow function syntax (=>)' is only available in ES6 (use 'esversion: 6').

I solved these warnings just to write the esverion 6 in the script as the
error text says and I did and there is no more error unless one the the Jshint
says it is unrecoverable syntax error.

- Unrecoverable syntax error(message) = The Functionnality Of the page. 

## Header

- In the header there is just the page name a which also is the logo. It says the
name and wherever the user is on the page if he/she clicks on the Quiz Game
it takes the user to the front page.

## Landing Page

- In this part of the page, it is just a button and when user clicks on it, the quiz starts.

## Quiz area

- The quiz area contains questions, answer buttons, next button and restart
button.
- Questions and answers are static, and the user can start from the start till the
last question, and it will be same sequence even if the user tries again. 
- When the user hover over the answer buttons, they will have a black background
color and if the user chooses the right one it will be green, otherwise it will be
red. And the user will have one chance to choose for each question. When the
user chooses one of the answers in the last question it alerts automatically
and gives an alert message, and it depends on the answers that the user
chooses. When the user clicks on the next button it shows the next question
and answers. And when the clicks the restart button, the quiz ends, and the
event listener happens where the user will be taken to the landing page.

## Footer

- In the footer there is the logo and the social media icons, and the user can
hover over the icons and if the user clicks the social media icons it opens in a
new tab. The Logo in the footer has no functionality, it is just a text.