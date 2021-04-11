import { Transaction } from "./transaction";
import { User } from "./user";

export class CreditCard {
    creditCardId: number | undefined;
    name: string | undefined;
    card_number: string | undefined;
    cvv: string | undefined;
    expiry_date: Date | undefined;
    balance: number | undefined;
    
    user: User | undefined;
    transactions: Transaction[] | undefined;
    
    constructor(name?: string, card_number?: string, cvv?: string, expiry_date?: Date){
        this.name = name;
        this.card_number = card_number;
        this.cvv = cvv;
        this.expiry_date = expiry_date;
        this.balance = 0.00;
        this.transactions = [];
    }
}
