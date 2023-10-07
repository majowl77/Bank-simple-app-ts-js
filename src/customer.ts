import { Transactions } from "./transaction";

export class Customer {
    name:string;
    id : number;
    transactions :Transactions[];
    constructor(name:string, id:number){
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
    getBalance(): number | boolean{ 
    const balance: number = this.transactions.reduce(
            (total, transaction) => total + transaction.amount, 0 );
        if (balance > 0){   
            return balance;
        }else {
            return false;
        }

    }
    addTransactions(amount:number) : boolean{
        if (amount){
            const transaction = new Transactions(amount, Date())
            this.transactions.push(transaction);
            return true;
        }else return false;
    }
}
