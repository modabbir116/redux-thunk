import React from 'react'
import logo from '../../assets/images/lws.png'
import search from '../../assets/images/search.svg'
const Navbar = () => {
  return (
    <nav className="shadow-md bg-slate-100">
        <div className="flex justify-between px-5 py-3 mx-auto max-w-7xl lg:px-0">
            <a href="/">
                <img className="h-10 w-10" src={logo} alt="logo" />
            </a>
            <div className="flex items-center h-10 px-5 text-sm bg-white border rounded-lg border-slate-200 ring-emerald-200">
            {/* search */}
            <form>
                <input
                className="mr-2 border-none outline-none"
                type="search"
                name="search"
                placeholder="Search"
                />
            </form>
            <img
                className="inline h-4 cursor-pointer"
                src={search}
                alt="Search"
            />
            </div>
        </div>
    </nav>

  )
}

export default Navbar