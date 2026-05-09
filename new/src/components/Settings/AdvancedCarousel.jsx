import { useState } from 'react';

const AdvancedCarousel = ({ children, title, advancedContent }) => {
  const [advancedOpen, setAdvancedOpen] = useState(false);

  return (
    <>
      <h1 className="general-settings__title settings-title">{title}</h1>
      <div className="general-settings__content content">
        {children}
        {advancedContent && (
          <>
            <h1
              className="general-settings__title settings-title advanced-carousel__advanced-title"
              onClick={() => setAdvancedOpen(prev => !prev)}
            >
              Advanced
              <span className={`advanced-carousel__arrow${advancedOpen ? ' advanced-carousel__arrow--open' : ''}`}>›</span>
            </h1>
            {advancedOpen && advancedContent}
          </>
        )}
      </div>
    </>
  );
};

export default AdvancedCarousel;
