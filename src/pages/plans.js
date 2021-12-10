import React from "react"

import Layout from "../components/Layout"
import Plan from "../components/Plan"
import data from "../assets/data/dataPlans"

const plans = () => {
  return (
    <Layout>
      <section className="plan">
        <div className="plan__wrapper">
          {data.map(plan => {
            const { id, title, date, activities } = plan

            return (
              <Plan
                key={id}
                title={title}
                date={date}
                activities={activities}
              />
            )
          })}
        </div>
      </section>
    </Layout>
  )
}

export default plans
