import { connect} from 'react-redux';
import Map from './map';

const mapStateToProps = state => {
  // the state of our events, places etc. that we want to pass through
  return {

  };
}

const mapDispatchToProps = dispatch => {
  // anything we want to dispatch to our map component
  return  {

  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Map);