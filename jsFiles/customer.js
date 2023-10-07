import { Transactions } from "./transactions.js";
export class Customer {
    constructor(name, id){
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
    getBalance(){ 
    const balance = this.transactions.reduce(
            (total, transaction) => total + transaction.amount, 0 );
        if (balance > 0){   
            return balance;
        }else return false;

    }
    addTransactions(amount){
        if (amount){
            const transaction = new Transactions(amount, Date())
            this.transactions.push(transaction)
            return true;
        }else return false;
    }
}
