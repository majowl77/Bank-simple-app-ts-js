import { Transactions } from "./transaction";

export class Customer {
    name:string;
    id : string;
    transactions :Transactions[];
    constructor(name:string, id:string){
        this.name = name;
        this.id = id ;
        this.transactions = [];
    }
    getName(){
        return this.name ;
    } 
    getId(){
        return this.id;
    } 

    getTransactions(){
        return this.transactions;
    } 
    getBalance(): number { 
    const balance: number = this.transactions.reduce(
            (total, transaction) => total + transaction.amount, 0 );
        if (balance > 0){   
            return balance;
        }else return 0;

    }
    addTransactions(amount:number) : boolean{
        if (amount){
            const transaction = new Transactions(amount, Date())
            this.transactions.push(transaction);
            return true;
        }else return false;
    }
}
