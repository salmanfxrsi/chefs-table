const Navbar = () => {
    return (
        <div className="flex flex-col lg:flex-row container mx-auto justify-between items-center my-12 gap-6 lg:gap-0">
            {/* Logo */}
            <div>
                <p className="text-[#150B2B] font-bold text-[2rem]">Chef&apos;s Table</p>
            </div>
            {/* Nav Options */}
            <div className="flex gap-12 text-[#150B2BB3] text-opacity-70">
                <a href="">Home</a>
                <a href="">Recipes</a>
                <a href="">About</a>
                <a href="">Search</a>
            </div>
            {/* Search Bar And Profile */}
            <div className="flex items-center gap-4">
                {/* Search Bar */}
                <div>
                    <input className="bg-[#150B2B0D] bg-opacity-5 py-3 px-7 rounded-[50px] placeholder:text-[#150B2BB3] placeholder:text-opacity-70 placeholder:text-base" type="search" name="" id="" placeholder="Search"/>
                </div>
                {/* Profile */}
                <div className="bg-[#0BE58A] h-12 w-12 rounded-full flex justify-center items-center">
                    <i className="fa-regular fa-user"></i>
                </div>
            </div>
        </div>
    );
};

export default Navbar;