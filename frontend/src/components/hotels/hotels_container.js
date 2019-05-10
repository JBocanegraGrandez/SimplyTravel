import { connect } from "react-redux";
import Hotels from "./hotels";

const mapStateToProps = state => {
  console.log(`HOTELS STATE:`)
  console.log(state)
  return {
    lat: state.entities.location.lat,
    lng: state.entities.location.lng
  };
};

export default connect(mapStateToProps, null)(Hotels);
