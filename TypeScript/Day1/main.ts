class Account {
    constructor(public Acc_no: number = 1111111, public Balance: number = 0) { }
    debitAmount() {
        return `this is debit amount`;
    }
    creditAmount() {
        return `this is credit amount`;
    }
    getBalance(): number {
        return this, this.Balance
    }
}

interface IAccount {
    Date_of_opening: string;
    addCustomer();
    removeCustomer();
}

class Saving_Account extends Account implements IAccount {
    Min_Balance: number;
    Date_of_opening;
    addCustomer() {
        return `Add customer`;
    }
    removeCustomer() {
        return `Remove customer`;
    }
}

class Current_Account extends Account implements IAccount {
    Interest_rate: number;
    Date_of_opening;
    addCustomer() {
        return `Add customer`;
    }
    removeCustomer() {
        return `Remove customer`;
    }
}