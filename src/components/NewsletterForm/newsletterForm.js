import React from 'react'
import { navigate } from 'gatsby-link'

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default class NewsletterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isValidated: false }
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...this.state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error))
  }

  render() {
    return (
      <section className="form">     
        <h3>Fill in your details below and we'll notify you when there's a User Group coming up in your area.</h3>
        <form
          name="Newsletter"
          method="post"
          action="/newsletter/thanks/"
          data-netlify="true"
          data-netlify-honeypot="name"
          onSubmit={this.handleSubmit}
        >
          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
          <input type="hidden" name="form-name" value="contact" />
          <div className="field field--name">
            <label>
              Please enter your name:
              <input name="name" onChange={this.handleChange} />
            </label>
          </div>
          <div className="field">
            <label className="label" htmlFor={'email'}>
              Email
            </label>
            <div className="control">
              <input
                className="input"
                type={'email'}
                name={'email'}
                onChange={this.handleChange}
                id={'email'}
                required={true}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={'name'}>
              Full Name
            </label>
            <div className="control">
              <input
                className="input"
                type={'text'}
                name={'name'}
                onChange={this.handleChange}
                id={'name'}
                required={true}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={'company'}>
              Company
            </label>
            <div className="control">
              <input
                className="input"
                type={'text'}
                name={'company'}
                onChange={this.handleChange}
                id={'company'}
                required={true}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={'jobTitle'}>
              Job Title
            </label>
            <div className="control">
              <input
                className="input"
                type={'text'}
                name={'jobTitle'}
                onChange={this.handleChange}
                id={'jobTitle'}
                required={true}
              />
            </div>
          </div>
          <div className="field">
            <label className="label" htmlFor={'jobTitle'}>
              Which region would you like updates for?
            </label>
            <div className="control">
              
              <label className="label" htmlFor={'london'}>
                London
              </label>
              <input
                className="checkbox"
                type={'checkbox'}
                name={'london'}
                onChange={this.handleChange}
                id={'london'}
              />
              
              <label className="label" htmlFor={'bristol'}>
                Bristol
              </label>
              <input
                className="checkbox"
                type={'checkbox'}
                name={'bristol'}
                onChange={this.handleChange}
                id={'bristol'}
              />
              
              <label className="label" htmlFor={'cardiff'}>
                Cardiff
              </label>
              <input
                className="checkbox"
                type={'checkbox'}
                name={'cardiff'}
                onChange={this.handleChange}
                id={'cardiff'}
              />
              
              <label className="label" htmlFor={'manchester'}>
                Manchester
              </label>
              <input
                className="checkbox"
                type={'checkbox'}
                name={'manchester'}
                onChange={this.handleChange}
                id={'manchester'}
              />

              <label className="label" htmlFor={'leeds'}>
                Leeds
              </label>
              <input
                className="checkbox"
                type={'checkbox'}
                name={'leeds'}
                onChange={this.handleChange}
                id={'leeds'}
              />
            </div>
          </div>
          <div className="field">
            <button className="button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </section>
    )
  }
}