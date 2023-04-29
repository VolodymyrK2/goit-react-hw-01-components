import PropTypes from "prop-types";
import css from "./TransactionHistory.module.css"
const TransactionHistory = ({ items }) => (
  <table className={css.transactionHistory}>
  <thead className={css.tableHead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
        </thead>
        <tbody>
       {items.map(({id, type, amount, currency},index)=>(
            <tr key = {id} className={index%2===0?css.tableRow: css.tableRowOdd}>
                <td className={css.tableData}>{type}</td>
                <td className={css.tableData}>{amount}</td>
                <td className={css.tableData}>{currency}</td>
    </tr>
            ))
       }
  </tbody>
</table>  
)
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf( PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired
  }
  )
  )
}
export default TransactionHistory;