function Header() {
    return (
        <header className="flex justify-between items-center p-3 bg-white shadow-md">

            <img className="w-36 h-12" src="logo.png" />

            <div className="flex gap-8 items-center [&>p]:px-4 [&>p]:py-2">

                <p className="cursor-pointer hover:text-green-600">
                    Home
                </p>

                <p className="cursor-pointer hover:text-green-600">
                    Mentors
                </p>

                <p className="cursor-pointer hover:text-green-600">
                    Pricing
                </p>

                <p className="border border-gray-400 shadow-sm hover:shadow-md transition rounded-md text-center cursor-pointer">
                    Log in
                </p>

                <p className="bg-green-600 text-white shadow-sm hover:shadow-md hover:bg-green-800 transition rounded-md text-center cursor-pointer">
                    Sign Up
                </p>

            </div>

        </header>

    )
}
export default Header;