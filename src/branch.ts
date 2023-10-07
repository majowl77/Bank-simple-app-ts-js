
export class Branch {
    name :string;
    customers: {};
    constructor(name: string){
        this.name = name;
        this.customers = [];
    }
    getName(){
        return this.name;
    }
    getCustomers(){
        return this.customers;
    } 
    addCustomer(newcustomer :{}) : boolean{
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
            customer.addTransactions(amount);
            return true;
        }else{
            return false;
        }  
    }
}

