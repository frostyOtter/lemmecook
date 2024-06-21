import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import MobileNav from './MobileNav';
import MainNav from './MainNav';
import { Button } from './ui/button';
// import { Separator } from './ui/separator';

const Headers = () => {
    const navigate = useNavigate();
    const handleHomeClick = () => {
        navigate('/');
      };

    const handlePremiumClick = () => {
        navigate('/premium');
    }
    return (
        <div className='border-b-2 border-b-orange-500 py-6'>
            <div className='container mx-auto flex items-center justify-between'>
                <Link to= "/" className='text-3xl tracking-tight text-orange-500'>Lemmecook</Link>
                <div>
                    <Button onClick= {handleHomeClick} variant='ghost' className='flex-1 text-orange-500 mx-auto hover:text-yellow-500'>HOME</Button>
                    <Button onClick={handlePremiumClick} variant='ghost' className='flex-1 text-orange-500 mx-auto hover:text-yellow-500'>PREMIUM</Button>
                    <Button variant='ghost' className='flex-1 text-orange-500 mx-auto hover:text-yellow-500'>MY RECIPES</Button>
                    <Button variant='ghost' className='flex-1 text-orange-500 mx-auto hover:text-yellow-500'>SUPPORT</Button>
                </div>
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