import React, { Component } from 'react'
import './styles.scss';


class Header extends Component {
  render() {
    return (
      <div class="header">
            <div class="header-content">
                <a href='/' class="logo-container">
                    <img src={require('./logo.png')} alt="logo"/>
                </a>
            <ul class="main-menu">
                <li class="menu-item"> 
                    <a href="#!" class="menu-item-content">Mujeres </a>
                    <div class="holder">
                        <ul class="submenu">
                            <li class="submenu-item">
                                    <a href="#!" class="submenu-item-content">
                                        Jeans
                                    </a>
                            </li>
                            <li class="submenu-item">
                                    <a href="#!" class="submenu-item-content">
                                        Remeras
                                    </a>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="menu-item"> 
                    <a href="#!" class="menu-item-content">Hombres </a>
                    <div class="holder">

                        <ul class="submenu">
                            <li class="submenu-item">
                                    <a href="#!" class="submenu-item-content">
                                        Jeans
                                    </a>
                            </li>
                            <li class="submenu-item">
                                    <a href="#!" class="submenu-item-content">
                                        Remeras
                                    </a>
                            </li>
                        </ul>

                    </div>
                </li>
                
            </ul>
            <i class="material-icons search">search</i>
             </div>
        
      </div>
    )
  }
}

export default Header
