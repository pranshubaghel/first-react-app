const Info = () => {
    const toggleMode = () => {
      var root = document.getElementById("test");
      var currentColor = window.getComputedStyle(root).backgroundColor;
  
      if (currentColor === 'rgb(0, 0, 0)' || currentColor === 'black') {
        root.style.backgroundColor = "white";
      } else {
        root.style.backgroundColor = "black";
      }
    };
  
    return (
      <>
        <button  className="toggle-button" onClick={toggleMode}>
          CHange Mode
        </button>
      </>
    );
  };
  
  export default Info;