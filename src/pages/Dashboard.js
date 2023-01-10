import classes from './Dashboard.module.css';
import nextId from 'react-id-generator';
import Timetable from '../components/Home/Timetable';

const SUMMARY = [
  { id: nextId(), num: 3, des: 'Assessments' },
  { id: nextId(), num: 0, des: 'Points' },
  { id: nextId(), num: 0, des: 'Completed' },
];

const Dashboard = () => {
  return (
    <div className={classes.dashboard}>
      <h1>Dashboard</h1>
      <div className={classes.intro}>
        <p>
          Welcome back, <span>Nmasinachi</span>
        </p>
        <p>Track: UX/UI Design</p>
      </div>
      <div className={classes.display}>
        {SUMMARY.map(list => (
          <div className={classes.summary} key={list.id}>
            <p>{list.num}</p>
            <p>{list.des}</p>
          </div>
        ))}
      </div>
      <h2>Assessments</h2>
      <Timetable />
    </div>
  );
};

export default Dashboard;
