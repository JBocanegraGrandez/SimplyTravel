import LogInForm from './login_form';
import { connect } from 'react-redux';
import { loginUser } from '../../util/session_api_util';


const mapStateToPros = ({ errors }) => ({
    errors: errors.errors
});

const mapDispatchToProps = dispatch => ({
    login: (user) => dispatch(loginUser(user))
});

export default connect(mapStateToPros, mapDispatchToProps)(LogInForm);
