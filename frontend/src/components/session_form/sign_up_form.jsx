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
        return <div className="sign-up-container">
            {this.renderErrors()}
            <div className="auth-main">
              <div className="main-left">
                <div className="main-left-wrapper">
                  <form className="form" onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="signup-form-top-container">
                      <div className="top-signup-div" />
                      <div className="signup-form-top-text">
                        <h2 className="signup-title">
                          Sign Up{" "}
                        </h2>
                      </div>
                    </div>
                    <div className="signup-form-bot-container">
                      <div className="signup-form-bot">
                        
                          <input type="text" placeholder="First Name" onChange={this.update("first_name")} className="first-name" value={this.state.first_name} required />

                          <input type="text" placeholder="Last Name" onChange={this.update("last_name")} className="last-name" value={this.state.last_name} required />
                        
                        <input type="email" value={this.state.email} placeholder="Email" onChange={this.update("email")} className="login-input" required />

                        <input type="password" placeholder="Password" onChange={this.update("password")} className="login-input" value={this.state.password} required />
                        <br />
                        <button className="sign-up-button" type="submit">
                          Sign Up
                        </button>
                        <div className="fine-print">
                          <p className="fine-print2">
                            Already on Simple Travel?
                            <Link to="/login" className="link">
                              {" "}
                              Log in
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>;
    }
}

export default SignUpForm;
