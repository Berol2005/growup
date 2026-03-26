import StarRating from "../components/StarRating"
function MainHomePage() {

    return (

        <main className="flex flex-col">
            <div className="flex justify-center gap-10 p-16">

                {/* 1 cart */}
                <div className="bg-gray-50 rounded-xl w-[380px] shadow-md p-8 flex flex-col justify-between h-[280px] hover:shadow-xl transition">

                    <div>

                        <h1 className="text-center text-2xl font-bold">
                            Set & Track Your Goals
                        </h1>

                        <hr className="w-full my-4 border-gray-200" />

                        <p className="text-lg text-center text-gray-600">
                            Create goals and monitor your progress with ease.
                        </p>

                    </div>

                    <button className="bg-green-600 text-white text-lg rounded-lg w-60 py-2 shadow-md self-center hover:bg-green-700 transition">
                        Manage Goals
                    </button>

                </div>


                {/* 2 cart */}
                <div className="bg-gray-50 rounded-xl w-[380px] shadow-md p-8 flex flex-col justify-between h-[280px] hover:shadow-xl transition">

                    <div>

                        <h1 className="text-center text-2xl font-bold">
                            Find Your Mentor
                        </h1>

                        <hr className="w-full my-4 border-gray-200" />

                        <p className="text-lg text-center text-gray-600">
                            Connect with mentors who can guide your journey.
                        </p>

                    </div>

                    <button className="bg-blue-600 text-white text-lg rounded-lg w-60 py-2 shadow-md self-center hover:bg-blue-700 transition">
                        Browse Mentors
                    </button>

                </div>


                {/* 3 card */}
                <div className="bg-gray-50 rounded-xl w-[380px] shadow-md p-8 flex flex-col justify-between h-[280px] hover:shadow-xl transition">

                    <div>

                        <h1 className="text-center text-2xl font-bold">
                            AI Coaching <span className="text-blue-600">(Pro)</span>
                        </h1>

                        <hr className="w-full my-4 border-gray-200" />

                        <p className="text-lg text-center text-gray-600">
                            Get personalized advice and feedback with our AI coach
                        </p>

                        <p className="text-center text-sm text-gray-400 mt-2">
                            *For Pro Members
                        </p>

                    </div>

                    <button className="bg-green-200 text-green-800 text-lg w-60 py-2 rounded-lg shadow-md self-center hover:bg-green-300 transition">
                        Learn More
                    </button>

                </div>

            </div>
            <h1 className="text-2xl font-bold px-8 py-4">Featured mentors</h1>
            <p className="mx-8">Find the right mentor to guide you.</p>
            <div className="flex flex-row justify-between gap-10 p-8">
                <div className="flex flex-col w-128 items-center justify-items-center shadow-md p-4">
                    <img src="img2.png" className="h-48 w-48" />
                    <p className="text-xl font-bold p-2">Matthew 1</p>
                    <p className="text-gray-600 p-2">Personal Development</p>
                    <StarRating rate={4.5}/>
                    <button className="bg-blue-600 py-2 rounded-md text-white center w-48">View Profile</button>
                </div>
                <div className="flex flex-col w-128 items-center justify-items-center shadow-md p-4">
                    <img src="img2.png" className="h-48 w-48" />
                    <p className="text-xl font-bold p-2">Matthew 2</p>
                    <p className="text-gray-600 p-2">Career Coaching</p>
                    <StarRating rate={3.5}/>
                    <button className="bg-blue-600 py-2 rounded-md text-white center w-48">View Profile</button>
                </div>
                <div className="flex flex-col w-128 items-center justify-items-center shadow-md p-4">
                    <img src="img2.png" className="h-48 w-48" />
                    <p className="text-xl font-bold p-2">Matthew 3</p>
                    <p className="text-gray-600 p-2">Personal Development</p>
                    <StarRating rate={5}/>
                    <button className="bg-blue-600 py-2 rounded-md text-white center w-48">View Profile</button>
                </div>
                <div className="flex flex-col w-128 items-center justify-items-center shadow-md p-4">
                    <img src="img2.png" className="h-48 w-48" />
                    <p className="text-xl font-bold p-2">Matthew 4</p>
                    <p className="text-gray-600 p-2">Personal Development</p>
                    <StarRating rate={2.5}/>
                    <button className="bg-blue-600 py-2 rounded-md text-white center w-48">View Profile</button>
                </div>
            </div>
        </main>

    )

}

export default MainHomePage;