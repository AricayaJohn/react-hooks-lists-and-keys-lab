import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navElems = links.map((navElem)=> {
    return ( // why do we have to add return
    <a href = {"#" + navElem} key = {navElem} > {navElem} </a>
    )
  })

  return <nav>{navElems}</nav>;
}

export default NavBar;
