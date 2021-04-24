import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Sliders, Image, Crop, Command, Sidebar } from 'react-feather';
import { setFilterIndex } from '../../redux/actions';

const Filter = () => {
  const filterIndex = useSelector(state => state.filterReducer.filterIndex);
  const dispatch = useDispatch();
  const [, setActivaIcon] = useState(0);

  const filterIndexHook = (value) => {
    dispatch(setFilterIndex(value));
    setActivaIcon(value);
  };

  // TODO Create a Enum or sth for fixing magic numbers
  return (
    <div className="filter">
      <ul className="filter__icons">
        <li className={`filter__icon${ filterIndex === 0 ? ' filter__icon--active' : '' }`} onClick={() => filterIndexHook(0)}>
          <Sliders />
        </li>
        <li className={`filter__icon${ filterIndex === 1 ? ' filter__icon--active' : '' }`} onClick={() => filterIndexHook(1)}>
          <Image />
        </li>
        <li className={`filter__icon${ filterIndex === 2 ? ' filter__icon--active' : '' }`} onClick={() => filterIndexHook(2)}>
          <Crop />
        </li>
        <li className={`filter__icon${ filterIndex === 3 ? ' filter__icon--active' : '' }`} onClick={() => filterIndexHook(3)}>
          <div className="filter__colorWheel"></div>
        </li>
        <li className={`filter__icon${ filterIndex === 4 ? ' filter__icon--active' : '' }`} onClick={() => filterIndexHook(4)}>
          <Command />
        </li>
        <li className={`filter__icon${ filterIndex === 5 ? ' filter__icon--active' : '' }`} onClick={() => filterIndexHook(5)}>
          <Sidebar />
        </li>
      </ul>
    </div>
  );

};

export default Filter;