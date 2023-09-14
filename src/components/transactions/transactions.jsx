import TransactionsModule from './transactions.module.css';

const TransactionHistory = ({ transactions }) => {
  return (
    <div className={TransactionsModule.table}>
      <table className={TransactionsModule.transactionHistory}>
        <thead className={TransactionsModule.tableHead}>
          <tr>
            <th className={TransactionsModule.head}>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr className={TransactionsModule.rowStyle} key={transaction.id}>
              <td className={TransactionsModule.head}>{transaction.type}</td>
              <td>{transaction.amount}</td> <td>{transaction.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionHistory;
