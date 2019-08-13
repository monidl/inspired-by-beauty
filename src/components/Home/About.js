import React from "react"
import "rbx/index.css"
import { Button } from "rbx"
import Title from "../Title"
import styles from "../../sass/about.module.scss"
import img from "../../images/pic2.jpg"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            quam incidunt rem animi dolorem, illo odit quidem assumenda illum
            quaerat? Unde hic rerum nemo voluptas, quidem placeat assumenda
            soluta veniam.
          </p>
        </article>
        <Button className="btn-primary">read more</Button>
      </div>
    </section>
  )
}

export default About
