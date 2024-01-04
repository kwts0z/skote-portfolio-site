import ReactPlayer from 'react-player'
import image from '../assets/divider.svg';
import image2 from '../assets/download.svg';
import paint from '../assets/paint.jpg';
import splatter from '../assets/splatter.png';
import "./style.css";

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
      <img className='absolute bottom-[30%] w-96 h-96 pt-6 z-0 m-auto' src={paint} rel=' '/>
      <img className='absolute top-80 lg:top-40 -right-52 lg:w-1/2 z-0 m-auto' src={splatter} rel=' '/>
      <div className="flex flex-col justify-center items-center pt-16 space-y-10 z-50 px-10 lg:px-36 xl:px-56">
        <div className='flex flex-row justify-center items-center space-x-5 text-black'>
          
          <h1 className='text-3xl font-extrabold lg:text-5xl'>Implementation Reels</h1>
          
        </div>

        <div className='flex flex-col w-full space-y-5 lg:flex-row lg:space-y-0 pt-20 items-center'>

          <div id="video-wrapper" className='relative flex w-full h-full items-end p-8'>
            <ReactPlayer width='100%' height='100%' style={style} url='https://vimeo.com/866330164' controls={true}/>  
          </div>

          <div className='flex flex-col space-y-5 ml-5 pt-5 px-5 z-10 w-full text-black text-xl 2xl:text-2xl lg:w-1/2'>
              <h1 className='font-extrabold text-3xl 2xl:text-4xl bg-white'>Carbonflesh</h1>
              <h2 className='font-bold bg-white'>Sound Design & Wwise / Unity Implementation</h2>
              <p className='text-left bg-white'>Carbonflesh is an indie game I've been working on as the Sound Designer. This video shows some brief gameplay and  examples of implementation for different parts of the game. The sounds have been implemented using Wwise and Unity.</p>
          </div>

        </div>

        <div className='flex flex-col w-full space-y-5 lg:flex-row lg:space-y-0 pt-20 items-center'>

          <div className='flex flex-col space-y-5 ml-5 pt-5 px-5 z-10 w-full text-black text-xl 2xl:text-2xl lg:w-1/2'>
              <h1 className='font-extrabold text-3xl 2xl:text-4xl'>Abandoned Hospital Breakdown</h1>
              <h2 className='font-bold bg-white'>Unreal Engine 5 Implementation</h2>
              <p className='text-left bg-white'>This video breaks down my implementation for the Abandoned Hospital using sound cues and blueprints in Unreal Engine 5. I talk about the ambience, source loops (such as sinks and bugs) and area loops (such as rain and wind), interactions (such as opening doors and collision with objects) as well as systems that check for collected items sequences or dialogue feedback. Further, I talk about audio volumes, sequences and animations, and footstep implementation.</p>
          </div>

          <div id="video-wrapper2" className='relative flex w-full h-full items-end p-8'>
            <ReactPlayer width='100%' height='100%' style={style} url='https://vimeo.com/899576845' controls={true}/>  
          </div>

        </div>

        <div className='flex flex-col w-full items-start lg:flex-row lg:space-x-5'>
          <div className='flex flex-col w-full'>
            <div id="video-wrapper3" className='relative flex w-full h-full items-end p-8'>
              <ReactPlayer width='100%' height='100%' style={style} url='https://vimeo.com/870703436' controls={true}/>
            </div>
            <div className='flex flex-col space-y-5 text-black pt-5 z-10 text-xl xl:text-2xl'>
              <h1 className='font-extrabold text-3xl 2xl:text-4xl bg-white'>Abandoned Hospital Demo</h1>
              <h2 className='font-bold bg-white'>Sound Design & Unreal Engine 5 Implementation</h2>
              <p className='text-left bg-white pb-5'>Using the Abandoned Hospital demo level in Unreal Engine, I implemented my sounds from ambience to interactions using Unreal Engine's native tools such as Sound Cues, Audio Volumes and Blueprints. Further, I have also modified the level to add more interactions and enhance the gameplay experience. These changes vary from item collection, to light changes, or moving sounds using sequencers. This video presents a gameplay example. </p>
            </div>
          </div>
          <div className='flex flex-col w-full'>
            <div id="video-wrapper4" className='relative flex w-full h-full items-end p-8'>
              <ReactPlayer width='100%' height='100%' style={style} url='https://vimeo.com/874181212' controls={true}/>
            </div>
            <div className='flex flex-col space-y-5 text-black bg-white pt-5 text-xl xl:text-2xl'>
              <h1 className='font-extrabold text-3xl 2xl:text-4xl'>Space Journey Demo</h1>
              <h2 className='font-bold'>Sound Design & Fmod / Unity Implementation</h2>
              <p className='text-left pb-5'>Space Journey is a Unity demo game that I used to demonstrate my Fmod and Unity implementation skills. This video breaks down all the different sound sources and audible interactions within the game.</p>
            </div>
          </div>
        </div>
      </div>

      <img className="w-full z-50 object-cover" src={image} alt='divider'/>
    </div>
    
  );
}

export default ImplementationReels;
