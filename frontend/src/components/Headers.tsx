import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';
import MainNav from './MainNav';
// import { Separator } from './ui/separator';

const Headers = () => {
    return (
        <div className='border-b-2 border-b-orange-500 py-6'>
            <div className='container mx-auto flex items-center justify-between'>
                <Link to= "/" className='text-3xl tracking-tight text-orange-500'>Lemmecook</Link>
                <div className='md:hidden'>
                    <MobileNav></MobileNav>
                </div>
                <div className='hidden md:block'>
                    <MainNav></MainNav>
                </div>
            </div>
        </div>
    );
};

export default Headers