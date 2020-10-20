import React from 'react';
import { navigate } from 'gatsby-link';
<<<<<<< HEAD
import { Link } from 'gatsby';
=======
>>>>>>> 96e0f42db96fcb9bc55ec610f4968bd937f74bb1

import Button from '../Button/Button';

import { StyledForm } from './Form.style';

function encode(data) {
  return Object.keys(data)
    .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');
}

<<<<<<< HEAD
export default function Contact({ admin }) {
=======
export default function Contact() {
>>>>>>> 96e0f42db96fcb9bc55ec610f4968bd937f74bb1
  const [state, setState] = React.useState({});

  const handleChange = e => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch(error => alert(error));
  };

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
            Don’t fill this out:{' '}
            <input
              name="bot-field"
              onChange={handleChange}
              autoComplete="off"
            />
          </label>
        </div>
        <div className="formItem">
          <input
            className="input"
            type="text"
            name="imie"
            placeholder=" "
            onChange={handleChange}
            autoComplete="off"
            required
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
            autoComplete="off"
            required
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
            autoComplete="off"
            required
          />
          <label className="label" htmlFor="telefon">
            Telefon:
          </label>
          <div className="formItemBar" />
        </div>
        <div className="formItem">
          <textarea
            className="textarea"
            name="text"
            onChange={handleChange}
            placeholder=" "
            required
          />
          <label className="label" htmlFor="text">
            Treść wiadomości:
          </label>
          <div className="formItemBar" />
        </div>
        <div className="policy">
          <input type="checkbox" id="policy" name="policy" required />
          <p>
<<<<<<< HEAD
            Wyrażam zgodę na przetwarzanie przez {admin} moich danych osobowych
            w celu odpowiedzi na zadane pytanie zgodnie z zasadami ochrony
            danych osobowych wyrażonymi w{' '}
            <Link className="decorated" to="/privacy/">
              Polityce Prywatności.
            </Link>
          </p>
        </div>
=======
            Wyrażam zgodę na przetwarzanie przez Michał Pankiewicz &
            Współpracownicy Kancelaria Prawna moich danych osobowych w celu
            odpowiedzi na zadane pytanie zgodnie z zasadami ochrony danych
            osobowych wyrażonymi w Polityce Prywatności.
          </p>
        </div>

>>>>>>> 96e0f42db96fcb9bc55ec610f4968bd937f74bb1
        <Button type="submit">Wyślij</Button>
        {/* <button type="submit">Wyślij</button> */}
      </StyledForm>
    </>
  );
}
