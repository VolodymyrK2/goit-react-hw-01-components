import PropTypes from "prop-types";
import css from "./Statistics.module.css";
import getColor from "functions/getRandomHexColor";
const Statistics = ({ title, stats }) => {
    return <section className={title ? css.statistics : css.statisticsNotTitle}>
        {title && <h2 className={css.title}>{title}</h2>}
        <ul className={css.list}>
            {stats.map(({ id, label, percentage }) => (
                <li key={id} className={css.item} style={{ backgroundColor: getColor() } }>
                    <span className={css.label}>{label}</span>
                    <span className={css.percentage}>{percentage}</span>
                </li>
            ))
            }
        </ul>
    </section>
}
Statistics.propTypes = {
    title: PropTypes.string,
        stats: PropTypes.arrayOf(PropTypes.exact({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired
        }))
}
export default Statistics;