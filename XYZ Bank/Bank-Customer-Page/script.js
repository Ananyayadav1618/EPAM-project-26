// Initial Balance

let balance = 10000;

// Function to Add Transaction

function addTransaction() {

    // Get Transaction Type
    let type = document.getElementById("type").value;

    // Get Amount
    let amount = Number(document.getElementById("amount").value);

    // Validate Amount
    if (amount <= 0) {

        alert("Please enter a valid amount.");

        return;

    }

    // Check Balance Before Withdrawal
    if (type == "Withdraw" && amount > balance) {

        alert("Insufficient Balance!");

        return;

    }

    // Deposit
    if (type == "Deposit") {

        balance = balance + amount;

        alert("Amount Deposited Successfully.");

    }

    // Withdraw
    else {

        balance = balance - amount;

        alert("Amount Withdrawn Successfully.");

    }

    // Update Balance on Screen
    document.getElementById("balance").innerHTML = balance;

    // Get Today's Date
    let today = new Date().toLocaleDateString();

    // Create New Table Row
    let row = document.createElement("tr");

    // Add Data into Row
    row.innerHTML =
        "<td>" + today + "</td>" +
        "<td>" + type + "</td>" +
        "<td>₹" + amount + "</td>" +
        "<td>₹" + balance + "</td>";

    // Add Row into Table
    document.getElementById("historyTable").appendChild(row);

    // Clear Input Box
    document.getElementById("amount").value = "";

}