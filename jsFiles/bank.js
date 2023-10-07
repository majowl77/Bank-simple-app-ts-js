
export class Bank {
    constructor(name){
        this.name =name;
        this.branches = []
    }
    addBranch(branch){
        const newBranch = this.branches.find((oldBranch) => oldBranch.name === branch.name);
        if (!newBranch){
            this.branches.push(branch);
            return true;
        }else{
            return false;
        }
    }
    addCustomer(branch, customer){ 
        const newBranch = this.branches.find((oldBranch) => oldBranch.name === branch.name);
        if(newBranch){
            branch.addCustomer(customer);
            return true;
        }else return false;
      
    }
    addCustomerTransaction(branch, customerId, amount){ 
        const thisBranch = branch.addCustomerTransaction(customerId,amount);
        if (thisBranch){
            return true;
        }else return false;
    }
    findBranchByName(branchName){
        const newBranch = this.branches.filter((oldBranch) => oldBranch.name === branchName);
        const anotherBranch = this.branches.filter((oldBranch) => oldBranch.name.includes(branchName));
        if (newBranch && anotherBranch ){
            return newBranch && anotherBranch ;
        } else return null ;
    }
    checkBranch(branch){
        const checkBranch = this.branches.find((oldBranch) => oldBranch.name === branch.name);
        if (checkBranch){
            return true;
        } else return false ;
    }
    listCustomers(branch, includeTransactions){
       if(this.checkBranch(branch)){ 
       const branchCustomer = branch.getCustomers();
       branchCustomer.forEach(customer => {
            console.log("Name Of Customer:",customer.name , ", Id Of Customer:", customer.id );
            if(includeTransactions){
                const customerTransctions = customer.getTransactions();
                customerTransctions.forEach(element => {
                        console.log("Transations amount:", element.amount ,"Transations date:" , element.date );
                    });               
            }
        
       });}else return false;
    }
}
