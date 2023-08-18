
import './styles.css'; // Make sure to import your CSS file
import mi from "./assets/music_icon.png";
const App = () => {
  return (

    <div className="wrapper">
      <div className="login">
        <div className="insider1 insider">
          <div className="blocks">
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
            <div className="block"></div>
          </div>
          <div className="skip">
            Skip
          </div>
        </div>
        <div className="insider2 insider">
          Welcome to musify!
        </div>
        <div className="insider3 insider">
          <img src=  {mi} alt="" id="logo" />
        </div>
        <div className="insider4 insider">
          <div className="intext">Full Name</div>
          <input type="text" id="in1" />
        </div>
        <div className="insider5 insider">
          <div className="intext">Username</div>
          <input type="text" id="in2" />
        </div>
        <div className="insider6 insider">
          <div className="intext">Location</div>
          <input type="text" id="in3" />
        </div>
        <div className="insider7 insider">
          <button id="back">Back</button>
          <button id="next">Next</button>
        </div>
      </div>
    </div>
  );
}

export default App;
