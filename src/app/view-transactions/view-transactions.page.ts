import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { Transaction } from '../models/transaction';
import { Router } from '@angular/router';
import { TransactionService } from '../services/transaction.service';
import { SessionService } from '../services/session.service';
import { TransactionType } from '../models/transaction-type.enum'

@Component({
  selector: 'app-view-transactions',
  templateUrl: './view-transactions.page.html',
  styleUrls: ['./view-transactions.page.scss'],
})
export class ViewTransactionsPage implements OnInit {

  user : User;
  transactions : Transaction[];

  constructor(private router: Router, 
    public transactionService: TransactionService, public sessionService: SessionService) {
    this.user = this.sessionService.getCurrentUser();
  }

  ngOnInit() {
    this.refreshTransactions();
  }

  refreshTransactions() {
    if (this.sessionService.getIsLogin()) {
      this.transactionService.retrieveAllTransactions(this.user.email).subscribe(
        response => {
          this.transactions = response;
          for(var transaction of this.transactions) {
            console.log(transaction.type + "type");
            if(transaction.type === TransactionType.EXPENSE) {
              transaction.typeStr = "EXPENSE";
            } else if(transaction.type === TransactionType.INCOME) {
              transaction.typeStr = "INCOME"
            }
          }
        },
        error => {
          console.log("**************************** ViewTransactionPage.ts: " + error);
        }
      );
    }
  }

  back() {
    this.router.navigate(["/index"])
  }
}
