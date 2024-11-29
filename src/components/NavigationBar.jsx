import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import { Link } from "react-router-dom";

function NavigationBar() {

  return (
    <Navbar fluid rounded className="lg:mx-32 bg-transparent">
      <NavbarBrand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Tasty Twist</span>
      </NavbarBrand>
      <NavbarToggle className="text-black"/>
      <NavbarCollapse className="text-center ">
        <Link className="border-b border-b-gray-300 hover:text-cyan-600 hover:underline" to='/'>Home</Link>
        <Link className="border-b border-b-gray-300 hover:text-cyan-600 hover:underline" to='/search'>Search</Link>
        <Link className="border-b border-b-gray-300 hover:text-cyan-600 hover:underline" to='/favourite'>Favourite</Link>
      </NavbarCollapse>
    </Navbar>
  )
}

export default NavigationBar