import IObserver from "../interfaces/iobserver";

export default class Observe implements IObserver{
    constructor(public readonly id: number){}
    update(): void{
        console.log(`Observer ${this.id} updated`);
    }
}