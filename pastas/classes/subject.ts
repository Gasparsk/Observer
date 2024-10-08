import IObserve from "../interfaces/iobserver.ts";
import ISubject from "../interfaces/isubject.ts";

export default class Subject implements ISubject {
   private observers: IObserve[] = [];

    subscribe(observe: IObserve): void{
    this.observers.push(observe);
 }
 unsubscribe(observer: IObserve): void{
    this.observers = this.observers.filter(obs => obs !== observer)
 }
 unsubscribeAll(): void{
    this.observers = [];
 }
 notify(observe: IObserve): void{
    observe.update();
 }
 notifyAll(): void{
    this.observers.forEach(obs => this.notify(obs));
 }

}