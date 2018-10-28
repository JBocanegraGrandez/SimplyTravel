import { connect } from "react-redux";
import { pinDestination } from "../../actions/destination_actions";
import { pinLocation } from "../../actions/location_actions";
import LocationSearchInput from "./location_search_input";

const mapDispatchToProps = dispatch => {
  return {
    pinLocation: location => dispatch(pinLocation(location)),
    pinDestination: destination => dispatch(pinDestination(destination)),
  };
};

export default connect(null,mapDispatchToProps)(LocationSearchInput);
