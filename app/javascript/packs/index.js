// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import { createRoot } from 'react-dom/client'
import { Fragment } from 'react/cjs/react.production.min';
//import HomePage from "../pages/HomePage"
import Canvas from '../pages/Game';
import { Global } from "@emotion/react";
import reset from "../styles/reset"

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('div'));
  const root = createRoot(document.querySelector('div'));
  root.render(
    <Fragment>
      <Global styles={reset}/>
      <Canvas/>
    </Fragment>
  )
}, { once: true });
