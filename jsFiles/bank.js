
export class Bank {
    constructor(name){
        this.name =name;
        this.branches = []
    }
    addBranch(branch){
        const newBranch = this.branches.find((branch) => branch.id === id);
        if (!newBranch){
            this.branches.push(newBranch);
            return true;
        }else{
            return false;
        }
    }
    addCustomer(branch){

    }
    addCustomerTransaction(branch, customerId, amount){

    }
    findBranchByName(branchName){

    }
    checkBranch(branch){

    }
    listCustomers(branch, includeTransactions){

    }
}