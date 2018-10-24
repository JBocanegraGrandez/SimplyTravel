import SignUpForm from './sign_up_form';
import { connect } from 'react-redux';
import { registerUser } from '../../util/session_api_util';

const mapStateToPros = ({ errors }) => ({
    errors: errors.errors
});

const mapDispatchToProp = dispatch => ({
    signup: (user) => dispatch(registerUser(user))
});

export default connect(mapStateToPros, mapDispatchToProp)(SignUpForm);
