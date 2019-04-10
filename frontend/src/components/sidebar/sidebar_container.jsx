import Sidebar from './sidebar';
import { connect } from 'react-redux';
import { pinLocation } from "../../actions/location_actions";

const mapStateToProps = state => {
  return {
    // pass our flights data
    // pass our hotels data
    // 
  };
}

const mapDispatchToProps = dispatch => {
  return {
    pinLocation: location => dispatch(pinLocation(location)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);