import "./Banner.css"

const Banner = () => {
    return (
        <div className="w-11/12 md:container mx-auto background rounded-3xl text-center">
            <div className="md:w-7/12 w-11/12 mx-auto">
                <p className="text-[52px] text-[#FFFFFF] font-bold mb-6">Discover an exceptional cooking class tailored for you!</p>
                <p className="text-[#FFFFFF] text-lg mb-10">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding problems to become an exceptionally well world-class Programmer.</p>
                <div className="flex gap-[30px] justify-center">
                    <button className="py-5 px-[30px] bg-[#0BE58A] rounded-[50px] font-semibold text-xl text-[#150B2B]">Explore Now</button>
                    <button className="py-5 px-[30px] bg-transparent border border-[#FFFFFF] rounded-[50px] font-semibold text-xl text-[#FFFFFF]">Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;