import React from 'react'
import "../bulma.css"
import { FaAngleDown, FaBriefcase } from 'react-icons/fa'

const Dropdown = () => {
  return (
<div class="dropdown is-small">
  <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" 
    aria-controls="dropdown-menu3"
    style = {{border: "none",
    outline: "none"}}>
      <FaBriefcase style = {{
        marginRight: "4px"
      }} /> 
      <span>Switch Organization</span>
      <span class="icon is-small">
        <FaAngleDown />
      </span>
    </button>
  </div>
  <div class="dropdown-menu" id="dropdown-menu3" role="menu">
    <div class="dropdown-content">
      <a href="#" class="dropdown-item">
        Overview
      </a>
      <a href="#" class="dropdown-item">
        Modifiers
      </a>
      <a href="#" class="dropdown-item">
        Grid
      </a>
    </div>
  </div>
</div>
  )
}

export default Dropdown;