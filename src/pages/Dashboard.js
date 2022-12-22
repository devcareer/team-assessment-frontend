import classes from './Dashboard.module.css';
import nextId from 'react-id-generator';
import Timetable from '../components/Home/Timetable';

const SUMMARY = [
    { id: nextId(), num: 3, des: 'Assessments' },
    { id: nextId(), num: 0, des: 'Points' },
    { id: nextId(), num: 0, des: 'Completed' },
  ]

const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      <p className={classes['header-main']}>Dashboard</p>
      <div className={classes.intro}>
        <p className={classes.text}>
          Welcome back, <span>Nmasinachi</span>
        </p>
        <p className={classes.text}>Track: UX/UI Design</p>
      </div>
      <div className={classes.display}>
        {SUMMARY.map(list => (
          <div className={classes.summary} key={list.id}>
            <p className={classes.num}>{list.num}</p>
            <p className={classes.description}>{list.des}</p>
          </div>
        ))}
      </div>
      <p className={classes['header-sub']}>Assessments</p>
      <Timetable />
    </div>
  );
};

export default Dashboard;
