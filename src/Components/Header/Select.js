
import AddIcon from '@mui/icons-material/Add';
import { propTypes } from 'react-bootstrap/esm/Image';

function Select(props) {
  return (
    <div >
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{backgroundColor:'#fff', border: '1px solid  #CFCFCF', padding: 10, margin: '10px', height: 300, width: 700, }}>
          <div >
            <div>
              <h4>Set up your WorkPerk</h4>
              <p>Work perks set up will only take a minute</p>

              <strong >Image</strong>
              <div
                style=
                {{
                  marginTop: 10, border: '1px solid  #CFCFCF', height: '50px', width: '50px', backgroundColor: 'lighblue',
                  justifyContent: 'center', alignItems: 'center', flex: 1, display: 'flex', padding: 10
                }}>
                <AddIcon /></div>

            </div>
            <button style={{ background: 'lighblue', bottom: 0, left: 0, marginTop: '30px' }}
            onClick={props.onNext}>Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Select;
