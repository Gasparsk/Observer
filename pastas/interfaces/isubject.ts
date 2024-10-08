import IObserve from "./iobserver.ts";

export default interface ISubject {

 subscribe(observe: IObserve): void;
 unsubscribe(observe: IObserve): void;
 unsubscribeAll(): void;
 notify(observe: IObserve): void;
 notifyAll(): void;


}