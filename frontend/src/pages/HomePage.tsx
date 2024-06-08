import landingImage from "../assets/case_banner.png"
import './HomePage.css'
function HomePage() {
  return (
    <div className="navbar_3 flex flex-col gap-12">
        <div className="navbar-div bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="navbar text-5xl font-bold tracking-tight text-orange-500 ">
                Search with any ingredients in your fridges
            </h1>
            <span>recipes in just a click</span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src= {landingImage}/>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-orange-500 text-3xl tracking-tighter">
                    Unlock even more features!
                </span>
                <span className="text-black-500 font-bold">
                    Subcribe now for only 1$/month
                </span>
            </div>
            
        </div>
        <div className="">
            <img src= {landingImage}/>
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-orange-500 text-3xl tracking-tighter">
                    Unlock even more features!
                </span>
                <span className="text-black-500 font-bold">
                    Subcribe now for only 1$/month
                </span>
            </div>
            
        </div>
    </div>
    
  );
};

export default HomePage;