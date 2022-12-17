import classes from './Timetable.module.css';
import nextId from 'react-id-generator';

const TIMETABLE = [
  {
    id: nextId(),
    type: 'General',
    date: '7th - 9th December',
    style: 'active',
  },
  {
    id: nextId(),
    type: 'Track Specific',
    date: 'Unavailable',
    style: 'inactive',
  },
  {
    id: nextId(),
    type: 'Interview',
    date: 'Unavailable',
    style: 'inactive',
  },
];

const Timetable = () => {
  return (
    <div className={classes.display}>
      {TIMETABLE.map(list => (
        <div className={classes.timetable} key={list.id}>
          <p className={classes.type}>{list.type}</p>
          <p className={classes.date}>{list.date}</p>
          <button className={classes[list.style]}>Attempt</button>
        </div>
      ))}
    </div>
  );
};

export default Timetable;
