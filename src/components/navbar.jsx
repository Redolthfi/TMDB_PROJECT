import SearchBar from "./searchBar";

const Navbar = () => {

    const search = (q) => {
        console.log(q)
    }

    return (
        <>
            <div className="flex justify-between p-4 px-8 text-center bg-black ">
                <h1 className="text-white font-bold text-2xl ">DOXMOVIE</h1>
                <SearchBar onChange={({target}) => search(target.value)}/>
            </div>
        </>
    )
}

export default Navbar;