import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { useDispatch, useSelector } from 'react-redux';
import { addCampusesAsync, selectCampuses } from '../../features/campusesSlice';
import Campus from './Campus'
import AddCampusForm from './Campus_Form';

const CampusesList = () => {

  const dispatch = useDispatch()

  const campuses = useSelector(selectCampuses)


  const [list, setList] = React.useState([])

  React.useEffect(() => {
    if (list.length < campuses.length) {
      setList(campuses);
    }
  });

  React.useEffect(() => {
    setList(campuses);
  }, []);

  let renderedCampuses = list.map((itm, idx) =>
    <div key={idx}>
      <Campus data={itm} />
    </div>
  )

  // Define a state to toggle display of add campus form
  const [showAddCampusForm, setShowAddCampusForm] = React.useState(false);

  const handleAddCampusClick = () => {
    setShowAddCampusForm(true);
  }

  const handleCancelClick = () => {
    setShowAddCampusForm(false);
  }

  const handleAddCampus = async (formData) => {
    dispatch(await addCampusesAsync(formData))
    setList([...list, formData]);
    setShowAddCampusForm(false);
  }

  // let dropdown = students.map((student) =>
  //   <option value={student.id} key={`Student${student.id}`}>{student.firstName}</option>
  // )

  return (
    <div id='allCampuses'>
      <div className='allCampuses'>
        {renderedCampuses}
      </div>
      <button onClick={handleAddCampusClick}>Add A New Campus</button>

      {/* Render the AddCampusForm component only if showAddCampusForm is true */}
      {showAddCampusForm && <AddCampusForm onAddCampus={handleAddCampus} onCancel={handleCancelClick} />}
    </div>
  )
}

export default CampusesList;
