import LogInForm from './login_form';
import { connect } from 'react-redux';
import { loginUser } from '../../util/session_api_util';
import { clearErrors } from '../../util/session_api_util';


const mapStateToPros = ( state ) => ({
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(loginUser(user)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToPros, mapDispatchToProps)(LogInForm);
