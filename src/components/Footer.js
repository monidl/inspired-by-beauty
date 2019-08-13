import React from "react"
import "rbx/index.css"
import { Content, Footer as FooterRbx } from "rbx"
import styles from "../sass/footer.module.scss"
import links from "../constants/links"
import socialIcons from "../constants/social-icons"
import { Link } from "gatsby"

// const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       <div className={styles.links}>
//         {links.map((item, index) => {
//           return (
//             <Link key={index} to={item.path}>
//               {item.text}
//             </Link>
//           )
//         })}
//       </div>
//       <div className={styles.icons}>
//         {socialIcons.map((item, index) => {
//           return (
//             <a
//               key={index}
//               href={item.url}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               {item.icon}
//             </a>
//           )
//         })}
//       </div>
//       <div className={styles.copyright}>
//         copyright &copy; inspired by beauty  {new Date().getFullYear()} all
//         rights reserved
//       </div>
//     </footer>
//   )
// }

const Footer = () => {
  return (
    <div>
      <FooterRbx className={styles.footer}>
        <div className={styles.links}>
          {links.map((item, index) => {
            return (
              <Link key={index} to={item.path}>
                {item.text}
              </Link>
            )
          })}
        </div>
        <div className={styles.icons}>
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
        <Content textAlign="centered">
          <p className={styles.copyright}>
            <p>Inspired by Beauty - Monica de Leon</p>
            copyright &copy;
            {new Date().getFullYear()} all rights reserved . The website content
            is licensed{" "}
            <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
              CC BY NC SA 4.0
            </a>
          </p>
        </Content>
      </FooterRbx>
    </div>
  )
}

export default Footer
