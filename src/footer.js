import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

function footer() {
  return (
    <MDBFooter className='text-center text-lg-left'>
      {/* bgColor='light' */}
      <div className='text-center p-3'>
      {/* style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} */}
        <p className='title-footer'>
          &copy; {new Date().getFullYear()} Copyright:{' '} Maria Claudia Wandersee
        </p>
      </div>
    </MDBFooter>
  );
}

export default footer;