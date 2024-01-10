import logo from '../assets/vinyl-logo.svg';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-shamrock-600 to-gunmetal-300 p-6 rounded-lg border-gunmetal-900 border-2">
            <div className="flex items-center flex-shrink-0 text-whitesmoke-500 mr-6">
                <img className="fill-current h-8 w-8 mr-2" width="54" height="54" src={logo} alt="Groove Grove logo"/>
                <span className="font-semibold text-xl tracking-tight">Groove Grove</span>
            </div>
            <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-whitesmoke-200 border-shamrock-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-sm lg:flex-grow">
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-whitesmoke-500 hover:text-gunmetal-900 mr-4">
                        Trending
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-whitesmoke-500 hover:text-gunmetal-900 mr-4">
                        Genres
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-whitesmoke-500 hover:text-gunmetal-900 mr-4">
                        Lists
                    </a>
                    <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-whitesmoke-500 hover:text-gunmetal-900">
                        Profile
                    </a>
                </div>
                <div>
                    <a href="#" className="inline-block text-sm px-4 py-2 leading-none border rounded text-whitesmoke-500 border-whitesmoke-500 hover:border-transparent hover:text-gunmetal-900 hover:bg-whitesmoke-500 mt-4 lg:mt-0">Logout</a>
                </div>
            </div>
        </nav>
    )
}