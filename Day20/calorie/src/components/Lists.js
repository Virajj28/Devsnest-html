const Lists = (props) => {
return (
    <div className='list-content'>
      <h1 className='h1'>Calories</h1>

      {listitems.length === 0 && <p class='no-items'>No Items Found</p>}
      {listitems.length > 0 && (
        <div className='lists'>
          {listitems.map((a) => (
            <SingleList
              dishes={a.dishes}
              calories={a.calories}
              onDeletee={deletehandler}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Lists;