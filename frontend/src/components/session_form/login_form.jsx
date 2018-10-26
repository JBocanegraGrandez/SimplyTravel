import React from 'react';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

class LogInForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    demo(e) {
        e.preventDefault();
        this.setState({ email: 'demo@demo.com', password: 'demodemo' }, () => (
            setTimeout(() => (this.ogLogin(e)), 1000)
        ));
    }

    handleSubmit(e) {
        e.preventDefault();
        this.ogLogin(e);
    }

    ogLogin(e) {
        const user = Object.assign({}, this.state);
        this.props.login(user);
    }

    renderErrors() {
        // if (this.props.errors.length === 0) {
        //     return "";
        // }
        // return (
        //     <div className="errors">
        //         <ul>
        //             {this.props.errors.map((error, i) => (
        //                 <li key={`error-${i}`}>
        //                     {error}
        //                 </li>
        //             ))}
        //         </ul>
        //     </div>
        // );
    }

    render() {
        return (

            <div className="auth-holder">
                {this.renderErrors()}
                <div className='auth-main'>
                    <div className="main-left">
                        <div className="main-left-wrapper">
                            <form className="form" onSubmit={this.handleSubmit} className="login-form-box">
                                <div className="signup-form-top-container">
                                    <div className="top-login-div"></div>
                                    <div className="signup-form-top-text">
                                        <h2 className="signup-title">Log In </h2>
                                
                                    </div>
                                   
                                </div>
                                <div className="signup-form-bot-container">
                                    <div className="signup-form-bot">

                                        <input type="email"
                                            value={this.state.email}
                                            placeholder="Email"
                                            onChange={this.update('email')}
                                            className="login-input"
                                            required
                                        />

                                        <input type="password"
                                            placeholder='Password'
                                            onChange={this.update('password')}
                                            className="login-input"
                                            value={this.state.password}
                                            required
                                        />
                                        <div className="question">
                                            <p className="fine-print"><a onClick={this.demo.bind(this)} className="link">Demo Log in?</a></p>
                                        </div>
                                        <button className="sign-up-button"
                                            type="submit">Log In</button>
                                        <div className="fine-print">
                                            <p className="fine-print2">New to Simply Travel? <Link to="/signup" className="link"> Sign up</Link></p>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// export default withRouter(LogInForm);
export default LogInForm;
