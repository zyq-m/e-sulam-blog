import React from "react"

import Layout from "../components/Layout"
import img from "../assets/images/chart.jpg"

const about = () => {
  return (
    <Layout>
      <section className="about">
        <div className="yellow-box">
          <div className="about__text">
            <div className="flex flex-fd-c wrapper">
              <h1>Siapakah kami?</h1>
              <p>
                Seri Putra merupakan kumpulan ke-tiga yang terdiri daripada 10
                orang ahli. Projek yang kami laksanakan ini adalah dibawah topik
                Penghayatan Rukun Negara. Projek e-SULAM ini juga dibimbing oleh
                pensyarah kami iaitu, Dr. Abdullah bin Ibrahim.
              </p>
            </div>
            <h2>Organisasi Seri Putra</h2>
          </div>
        </div>
        <ul className="about__box">
          <li className="profile flex flex-ai-c">
            <div className="profile__img"></div>
            <div className="profile__detail">
              <p className="name">Nama</p>
              <p className="position">Ketua</p>
            </div>
          </li>
        </ul>
      </section>
    </Layout>
  )
}

export default about
