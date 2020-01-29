import React from 'react';

function Spinner() {
  return (
    <div className="d-flex justify-content-center w-100">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner