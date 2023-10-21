import image from '../assets/skote.jpg'

function About() {
  return (
    <div id="about" className="flex flex-col py-10 justify-center items-center space-y-5 w-full h-full px-10 xl:px-56">
      <h1 className='text-4xl text-gray-200 font-extrabold text-left'>About</h1>
      <div className="max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center max-sm:w-full">
        <div className='flex w-80 h-80 rounded-full overflow-hidden justify-center items-center sm:float-right'>
          <img className="w-full object-cover" src={image} alt='Profile'/>
        </div>
        <p className='text-xl text-gray-200 break-words text-left flex-1 space-y-5 xl:text-2xl'>
          <h1>Welcome!</h1>
          <p>Thank you for listening to my work! I’m Georgios, a game audio sound designer based in Leeds, UK originally from Athens, Greece.</p>
          <p>I’m passionate about creative audio, storytelling, and immersive design. My passion for audio began at an early age when I started playing drums and recording music with friends. I went on to earn a Bachelor’s degree in Music Technology & Acoustics. During my Bachelor’s degree, I discovered the magic of sound design and game audio as a career path. This is why I relocated to Leeds and enrolled in the Sound and Music for Interactive Games master’s program at Leeds Beckett University to further explore game audio and the industry. I also love connecting with like-minded people, which is why you can often find me attending events such as the Leeds Games Toast, Game Audio Nexus, Game Audio Symposium or the Develop:Conference.</p>
          <p>To date, I’ve been involved with a couple of indie titles such as Carbonflesh and Selini, alongside pursuing several personal projects, university assignments, and enthusiastically participating in game jams.</p>
          <p>I revel in the creative freedom this field offers, allowing me to seamlessly transition from impactful sci-fi abilities to immersing players in dark, horror soundscapes. Additionally, I love the power of procedural sound design to overcome game audio challenges. As for my preferred tools, I tend to favor Reaper for audio design, and Wwise for implementation.</p>
          <p>I am currently looking to join a dynamic audio team to produce great and unique audio experiences.</p>
        </p>
      </div>
      <div className='flex flex-col w-full lg:flex-row pt-10 lg:items-top text-2xl items-center lg:justify-start lg:space-x-40'>

        <div className='relative flex text-gray-200 flex-row space-x-10 lg:space-x-0 lg:w-2/3 justify-between'>
          <ul className='lg:w-1/3'>
            <li className='font-extrabold underline pb-5 list-none'>My favourite games:</li>
            <li>Control</li>
            <li>Apex Legends</li>
            <li>Portal 2</li>
            <li>Titanfall 2</li>
            <li>Amnesia Series</li>
          </ul>
          <ul className='lg:w-1/3'>
            <li className='font-extrabold underline pb-5 list-none'>Can't wait to play:</li>
            <li>Alan Wake 2</li>
            <li>Returnal</li>
            <li>Payday 3</li>
            <li>Ghostrunner 2</li>
            <li>The Outlast Trials</li>
          </ul>
        </div>

        <div className='flex w-full text-gray-200 justify-center lg:w-1/3 lg:justify-end lg:pr-24'>
          <ul className='pt-10 lg:pt-0'>
            <li className='font-extrabold underline pb-5 list-none'>My hobbies:</li>
            <li>Films</li>
            <li>Skateboarding</li>
            <li>Concerts</li>
            <li>Playing drums</li>
            <li>Sketching</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default About;
