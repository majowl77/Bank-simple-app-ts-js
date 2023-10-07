import { Branch } from "./branch";
import { Customer } from "./customer";

export class Bank {
    name:string;
    branches:Branch[];
    constructor(name:string){
        this.name =name;
        this.branches = []
    }
    addBranch(branch:Branch): boolean{
        const newBranch = this.branches.find((oldBranch) => oldBranch.name === branch.name);
        if (!newBranch){
            this.branches.push(branch);
            return true;
        }else{
            return false;
        }
    }
    addCustomer(branch:Branch, customer:Customer): boolean{ 
        const newBranch = this.branches.find((oldBranch) => oldBranch.name === branch.name);
        if(newBranch){
            branch.addCustomer(customer);
            return true;
        }else return false;
      
    }
    addCustomerTransaction(branch:Branch, customerId:string, amount:number):boolean{ 
        const thisBranch = this.addBranch(branch);
        if (thisBranch){
            const Branch = branch.addCustomerTransaction(customerId,amount);
            return true;
        }else return false;
    }
    findBranchByName(branchName:string): Branch[] | null{
        const newBranch = this.branches.filter((oldBranch) => oldBranch.name === branchName);
        const anotherBranch = this.branches.filter((oldBranch) => oldBranch.name.includes(branchName));
        if (newBranch && anotherBranch ){
            return newBranch && anotherBranch ;
        } else return null ;
    }
    checkBranch(branch :Branch) :boolean{
        const checkBranch = this.branches.find((oldBranch) => oldBranch.name === branch.name);
        if (checkBranch){
            return true;
        } else return false ;
    }
    listCustomers(branch:Branch, includeTransactions: boolean){
       if(this.checkBranch(branch)){ 
       const branchCustomer = branch.getCustomers();
       branchCustomer.forEach(customer => {
            console.log("Name Of Customer:",customer.name , ", Id Of Customer:", customer.id );
            if(includeTransactions){
                const customerTransctions = customer.getTransactions();
                    console.log("Transations amount:", customerTransctions);
                    customerTransctions.forEach(element => {
                        console.log("Transations amount:", element.amount ,"Transations date:" , element.date );
                    });               
            }
        
       });}else return false;
    }
}

