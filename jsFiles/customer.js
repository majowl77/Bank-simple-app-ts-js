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

    }
    addTransaction(amount){
        const newAmount = amount * trn
        if (!addAmount){
            return false
        }else{
            this.transactions.push(amount);
            return true;
        }
    }
}