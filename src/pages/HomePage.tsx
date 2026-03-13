function HomePage(){
    return(
        <div className="min-h-screen bg-gray-50">
            <nav className="flex justify-between items-center px-10 py-5 shadow">
                <h1 className="text-2xl font-bold text-indigo-600">GrowUp</h1>
                <div className="flex gap-5">
                    <a>Features</a>
                    <a>About</a>
                    <a>Pricing</a>
                </div>
                <div className="flex gap-5">
                    <button className="text-gray-600 hover:text-black">Login</button>
                    <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700">Sign Up</button>
                </div>
                </nav>
            <section className="mt-24 text-center">sad</section>
            <main>
                <section></section>
                <section></section>
            </main>
            <section></section>
            <footer></footer>
        </div>
    )
}
export default HomePage