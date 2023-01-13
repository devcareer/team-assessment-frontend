import classes from './Pagination.module.css';

const Pagination = props => {
  const pages = [...Array(props.numOfPages + 1).keys()].slice(1);

  return (
    <div className={classes.pagination}>
      <p>
        {pages.map(page => (
          <span
            className={classes[props.curPage === page ? 'active' : '']}
            key={page}
            onClick={() => props.setCurPage(page)}
          >
            {page}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Pagination;
