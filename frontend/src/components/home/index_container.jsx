import { connect } from 'react-redux';
import Index from './index';

const mapStateToProps = (state) => {
  return {
    location: state.entities.location,
    destination: state.entities.location
  };
};

export default connect(mapStateToProps, null)(Index);