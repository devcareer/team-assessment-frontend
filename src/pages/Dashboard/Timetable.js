import classes from './Timetable.module.css';
import nextId from 'react-id-generator';
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const handleClickToAssessments = type => {
    if (type === 'General') navigate('/home/assessments');
  };

  return (
    <div className={classes.display}>
      {TIMETABLE.map(list => (
        <div className={classes.timetable} key={list.id}>
          <p>{list.type}</p>
          <p>{list.date}</p>
          <button
            onClick={() => handleClickToAssessments(list.type)}
            className={classes[list.style]}
            disabled={list.style === 'inactive'}
          >
            Attempt
          </button>
        </div>
      ))}
    </div>
  );
};

export default Timetable;
