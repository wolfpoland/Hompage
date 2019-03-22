import React, { memo } from "react"
import Card from "./card"

import { MdMail, MdWork, MdInsertChart, MdLaptop } from "react-icons/md"

const cards = memo(() => (
  <>
    <Card
      color={{
        borderColor: "#e6b5b0",
        backgroundColor: "#efd1ce",
        hoverBackgroundColor: "#fbf4f3",
      }}
      link="contact"
      text="Contact Me"
    >
      <MdMail />
    </Card>
    <Card
      color={{
        borderColor: "#e6b0c6",
        backgroundColor: "#efcedb",
        hoverBackgroundColor: "#fbf3f7",
      }}
      isNotImplemented
      text="Hire Me"
    >
      <MdWork />
    </Card>
    <Card
      color={{
        borderColor: "#e6b0e1",
        backgroundColor: "#efceec",
        hoverBackgroundColor: "#fbf3fa",
      }}
      isNotImplemented
      text="See My Skills"
    >
      <MdInsertChart />
    </Card>
    <Card
      color={{
        borderColor: "#d0b0e6",
        backgroundColor: "#e2ceef",
        hoverBackgroundColor: "#f8f3fb",
      }}
      isNotImplemented
      text="Garage projects"
    >
      <MdLaptop />
    </Card>
  </>
))

export default cards
