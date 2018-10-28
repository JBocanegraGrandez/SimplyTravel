import React from 'react';
import { Link } from 'react-router-dom';
import p1 from "../../resources/1.jpg";
import p2 from "../../resources/2.jpg";
import p3 from "../../resources/3.jpg";
import p4 from "../../resources/4.jpg";
import p5 from "../../resources/5.jpg";
import p6 from "../../resources/6.jpg";
import p7 from "../../resources/7.jpg";
import p8 from "../../resources/8.jpg";
import p9 from "../../resources/9.jpg";
import p10 from "../../resources/10.jpg";
import p11 from "../../resources/11.jpg";

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
        if (this.props.errors.length === 0) {
            return null;
        }
        
        let errors_array = Object.values(this.props.errors)
        console.log(this.props.errors)
        return (
            <div className="errors">
                <ul>
                    {errors_array.map((error, i) => (
                        <li key={`error-${i}`}>
                            {error}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    render() {
    const random = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11][Math.floor(Math.random() * 11)];
    return <div className="background-container" style={{ backgroundImage: `url(${random})` }}>
        <div className="sign-up-container">
            <div className="auth-main">
              {this.renderErrors()}
              <div className="main-left">
                <div className="main-left-wrapper">
                  <form className="form" onSubmit={this.handleSubmit} className="login-form-box">
                    <div className="signup-form-top-container">
                      <div className="top-login-div" />
                      <div className="signup-form-top-text">
                        <h2 className="signup-title">Log In </h2>
                      </div>
                    </div>
                    <div className="signup-form-bot-container">
                      <div className="signup-form-bot">
                        <input type="email" value={this.state.email} placeholder="Email" onChange={this.update("email")} className="login-input" required />

                        <input type="password" placeholder="Password" onChange={this.update("password")} className="login-input" value={this.state.password} required />
                        <div className="question">
                          <p className="fine-print">
                            <a onClick={this.demo.bind(this)} className="link">
                              Demo Log in?
                            </a>
                          </p>
                        </div>
                        <button className="sign-up-button" type="submit">
                          Log In
                        </button>
                        <div className="fine-print">
                          <p className="fine-print2">
                            New to Simply Travel? <Link onClick={this.props.clearErrors} to="/signup" className="link">
                              {" "}
                              Sign up
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            </div>
          </div>;
    }
}

// export default withRouter(LogInForm);
export default LogInForm;
