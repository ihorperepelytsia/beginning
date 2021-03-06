import React from "react";
import PropTypes from "prop-types";
import styles from "./Statistics.module.css";

const Statistics = ({ stats, title }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.titleText}>Upload stats</h2>}
    <ul className={styles.statList}>
      {stats.map((e) => (
        <li key={e.id} className={styles.item}>
          <span className={styles.label}>{e.label}</span>
          <span className={styles.percentage}>{e.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
export default Statistics;
