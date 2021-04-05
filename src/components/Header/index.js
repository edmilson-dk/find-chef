import Container from "../UI/Container";

import logoSvg from "../../assets/logo.svg";

function Header() {
  return (
    <header className="bg-white py-2 w-full shadow">
      <Container>
        <div className="w-full flex items-center justify-between">
          <div style={{ maxWidth: '130px'}}>
            <img src={logoSvg} alt="Find Chef logo" />
          </div>
          <nav className="flex items-center justify-between max-w-xs">
            <a href="https://github.com/edmilson-dk" className="rounded-md block mr-3 border-2 py-2 px-3 border-green-500 text-green-500 font-medium text-lg">Sign Up</a>
            <a href="https://github.com/edmilson-dk" className="rounded-md block py-2 px-3 bg-green-500 text-white font-medium text-lg">Sign In</a>
          </nav>
        </div>
      </Container>
    </header>
  )
}

export default Header;