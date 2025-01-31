import React from 'react';
import PropTypes from 'prop-types';

const Info = ({ diameter, thickness1, quantity1, thickness2, quantity2, flatWasher, quantity3, bevelWasher, quantity4, id, date, length, deleteCard }) => {
  const handleDelete = () => {
    deleteCard(id);
  };

  return (
    <div className="col m6 s12">
      <div className="card">
        <div className="card-content">
          <span className="card-title" data-test="length">
            Bolts: {length}
          </span>
          <div className="card-data">
            <span data-test="diameter">Diameter : {diameter} inches</span>
            <span data-test="thickness1">Thickness of part 1 : {thickness1} inches</span>
            <span data-test="thickness2">Thickness of part 2: {thickness2} inches</span>
            <span data-test="date">Date: {date}</span>
          </div>

          <button className="delete-btn" onClick={handleDelete}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

Info.propTypes = {
  thickness1: PropTypes.string,
  quantity1: PropTypes.string,
  thickness2: PropTypes.string,
  quantity2: PropTypes.string,
  flatWasher: PropTypes.string,
  quantity3: PropTypes.string,
  bevelWasher: PropTypes.string,
  quantity4: PropTypes.string,
  diameter: PropTypes.string,
  id: PropTypes.string,
  date: PropTypes.string,
  length: PropTypes.string,
  deleteCard: PropTypes.func
};

export default Info;
