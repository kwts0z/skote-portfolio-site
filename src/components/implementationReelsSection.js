import ReactPlayer from 'react-player'
import image from '../assets/divider.svg';
import image2 from '../assets/download.svg';
import paint from '../assets/paint.jpg';
import splatter from '../assets/splatter.png';

function ImplementationReels() {

  const style ={
    aspectRatio: '16/9',
    zIndex: '10',
  };

  return (
    <div id="impReel" className='relative bg-white'>
      <div className='relative flex flex-row w-full h-full pb-20'>
        <img className="w-1/2 h-full rotate-180 z-50" src={image2} alt='divider'/>
        <img className="w-1/2 h-full rotate-180 z-50 " src={image2} alt='divider'/>
      </div>
      <img className='absolute top-0 bottom-0 w-96 h-96 z-0 m-auto' src={paint} rel=' '/>
      <img className='absolute top-80 lg:top-40 -right-52 lg:w-1/2 z-0 m-auto' src={splatter} rel=' '/>
      <div className="flex flex-col justify-center items-center pt-16 space-y-10 z-50 px-10 lg:px-36 xl:px-56">
        <div className='flex flex-row justify-center items-center space-x-5 text-black'>
          <h1>&#9679;</h1>
          <h1 className='text-3xl font-extrabold lg:text-5xl'>Implementation Reels</h1>
          <h1>&#9679;</h1>
        </div>

        <div className='flex flex-col w-full space-y-5 lg:flex-row lg:space-y-0 pt-20 items-center'>
          <div className='relative flex w-full h-full items-end'>
            <ReactPlayer width='100%' height='100%' style={style} url='https://vimeo.com/866330164' controls={true}/>
          </div>
          <div className='flex flex-col space-y-5 ml-5 pt-5 px-5 z-10 w-full text-black text-xl 2xl:text-2xl lg:w-1/2'>
              <h1 className='font-extrabold text-3xl 2xl:text-4xl'>Carbonflesh</h1>
              <h2 className='font-bold bg-white'>Sound Design and Wwise / Unity Implementation</h2>
              <p className='text-left bg-white'>Carbonflesh is an indie game that I had the honor to be included as the Sound Designer. In this video, you'll find some gameplay and examples of my implementation. The sounds have been Implemented using Wwise and Unity.</p>
          </div>
        </div>

        <div className='flex flex-col w-full items-start lg:flex-row lg:space-x-5'>
          <div className='flex flex-col w-full'>
            <ReactPlayer width='100%' height='100%' style={style} url='https://vimeo.com/870703436' controls={true}/>
            <div className='flex flex-col space-y-5 text-black bg-white pt-5 z-10 text-xl xl:text-2xl'>
              <h1 className='font-extrabold text-3xl 2xl:text-4xl'>Abandoned Hospital Demo</h1>
              <h2 className='font-bold'>Sound Design and UE 5 Implementation</h2>
              <p className='text-left pb-5'>Abandoned Hospital is a demo level that I used to practice and share my UE 5 implementation skills. This video shows the gameplay of the game. I've added all the sounds and interactions happening in the game from the environment to collecting items. </p>
            </div>
          </div>
          <div className='flex flex-col w-full'>
            <ReactPlayer width='100%' height='100%' style={style} url='https://vimeo.com/874181212' controls={true}/>
            <div className='flex flex-col space-y-5 text-black bg-white pt-5 text-xl xl:text-2xl'>
              <h1 className='font-extrabold text-3xl 2xl:text-4xl'>Space Journey Demo</h1>
              <h2 className='font-bold'>Sound Design and Fmod / Unity Implementation</h2>
              <p className='text-left pb-5'>Space Journey is a demo game that I used to practice and share my Fmod and Unity implementation skills. This video breaks down all the different sound sources and audible interactions within the game.</p>
            </div>
          </div>
        </div>
      </div>

      <img className="w-full z-50 object-cover" src={image} alt='divider'/>
    </div>
  );
}

export default ImplementationReels;
