import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import { Link } from 'react-router';
import {observer} from 'mobx-react';
import exampleStore from '../stores/exampleStore';
import undskyldningStore from '../stores/undskyldningStore';



@observer
class MainPage extends Component {
  componentWillMount(){
      undskyldningStore.getData();
  }

  render() {
    return (
      <div className="secondpage">
        {exampleStore.message}
        <br/>
        <Link to="/main">
          <RaisedButton label="SecondPage Button"
          onTouchTap={() => {exampleStore.setMessage("Activated On SecondPage")}} />
        </Link>
        <br/>
        <h3>Jeg kan desværre ikke jeg skal {undskyldningStore.messageFromServer}</h3>
        <RaisedButton label="Ny"
        onTouchTap={() => {undskyldningStore.getData()} } primary={true}/>
      </div>
    );
  }

}

export default MainPage;
