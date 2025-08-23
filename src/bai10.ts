export class Account{
    public name: string;
    private cccd: string;
    readonly des: string
    constructor(name: string, cccd: string, des: string){
        this.name = name
        this.cccd = cccd
        this.des = des
    }
    verify(key: string): boolean {
        return this.cccd === key
    }
}