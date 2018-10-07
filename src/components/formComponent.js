import React from 'react'
import { navigateTo } from "gatsby-link"

function encode(data) {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class FormComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleSubmit = e => {
        e.preventDefault();
        // console.log('jo!');
        const form = e.target;
        const bodi = encode({
            "form-name": form.getAttribute("name"),
            ...this.state
        });
        console.log('bodi: ' + bodi);
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({
                "form-name": form.getAttribute("name"),
                ...this.state
            })
        })
            .then(() => alert('fetch was done!'))
            .then(() => navigateTo(form.getAttribute("action")))
            .catch(error => alert(error));
    };

    render() {
        return (
            <div>
                <form
                    name="formTest"
                    method="post"
                    action="/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={this.handleSubmit}
                    >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript
                    <input type="hidden" name="form-name" value="formTest" /> */}
                    <p hidden>
                        <label>
                        Don’t fill this out:{" "}
                        <input name="bot-field" onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                        Your name:<br />
                        <input type="text" name="name" onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                        Your email:<br />
                        <input type="email" name="email" onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <label>
                        Message:<br />
                        <textarea name="message" onChange={this.handleChange} />
                        </label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </div>
        )
            
    }
}

export default FormComponent;