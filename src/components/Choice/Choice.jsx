import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import usa from '../assets/usa.png'
import mk from '../assets/mk.png'

const Choice = () => {

  return (
    <motion.div
        className="choice"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}>
      <div className="row p-3">
        <div className="col-12">
          <h1 className='text-center text-light'>Choose a country - Изберете држава</h1>
          <div className="d-flex justify-content-center flex-wrap">
            <div className="flag-container p-3 text-center">
              <img src={usa} alt="USA Flag" className="flag-img mb-3" />
              <Link to='/usa'>
                <button className='btn btn-success p-2 fs-4'>United States</button>
              </Link>
            </div>
            <div className="flag-container p-3 text-center">
              <img src={mk} alt="MK Flag" className="flag-img mb-3" />
              <Link to='/mk'>
                <button className='btn btn-success p-2 fs-4'>Македонија</button>
              </Link>
            </div>
          </div>
        </div>
      </div>

    </motion.div>    
  );
};

export default Choice;
