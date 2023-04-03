let mainList;

// Risus questions

let risusQ1 = new question("What is Risus ?", ["A ttrpg system", "A pompous latin word", "A thing with stick figures", "All of the above"], 4);
let risusQ2 = new question("What supplement do you need to play Risus correctly ?", ["The Risus companion", "None", "The Risus guide to the universe", "This very specific supplement about shoe size"], 2);
let risusQ3 = new question("How often should you think happy thoughts about Risus ?", ["Once a day", "Once a week", "Once a month", "All the time"], 3);

let risusQList = new questionList('Risus', [risusQ1, risusQ2, risusQ3]);

// Smash questions

let smashQ1 = new question("What is the most hype character in this list ?", ["Zelda", "Cloud", "Lucina", "Wolf"], 1);
let smashQ2 = new question("What is Cloud\'s worst matchup ?", ["Ridley", "Donkey Kong", "Cloud ditto", "The ledge"], 4);
let smashQ3 = new question("How good is Ridley", ["Decent", "Trash", "Really good", "An absolute unit"], 1);

let smashQList = new questionList('Super Smash Bros Ultimate', [smashQ1, smashQ2, smashQ3]);

// Touhou questions

let touhouQ1 = new question("What is the first Touhou game of the windows generation ?", ["Touhou 01", "Touhou 05", "Touhou 10", "Touhou 06"], 4);
let touhouQ2 = new question("What protagonist throws needles ?", ["Marisa Kirisame", "Reimu Hakurei", "Sanae Kochiya", "Youmuu Konpaku"], 2);
let touhouQ3 = new question("Who is Rinnosuke ?", ["He is the only male character in Touhou", "He is Zun\'s self insert", "He owns the Kourindou", "All of the above"], 4);

let touhouQList = new questionList('Touhou', [touhouQ1, touhouQ2, touhouQ3]);

// Hat in Time questions

let hatQ1 = new question("What gender is the protagonist ?", ["Male", "Female", "Hat", "Kid"], 2);
let hatQ2 = new question("What kind of bird wins the Studio award ?", ["A penguin", "An orange one", "The one I like the most", ""], 3);
let hatQ3 = new question("What makes your troubles go away ?", ["A ribbon kid", "Peace and Tranquility", "My troubles never go away, peck-neck !", "The crow agency"], 2);

let hatQList = new questionList('A Hat in time', [hatQ1, hatQ2, hatQ3]);

mainList = [risusQList, touhouQList, hatQList, smashQList];