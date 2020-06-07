import React from 'react';
import './Login.css';



const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: null,
            password: null,
            formErrors: {
                email: "",
                password: ""
            }
        };
    }

    handlesubmit = (e) => {
        e.preventDefault(); // เพื่อไม่ไห้ browser reload หรือ refresh
        const {history} = this.props;
        this.setState({ error: false});

        if (!(this.state.email === 'tha@hotmail.com' && this.state.password === '123456')) {
            return this.setState({error: true});
        }

        history.push("/Homepage");
    }

    handleChange = (e) => {
        e.preventDefault();
        let formErrors = { ...this.state.formErrors };

        const { name, value } = e.target;
        switch (name) {
            case "email":
                formErrors.email = emailRegex.test(value) ? "" : "invalid email address";
                break;
            case "password":
                formErrors.password = value.length < 6 && value.length > 0 ? "minimum 6 character required" : "";
                break;
            default:
                break;
        }
        this.setState({ formErrors, [name]: value }, () => console.log(this.state));
    };


    render() {
        const { formErrors } = this.state;
        return (
            <div className="wrapper">
                <div className="form-wrapper">
                    <h1> Login </h1>
                    <form onSubmit={this.handlesubmit} noValidate>
                        <div className="email">
                            <label htmlFor="email">Email </label>
                            <input
                                type="email"
                                className={formErrors.email.length > 0 ? "error": null}
                                placeholder="Email"
                                // type="text"
                                name="email"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.email.length > 0 && (
                                <span className="errorMessage">{formErrors.email}</span>
                            )}
                        </div>
                        <div className="password">
                            <label htmlFor="password">   Password </label>
                            <input
                                type="text"
                                className=""
                                placeholder="Password"
                                // type="text"
                                name="password"
                                noValidate
                                onChange={this.handleChange}
                            />
                            {formErrors.password.length > 0 && (
                                <span className="errorMessage">{formErrors.password}</span>
                            )}
                        </div>
                        <div className="Login">
                            <button type="submit" >Login</button>
                        </div>

                    </form>

                </div>
            </div>
        )
    }
}