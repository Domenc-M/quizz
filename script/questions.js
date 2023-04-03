let mainList;

// Risus questions

let risusQ1 = new question("What is Risus ?", ["A ttrpg system", "A pompous latin word", "A thing with stick figures", "All of the above"], 4);
let risusQ2 = new question("What supplement do you need to play Risus correctly ?", ["The Risus companion", "None", "The Risus guide to the universe", "This very specific supplement about shoe size"], 2);
let risusQ3 = new question("How often should you think happy thoughts about Risus ?", ["Once a day", "Once a week", "Once a month", "All the time"], 3);

let RisusQList = new questionList('Risus', [risusQ1, risusQ2, risusQ3]);

// Smash questions

let SmashQ1 = new question("What is 2+2 ?", ["2", "4", "42", "69"], 2);
let SmashQ2 = new question("What is 3+3 ?", ["6", "9", "8", "3"], 1);
let SmashQ3 = new question("What is 5+5 ?", ["55", "25", "10", "la réponse D"], 3);

let SmashQList = new questionList('Math', [q1, q2, q3]);

// Touhou questions

let TouhouQ1 = new question("What is 2+2 ?", ["2", "4", "42", "69"], 2);
let TouhouQ2 = new question("What is 3+3 ?", ["6", "9", "8", "3"], 1);
let TouhouQ3 = new question("What is 5+5 ?", ["55", "25", "10", "la réponse D"], 3);

let TouhouQList = new questionList('Math', [q1, q2, q3]);

// TTRPG questions

let ttrpgQ1 = new question("What is 2+2 ?", ["2", "4", "42", "69"], 2);
let ttrpgQ2 = new question("What is 3+3 ?", ["6", "9", "8", "3"], 1);
let ttrpgQ3 = new question("What is 5+5 ?", ["55", "25", "10", "la réponse D"], 3);

let ttrpgQList = new questionList('Math', [q1, q2, q3]);

mainList = [RisusQlist];