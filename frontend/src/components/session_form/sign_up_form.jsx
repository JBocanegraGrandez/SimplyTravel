import { connect } from 'react-redux';
import React from 'react';
import { Link } from 'react-router-dom';

class SignUpForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
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

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.signup(user);
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
                                    <div className="top-signup-div"></div>
                                    <div className="signup-form-top-text">
                                        <h2 className="red-title">Sign Up for Simple Travel </h2>
                                    </div>
                                </div>
                                <div className="signup-form-bot-container">
                                    <div className="signup-form-bot">

                                        <div className='name'>
                                            <input type="text"
                                                placeholder="First Name"
                                                onChange={this.update('first_name')}
                                                className="first-name"
                                                value={this.state.first_name}
                                                required
                                            />

                                            <input type="text"
                                                placeholder="Last Name"
                                                onChange={this.update('last_name')}
                                                className="last-name"
                                                value={this.state.last_name}
                                                required
                                            />
                                        </div>

                                        

                                        <input type="password"
                                            placeholder='Password'
                                            onChange={this.update('password')}
                                            className="login-input"
                                            value={this.state.password}
                                            required
                                        />
                                        <br />
                                        <button className="red-button"
                                            type="submit">Sign Up</button>
                                        <div className="question2">
                                            <p className="fine-print2">Already on Yelp?<Link to="/login" className="link"> Log in</Link></p>
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

export default SignUpForm;
