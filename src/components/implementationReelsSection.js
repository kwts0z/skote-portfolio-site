import ReactPlayer from 'react-player'
import image from '../assets/download.svg';
import paint from '../assets/paint.jpg';
import splatter from '../assets/splatter.png';

function ImplementationReels() {

  const style ={
    aspectRatio: '16/9',
    zIndex: '10',
  };

  return (
    <div id="impReel" className='relative bg-white'>
      <img className="w-full rotate-180 z-50" src={image} alt='divider'/>
      <img className='absolute top-0 bottom-0 w-96 h-96 z-0 m-auto' src={paint} rel=' '/>
      <img className='absolute top-80 lg:top-40 -right-52 lg:w-1/2 z-0 m-auto' src={splatter} rel=' '/>
      <div className="flex flex-col justify-center items-center pt-16 space-y-10 z-50 px-10 lg:px-36 xl:px-56">
        <div className='flex flex-row justify-center items-center space-x-5 text-black pb-10'>
          <h1>&#9679;</h1>
          <h1 className='text-3xl font-extrabold lg:text-5xl'>Implementation Reels</h1>
          <h1>&#9679;</h1>
        </div>

        <div className='flex flex-col w-full space-y-5 lg:flex-row lg:space-y-0 pt-48 items-center'>
          <div className='relative flex w-full h-full items-end'>
            <ReactPlayer width='100%' height='100%' style={style} url='https://vimeo.com/866330164' controls={true}/>
          </div>
          <div className='flex flex-col space-y-5 ml-5 pt-5 px-5 z-10 w-full text-black bg-gray-50 shadow-xl text-xl 2xl:text-2xl lg:w-1/2'>
              <h1 className='font-extrabold'>Carbonflesh</h1>
              <p className='text-left pb-5'>Ipsum esse sint aliqua excepteur in. Commodo incididunt minim et est anim ut minim enim minim ea minim dolore eiusmod. Ullamco eiusmod aliqua ipsum amet commodo et consequat in laboris. Duis pariatur ullamco enim est in enim tempor eu aliquip ea ad voluptate aliquip non. Id est cillum ipsum ullamco veniam exercitation dolore consequat et labore in. Aute qui ullamco ea ut irure duis.</p>
          </div>
        </div>
        <div className='flex flex-col w-full space-y-10 lg:space-y-0 lg:space-x-5 lg:pt-5 lg:flex-row'>
          <div className='flex flex-col w-full space-y-5'>
            <ReactPlayer width='100%' height='100%' style={style} url='https://vimeo.com/870703436' controls={true}/>
            <div className='flex flex-col text-black bg-gray-50 pt-5 z-10 shadow-xl text-xl xl:text-3xl'>
              <h1 className='font-extrabold pb-5'>Abandoned Hospital Demo</h1>
              <p className=' shadow-xl text-left pb-5'>Ipsum esse sint aliqua excepteur in. Commodo incididunt minim et est anim ut minim enim minim ea minim dolore eiusmod. Ullamco eiusmod aliqua ipsum amet commodo et consequat in laboris. Duis pariatur ullamco enim est in enim tempor eu aliquip ea ad voluptate aliquip non. Id est cillum ipsum ullamco veniam exercitation dolore consequat et labore in. Aute qui ullamco ea ut irure duis.</p>
            </div>
          </div>
          <div className='flex flex-col w-full space-y-5'>
            <ReactPlayer width='100%' height='100%' style={style} url='https://vimeo.com/874181212' controls={true}/>
            <div className='flex flex-col text-black bg-gray-50 pt-5 shadow-xl text-xl xl:text-3xl'>
              <h1 className='font-extrabold pb-5'>Space Journey Demo</h1>
              <p className=' shadow-xl text-left pb-5'>Ipsum esse sint aliqua excepteur in. Commodo incididunt minim et est anim ut minim enim minim ea minim dolore eiusmod. Ullamco eiusmod aliqua ipsum amet commodo et consequat in laboris. Duis pariatur ullamco enim est in enim tempor eu aliquip ea ad voluptate aliquip non. Id est cillum ipsum ullamco veniam exercitation dolore consequat et labore in. Aute qui ullamco ea ut irure duis.</p>
            </div>
          </div>
        </div>
      </div>
      <img className="w-full z-50" src={image} alt='divider'/>
    </div>
  );
}

export default ImplementationReels;