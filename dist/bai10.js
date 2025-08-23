"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Account = void 0;
class Account {
    constructor(name, cccd, des) {
        this.name = name;
        this.cccd = cccd;
        this.des = des;
    }
    verify(key) {
        return this.cccd === key;
    }
}
exports.Account = Account;
