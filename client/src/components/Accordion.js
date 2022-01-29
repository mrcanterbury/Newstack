import React, { useState } from 'react';

const Accordion = ({ title, content }) => { 
const [isActive, setIsActive] = useState(false);

return (
    <div className="doc-nav-header">
      <div className="doc-accordion" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
      </div>
      {isActive && <div className="doc-dropdown">{content}</div>}
    </div>
  );
};

export default Accordion;
