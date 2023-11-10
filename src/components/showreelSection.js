import ReactPlayer from 'react-player';
import {init} from './textAnimation';

window.onload = function() {
  init();
};

function Showreel() {
  const style ={aspectRatio: '16/9'};
  return (
    <div id="showreel" className="flex flex-col bg-black px-0 space-y-5 pt-32 justify-center items-center xl:px-56">
      <div className='flex flex-row justify-center items-center space-x-5'>
        <h1>&#9675;</h1>
        <h1 id="myText" data-value="Game Sound Design Reel" className='text-white text-gray-200 text-3xl font-extrabold lg:text-5xl'" >Game Sound Design Reel</h1>
        <h1>&#9675;</h1>
      </div>

      <ReactPlayer id="screen" width='100%' height='100%' style={style} url='https://vimeo.com/856761385' controls={true}/>
    </div>
  );
}

export default Showreel;
