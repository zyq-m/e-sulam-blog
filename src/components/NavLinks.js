import React from "react"
import { Link } from "gatsby"

const links = [
  {
    id: 1,
    path: "/",
    name: "laman utama",
  },
  {
    id: 2,
    path: "/about",
    name: "tentang kami",
  },
  {
    id: 3,
    path: "/plans",
    name: "perancangan",
  },
]

const NavLinks = ({ active }) => {
  return (
    <>
      {links.map(link => {
        const { id, path, name } = link
        return (
          <li key={id}>
            <Link to={path} activeClassName={active}>
              {name}
            </Link>
          </li>
        )
      })}
    </>
  )
}

export default NavLinks
