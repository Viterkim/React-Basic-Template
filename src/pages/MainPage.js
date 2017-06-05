import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import {observer} from 'mobx-react';
import exampleStore from '../stores/exampleStore';

@observer
class MainPage extends Component {

  render() {
    return (
      <div className="mainpage">
        {exampleStore.message}
        <br/>
        <Link to="/second">
          <RaisedButton label="MainPage Button" primary={true}
          onTouchTap={() => {exampleStore.setMessage("Activated On MainPage")}} />
        </Link>
      </div>
    );
  }

}

export default MainPage;
