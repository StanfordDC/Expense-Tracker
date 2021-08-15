//Get all transactions
exports.getTransactions = (req, res, next) => {
    res.send('GET transactions');
}

//Add transaction
exports.addTransaction = (req, res, next) => {
    res.send('POST transaction');
}

//Delete transaction
exports.deleteTransaction = (req, res, next) => {
    res.send('DELETE transaction');
}   