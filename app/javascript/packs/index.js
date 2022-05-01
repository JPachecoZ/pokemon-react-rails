// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"
import HomePage from "../pages/HomePage"

document.addEventListener('DOMContentLoaded', () => {
  document.body.appendChild(document.createElement('div'));
  const root = createRoot(document.querySelector('div'));
  root.render(
    <BrowserRouter>
      <HomePage/>
    </BrowserRouter>
  )
}, { once: true });
