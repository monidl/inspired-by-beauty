import React from "react"
import "rbx/index.css"
import { Link } from "gatsby"
import styles from "../sass/navbar.module.scss"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import logo from "../images/logo.png"
import { Navbar as NavbarRbx } from "rbx"

const Navbar = () => {
  return (
    <div>
      <NavbarRbx className={styles.navbar}>
        <NavbarRbx.Brand className={styles.navCenter}>
          <NavbarRbx.Item className={styles.navHeader}>
            <img src={logo} />
          </NavbarRbx.Item>
          <NavbarRbx.Burger />
        </NavbarRbx.Brand>
        <NavbarRbx.Menu>
          <NavbarRbx.Segment align="end">
            {links.map((item, index) => {
              return (
                <NavbarRbx.Item>
                  <Link to={item.path}>{item.text}</Link>
                </NavbarRbx.Item>
              )
            })}
          </NavbarRbx.Segment>
          <NavbarRbx.Segment align="end">
            <div className={styles.navSocialLinks}>
              {socialIcons.map((item, index) => {
                return (
                  <a
                    key={index}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.icon}
                  </a>
                )
              })}
            </div>
          </NavbarRbx.Segment>
        </NavbarRbx.Menu>
      </NavbarRbx>
    </div>
  )
}

export default Navbar
