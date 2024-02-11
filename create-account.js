function createAccount(pin, balance = 0) {
    return {
        checkBalance(inputPin){
            if(inputPin !== pin) return "Invalid PIN.";
            return `$${balance}`;
        },
        deposit(inputPin, amount){
            if(inputPin !== pin) return "Invalid PIN.";
            balance += amount;
            return `Succesfully deposited $${amount}. Current balance: $${balance}.`
        },
        withdraw(inputPin, amount) {
            if(inputPin !== pin) return "Invalid PIN.";
            if (amount > balance) return "Withdrawal amount exceeds account balance. Transaction cancelled.";
            balance -= amount;
            return `Succesfully withdrew $${amount}. Current balance: $${balance}.`;
        },
        changePin(inputPin, newPin){
            if(inputPin !== pin) return "Invalid PIN.";
            pin = newPin;
            return "PIN successfully changed!";
        }
    };
}

module.exports = { createAccount };