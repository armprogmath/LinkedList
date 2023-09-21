import { LinkedList } from './survey.js'

import {data} from './data.js'

const list = new LinkedList(data);
 
  data.forEach(element => {
    list.append(element);
  });

  console.log("list.head", list.head)

  //console.log("size: ", list.getSize());


  //console.log(list.search("is apple red12?"))
  //list.insert(data2, 1)

  //list.print();



////////////////////// Meta Linguistic Description ////////////////////
const userAnswer = "no" // Simulated user input
let rate = 0

function checkSurvey(node) {
    if (!node.next) {
      console.log("End of survey.");
      return;
    }

if (userAnswer == node.data.answer[node.data.isCorrect]) {
    console.log("Correct answer!");
    rate += node.data.value
    //wait another user input
    checkSurvey(node.next);

} else {
    console.log("Incorrect answer, terminate!");
    
    }
}

checkSurvey(list.head)
console.log("your scores: ", rate)
