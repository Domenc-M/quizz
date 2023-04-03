let mainList;

let q1 = new question("What is 2+2 ?", ["2", "4", "42", "69"], 2);
let q2 = new question("What is 3+3 ?", ["6", "9", "8", "3"], 1);
let q3 = new question("What is 5+5 ?", ["55", "25", "10", "la réponse D"], 3);

let ql1 = new questionList('Math', [q1, q2, q3]);

mainList = [ql1];