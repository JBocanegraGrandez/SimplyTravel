import SignUpForm from './sign_up_form';
import { connect } from 'react-redux';
import { registerUser } from '../../util/session_api_util';
import { clearErrors } from "../../util/session_api_util";

const mapStateToPros = ( state ) => ({
    errors: state.errors.session
});

const mapDispatchToProp = dispatch => ({
    signup: (user) => dispatch(registerUser(user)), 
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToPros, mapDispatchToProp)(SignUpForm);
