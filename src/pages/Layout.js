import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import injectTapEventPlugin from 'react-tap-event-plugin';
import IconButton from 'material-ui/IconButton';
import '../style/page.css';

class Layout extends Component{
  constructor(props){
  super(props);
  injectTapEventPlugin();
  }

  render(){
    return(
      <div>
      <AppBar
        title="REPLACE ME"
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        className="appbar"
      />
      {this.props.children}
      </div>
    );
  }
}
export default Layout;
