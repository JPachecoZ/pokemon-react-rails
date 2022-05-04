import React from 'react'
import { createRoot } from 'react-dom/client'
import { Global } from "@emotion/react";
import reset from "../styles/reset"
import { Fragment } from 'react/cjs/react.production.min';
import App from "../App/index"
import Modal from "../components/Modal"

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('div'));
  const root = createRoot(document.querySelector('div'));
  root.render(
    <Fragment>
      <Global styles={reset}/>
      <Modal/>
    </Fragment>
  )
}, { once: true });
