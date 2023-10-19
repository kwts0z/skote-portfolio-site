import logo from '../assets/skoteLogo.png'
import linkedIn from '../assets/linkedIn.png'
import email from '../assets/email.png'

function scrollToSection(elementId) {
  console.log('scrollToSection called with elementId:', elementId);
  const element = document.getElementById(elementId);
  if(element){
    element.scrollIntoView({ behavior: 'smooth' });
  };
}

function Footer() {
  return (
    <div className="flex flex-col bg-black px-5 justify-center items-center w-full md:items-end md:justify-between md:flex-row">
      <div className='flex h-[7rem] md:pb-2 justify-between md:justify-end md:order-3 w-full md:w-1/3'>
        <a className="flex h-full w-auto justify-end" target="_blank" rel="noreferrer" href="mailto:georgakis.yorgos@gmail.com"><img className="h-full w-auto pt-5 transition-all duration-300 hover:scale-125" src={email} alt='email'/></a>
        <a className="flex h-full w-auto justify-center" target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/georgios-georgakis/'><img className="h-full w-auto transition-all duration-300 hover:scale-125" src={linkedIn} alt='linked in'/></a>
      </div>
      <div className='flex w-full md:w-1/3 justify-center lg:justify-normal'>
        <img src={logo} alt='Georgios Logo' className='h-32 md:pb-2 transition-all duration-300 hover:scale-110 cursor-pointer md:order-1' onClick={(e) => {e.preventDefault(); scrollToSection('showreel')}}></img>
      </div>
      <h1 className='text-xs md:text-base md:order-2'>Copyright© 2023 Created by <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/k0nstantinos-giannopoulos/' className='hover:text-slate-500'>Kwts0s</a></h1>
    </div>
  );
}

export default Footer;