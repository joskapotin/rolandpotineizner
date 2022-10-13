type HamburgerProps = {
  isOpen: boolean
  toggleIsOpen: () => void
}

function Hamburger({ isOpen, toggleIsOpen }: HamburgerProps) {
  return (
    <button type="button" onClick={toggleIsOpen} className="z-10 sm:hidden">
      {isOpen ? "Close menu" : "Open menu"}
    </button>
  )
}
export default Hamburger
