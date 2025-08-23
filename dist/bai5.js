"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankAccount = void 0;
class BankAccount {
    constructor(balance) {
        this.balance = balance;
    }
    depposit(amoun) {
        if (amoun <= 0) {
            throw new Error("amoun > 0");
        }
        this.balance += amoun;
        return this.balance;
    }
    withdraw(amoun) {
        if (amoun <= 0)
            throw new Error("amoun > 0");
        if (amoun > this.balance)
            throw new Error("amoun < balance");
        this.balance -= amoun;
        return this.balance;
    }
}
exports.BankAccount = BankAccount;
