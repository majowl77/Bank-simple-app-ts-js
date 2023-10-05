import { Customer } from "./customer.js";
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
    addCustomer(customer){
        const newCustomer = this.customers.find((customer) => customer.id === id);
        if (!newCustomer){
            this.customers.push(customer);
            return true;
        }else{
            return false;
        }
    }
    addCustomerTransaction(customerId, amount){

    }
}
const customer1 = new Customer("sara", 7);
const customer2 = new Customer("sara", 7);

const branch = new Branch("riyadh");
branch.addCustomer(customer1);
console.log(branch.customers);