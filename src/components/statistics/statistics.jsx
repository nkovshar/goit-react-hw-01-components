import StatisticsModule from './statistics.module.css';

const Statistics = ({ title, data }) => {
  return (
    <div>
      <section className={StatisticsModule.statistics}>
        {title && <h2 className={StatisticsModule.title}>{title}</h2>}
        <ul className={StatisticsModule.statList}>
          {data.map(item => (
            <li className={StatisticsModule.statItem} key={item.id}>
              <span className="label">{item.label}</span>
              <span className="percentage">{item.percentage}%</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Statistics;
