import React  from 'react';
import { Spring } from 'react-spring';

const App = () => {
  return (
    <>
      <Spring
        key={'hello'}
        from={{ opacity: 0 }}
        to={{ opacity: 1 }}>
        {props => <div style={props}>hello</div>}
      </Spring>
      <hr/>

      {/*<Spring key={'number'} from={{ number: 0 }} to={{ number: 1 }}>*/}
      {/*  {props => <div>{props.number}</div>}*/}
      {/*</Spring>*/}

      <Spring
        key={'kjjgf'}
        from={{ opacity: 0, marginTop: -1000 }}
        to={{ opacity: 1, marginTop: 0 }}
      >
        {props => (
          <div className="App" style={props}>
            <div>
              <header className="App-header">
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
              </header>
            </div>
          </div>
        )}
      </Spring>
      <hr />
    </>
  );
};

export default App;
