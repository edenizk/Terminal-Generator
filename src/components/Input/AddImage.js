import React, { useState } from 'react';
import { FilePlus, Trash2 } from 'react-feather';

const AddImage = (props) => {
  const { title,  event } = props;
  const [imageSrc, setImageSrc] = useState('');
  const [fileName, setFileName] = useState('');

  const handleImageChange = (file) => {
    const src = URL.createObjectURL(file.target.files[0])
    const name = file.target.files[0].name
    setImageSrc(src);
    setFileName(name);
    event(src, name);
  }

  const removeImage = () => {
    setImageSrc('');
    setFileName('');
    event('', '');
  }

  return ( 
    <div className={`addImage${imageSrc !== '' ? ' addImage--imageAdded' : ''}`}>
      <h3 className="addImage__title input-title">{title}</h3>
      <input className="addImage__input" id="file-upload" type="file" onChange={(file) => handleImageChange(file)} multiple accept="image/*"  ></input>
      <label htmlFor="file-upload" className="addImage__label">
          <FilePlus />
      </label>
      {
        imageSrc !== '' &&
          <div className="addImage__imageWrapper">
            <button className="addImage__remove" onClick={() => removeImage()} >
              <Trash2/>
            </button>
            <img className="addImage__image" src={imageSrc} alt={fileName}/>
          </div>
      }
    </div>
  );
};

export default AddImage;