export class Branch {
    constructor(name){
        this.name = name;
        this.customers = [];
    }
    getName(){
        return this.name;
    }
    getCustomers(){
        return this.customers;
    } 
    addCustomer(newcustomer){
        const newCustomer = this.customers.find((customer) => customer.id === newcustomer.id);
        if (!newCustomer){
            this.customers.push(newcustomer);
            return true;
        }else{
            return false;
        }
    }
    addCustomerTransaction(customerId, amount){
        const customer = this.customers.find((customer) => customer.id === customerId);
        if(customer){
            customer.transactions.push(amount);
            return true;
        }else{
            return false;
        }  
    }
}
