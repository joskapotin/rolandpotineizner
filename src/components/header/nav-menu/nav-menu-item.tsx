import { NavLink } from "react-router-dom"

type NavMenuItemProps = {
  isOpen: boolean
  toggleIsOpen: () => void
  url: string
  title: string
  end: boolean
  children: React.ReactNode
}

function NavMenuItem({ children, isOpen, toggleIsOpen, url, title, end }: NavMenuItemProps) {
  return (
    <NavLink
      className={`${
        isOpen ? "opacity-100 delay-100" : "opacity-0"
      }  block transition-opacity  duration-300 ease-in-out sm:opacity-100 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl`}
      to={url}
      onClick={toggleIsOpen}
      end={end}
    >
      <i className="block w-12 h-12 p-2 mx-auto text-gray-400 transition duration-300 ease-in-out hover:text-gray-900 hover:animate-pulse0">
        {children}
      </i>
      <span className="sr-only">{title}</span>
    </NavLink>
  )
}

export default NavMenuItem
