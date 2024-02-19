import React, { useState } from 'react';

const ColorPicker = () => {
  const [selectedColor, setSelectedColor] = useState('#000000'); // Initial color is black

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  return (
    <div>
      <h2>Color Picker</h2>
      <input
        type="color"
        value={selectedColor}
        onChange={handleColorChange}
      />
      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: selectedColor,
          marginTop: '20px',
        }}
      ></div>
      <p>Selected Color: {selectedColor}</p>
    </div>
  );
};

export default ColorPicker;
