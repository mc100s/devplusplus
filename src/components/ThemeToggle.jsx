import React from 'react'
import Toggle from 'react-toggle'

export default function ThemeToggle() {
  function handleChange() {
    document.body.classList.toggle("light-theme")
    if (localStorage.getItem('light-theme')) {
      localStorage.removeItem('light-theme')
    }
    else {
      localStorage.setItem('light-theme', true)
    }
  }
  return (
    <Toggle
      className="ThemeToggle"
      defaultChecked={true}
      icons={{
        unchecked: <img className="ThemeToggle__icon" src="/img/sun.png" alt="" />,
        checked: <img className="ThemeToggle__icon" src="/img/moon.png" alt="" />,
      }}
      onChange={handleChange} />
  )
}
