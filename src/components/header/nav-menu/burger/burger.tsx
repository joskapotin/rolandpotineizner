type BurgerProps = {
  isOpen: boolean
  toggleIsOpen: () => void
}

function Burger({ isOpen, toggleIsOpen }: BurgerProps) {
  return (
    <button type="button" onClick={toggleIsOpen} className="z-10 h-12 w-12 py-3 sm:hidden">
      <span
        className={`relative right-0 ml-auto block h-0.5 w-6 select-none transition duration-300 before:absolute before:block before:h-0.5 before:w-6 before:bg-gray-900 before:transition before:duration-300 before:content-[''] after:absolute after:block after:h-0.5 after:w-6 after:bg-gray-900 after:transition after:duration-300 after:content-[''] ${
          isOpen
            ? "bg-transparent before:-top-2 before:translate-y-2 before:-rotate-45 after:-top-2 after:translate-y-2 after:rotate-45"
            : "bg-gray-900 before:-top-2 after:top-2"
        }`}
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
      </span>
    </button>
  )
}
export default Burger
