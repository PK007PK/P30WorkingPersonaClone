import React from "react"
import { navigate } from "gatsby-link"

import Button from "../Button/Button"

import { StyledForm } from "./Form.style"

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function Contact() {
  const [state, setState] = React.useState({})

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

  return (
    <>
      <h2>Formularz:</h2>
      <StyledForm
        name="Template site contact form"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
        <input type="hidden" name="hiden-input" value="contact" />
        <div hidden>
          <label htmlFor="bot-field">
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={handleChange} />
          </label>
        </div>
        <div className="formItem">
          <input
            className="input"
            type="text"
            name="imie"
            placeholder=" "
            onChange={handleChange}
          />
          <label className="label" htmlFor="imie">
            Imię:
          </label>
          <div className="formItemBar" />
        </div>
        <div className="formItem">
          <input
            className="input"
            type="email"
            name="email"
            onChange={handleChange}
            placeholder=" "
          />
          <label className="label" htmlFor="email">
            Email:
          </label>
          <div className="formItemBar" />
        </div>
        <div className="formItem">
          <input
            className="input"
            type="text"
            name="telefon"
            placeholder=" "
            onChange={handleChange}
          />
          <label className="label" htmlFor="telefon">
            Telefon:
          </label>
          <div className="formItemBar" />
        </div>
        <div className="formItem">
          <textarea
            className="textarea"
            type="email"
            name="text"
            onChange={handleChange}
            placeholder=" "
          />
          <label className="label" htmlFor="text">
            Treść wiadomości:
          </label>
          <div className="formItemBar" />
        </div>
        <Button type="submit">Wyślij</Button>
      </StyledForm>
    </>
  )
}
