import { connect } from 'react-redux';

import { logoutUser } from "../../util/session_api_util";
import MainHeaderAuth from './main_header_auth';

const mapStateToProps = ( state ) => {
  return {
    currentUser: state.session.id
  };
};

const mapDispatchToProps = dispatch => ({
  logoutUser: () => dispatch(logoutUser())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainHeaderAuth);
