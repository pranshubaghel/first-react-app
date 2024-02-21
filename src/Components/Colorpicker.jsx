import React, { useState } from 'react';

const Colorpicker = () => {
  const [selectedColor, setSelectedColor] = useState();

  const Colorchange = (event) => {
    setSelectedColor(event.target.value);
  }
  
  return (
    <div>
      <h2>Color picker</h2>
      <input type="color" value={selectedColor} onChange={Colorchange} />
      <p>selectedColor: {selectedColor}</p>
    </div>
  )


};
export default Colorpicker;
