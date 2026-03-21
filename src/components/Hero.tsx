function Hero() {
    return (
        <div className="flex items-center justify-between px-20 py-16 bg-gray-50">
            <div className="max-w-xl">
                <h1 className="text-5xl font-bold text-gray-800 mb-6">
                    Take Charge of Your Growth
                </h1>

                <p className="text-gray-600 text-lg mb-8">
                    Set goals, track your progress, and find the right mentors to help you succeed.
                </p>

                <div className="flex gap-4">

                    <button className="bg-green-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition">
                        Get Started
                    </button>

                    <button className="border px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition">
                        Watch Video
                    </button>

                </div>

            </div>
            <div>
                <img className="w-[700px]" src="hero.png"/>
            </div>
        </div>
    )
}
export default Hero;