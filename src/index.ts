import { Branch } from "./branch.js";
import { Customer } from "./customer.js";
import { Transactions } from "./transaction.js";
import { Bank } from "./bank.js";

const branch1 = new Branch("SNB_KK");
const bank1 = new Bank("SNB");
const newCustomer1 = new Customer("majedah", "77")
const newCustomer2 = new Customer("Harry", "7")
const newCustomer3 = new Customer("nice", "55")
newCustomer1.addTransactions(200);
newCustomer2.addTransactions(4500);
bank1.addBranch(branch1);
bank1.addCustomer(branch1, newCustomer1);
bank1.addCustomer(branch1, newCustomer2);
bank1.addCustomer(branch1, newCustomer3);

newCustomer1.addTransactions(223);
newCustomer1.addTransactions(788);
console.log(newCustomer1.getTransactions());
console.log(bank1.branches);
console.log(branch1.customers);
console.log("this findbranchbyname",bank1.findBranchByName("SNB"));
console.log("here check branch ",bank1.checkBranch(branch1));
bank1.listCustomers(branch1,true);

console.log(bank1.addCustomerTransaction(branch1,newCustomer1.getId() , 745));
console.log(newCustomer1.transactions);



const arizonaBank = new Bank("Arizona")
const westBranch = new Branch("West Branch")
const sunBranch = new Branch("Sun Branch")
const customer1 = new Customer("John", "1")
const customer2 = new Customer("Anna", "2")
const customer3 = new Customer("John", "3")

arizonaBank.addBranch(westBranch);
arizonaBank.addBranch(sunBranch);
arizonaBank.addBranch(westBranch) ; 

arizonaBank.findBranchByName("bank");
arizonaBank.findBranchByName("sun");

arizonaBank.addCustomer(westBranch, customer1);
arizonaBank.addCustomer(westBranch, customer3);
arizonaBank.addCustomer(sunBranch, customer1);
arizonaBank.addCustomer(sunBranch, customer2);

arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 3000);
arizonaBank.addCustomerTransaction(westBranch, customer1.getId(), 2000);
arizonaBank.addCustomerTransaction(westBranch, customer2.getId(), 3000);

customer1.addTransactions(-1000); 
console.log(customer1.getBalance())
console.log(arizonaBank.listCustomers(westBranch, true))
console.log(arizonaBank.listCustomers(sunBranch,true))