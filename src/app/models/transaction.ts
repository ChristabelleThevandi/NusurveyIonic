import { CreditCard } from "./credit-card";
import { Survey } from "./survey";
import { TransactionType } from "./transaction-type.enum";
import { User } from "./user";

export class Transaction {
    transactionId : number | undefined;
    amount: number | undefined;
    transaction_date: string | undefined;
    
    transactionType : TransactionType | undefined;
    survey: Survey | undefined;
    user: User | undefined;
    creditCard: CreditCard | undefined;

    constructor()
    {

    }
}


