import { Customer } from "./customer";

export class Branch {
    name :string;
    customers: Customer[];
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
    addCustomer(newcustomer: Customer) : boolean{
        const newCustomer = this.customers.find((customer) => customer.id === newcustomer.id);
        if (!newCustomer){
            this.customers.push(newcustomer);
            return true;
        }else{
            return false;
        }
    }
    addCustomerTransaction(customerId:string, amount:number): boolean{
        const customer = this.customers.find((customer) => customer.id === customerId);
        if(customer){
            customer.addTransactions(amount);
            return true;
        }else{
            return false;
        }  
    }
}

