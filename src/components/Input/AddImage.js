import React, { useState } from 'react';
import { FilePlus, Trash2, HelpCircle } from 'react-feather';

const AddImage = (props) => {
  const { title, link, required, event, imageSrc } = props;
  const [fileName, setFileName] = useState('');
  
  const handleImageChange = (file) => {
    const src = URL.createObjectURL(file.target.files[0])
    const name = file.target.files[0].name
    setFileName(name);
    event(src, name);
  }

  const removeImage = () => {
    setFileName('');
    event('', '');
  }

  return ( 
    <div className={`addImage${imageSrc !== '' ? ' addImage--imageAdded' : ''}`}>
      <div className="addImage__titleWrapper">
        <h2 className="addImage__title input-title">{title}<span className="input__required">{required && '*'}</span></h2>
        {
          link && link !== '' &&
            <a className="input__help help-link" href={link} target="_blank" rel="noopener noreferrer"><HelpCircle/></a>
        }      
      </div>
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