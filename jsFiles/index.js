import { Branch } from "./branch.js";
import { Customer } from "./customer.js";
import { Transactions } from "./transaction.js";
import { Bank } from "./bank.js";

const branch1 = new Branch("SNB_KK");
const bank1 = new Bank("SNB");
const newCustomer1 = new Customer("majedah", 777)
const newCustomer2 = new Customer("Harry", 557)
const newCustomer3 = new Customer("nice", 557)
newCustomer1.addTransaction(200);
newCustomer2.addTransaction(4500);
bank1.addBranch(branch1);
bank1.addCustomer(branch1, newCustomer1);
bank1.addCustomer(branch1, newCustomer2);
bank1.addCustomer(branch1, newCustomer3);
const tran1 = new Transactions(300,"19-09-2023");
const tran2 = new Transactions(4668,"19-09-2023");

newCustomer1.addTransaction(tran1);
newCustomer1.addTransaction(tran2);
console.log(newCustomer1.getTransactions());
console.log(bank1.branches);
console.log(branch1.customers);
console.log("this findbranchbyname",bank1.findBranchByName("SNB"));
console.log("here check branch ",bank1.checkBranch(branch1));
bank1.listCustomers(branch1,true);

console.log(bank1.addCustomerTransaction(branch1,newCustomer1.getId() , 745));
console.log(newCustomer1.transactions);