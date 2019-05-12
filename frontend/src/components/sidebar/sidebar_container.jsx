import Sidebar from './sidebar';
import { connect } from 'react-redux';
import { pinLocation } from "../../actions/location_actions";
import { pinDestination } from "../../actions/destination_actions";

const mapStateToProps = state => {
  return {
    // sidebarUI: state.ui.status
  };
}

const mapDispatchToProps = dispatch => {
  return {
    pinLocation: location => dispatch(pinLocation(location)),
    pinDestination: destination => dispatch(pinDestination(destination)),
    // sidebarOpen: () => ({type: 'SIDEBAR_TOGGLE', status: true }),
    // sidebarClose: () => ({type: 'SIDEBAR_TOGGLE', status: false })
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);