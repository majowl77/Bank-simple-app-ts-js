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
            (total, transaction) => total + transaction, 0 );
        if (balance > 0){   
            return balance;
        }else {
            return false;
        }

    }
    addTransactions(amount){
        if (amount){
            this.transactions.push(amount)
            return true;
        }else return false;
    }
}
