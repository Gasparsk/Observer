import Observe from "./classes/observer";
import Subject from "./classes/subject";

const observeOne = new Observe(1);
const observeTwo = new Observe(2);
const observeThree = new Observe(3);


const subject = new Subject();


console.log("Inscrever 1, 2 e 3")
subject.subscribe(observeOne);
subject.subscribe(observeTwo);
subject.subscribe(observeThree);
console.log("Notify all");
subject.notifyAll();
console.log("Desiscrição 2");
subject.unsubscribe(observeTwo);
console.log("Notify all de novo");
subject.notifyAll();