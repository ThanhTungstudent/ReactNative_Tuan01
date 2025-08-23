export class BankAccount {
    balance: number
    constructor(balance: number){
        this.balance = balance
    }

    depposit(amoun: number): number {
        if (amoun <= 0) {
            throw new Error("amoun > 0")
        }
        this.balance += amoun
        return this.balance
    }

    withdraw( amoun: number): number {
        if(amoun <= 0) throw new Error("amoun > 0")
        if(amoun > this.balance) throw new Error("amoun < balance")
        this.balance -= amoun
        return this.balance
    }
}