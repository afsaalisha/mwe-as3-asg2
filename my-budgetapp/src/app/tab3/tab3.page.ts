import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  showHistory: boolean = false; // Variable to track the visibility of transaction history
  newTransaction: any = {}; // Object to store new transaction data
  transactionHistory: any[] = []; // Array to store transaction history

  constructor() {}

  toggleHistory() {
    this.showHistory = !this.showHistory; // Toggle the visibility
  }

  addTransaction() {
    // Check if new transaction data is present
    if (this.newTransaction.amount && this.newTransaction.description) {
      // Add new transaction to transaction history array
      this.transactionHistory.push({
        amount: this.newTransaction.amount,
        description: this.newTransaction.description
      });
      // Clear input fields
      this.newTransaction = {};
    }
  }
}
