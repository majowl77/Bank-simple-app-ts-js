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
        if (balance > -1){   
            return balance;
        }else {
            return "Balance is under Zero"
        }

    }
    addTransaction(amount){
        // const newAmount = amount * this.transactions;
        // if (!addAmount){
        //     return false
        // }else{
        //     this.transactions.push(amount);
        //     return true;
        // }
    }
}
