function PostCard({title, filename}) {

  const path = filename.split('/').pop();
  const imgName = path.split('.')[0];

  return (
    <a className={`flex flex-col h-96 w-full md:w-3/4 xl:w-1/3 justify-end items-center group relative`} href={`/blog/${path}`}>
      <img src={`blogImages/${imgName}.png`} className="absolute inset-0 w-full h-full object-cover"></img>
      <div className="flex bg-gradient-to-t from-black from-10% group-hover:from-20% w-full h-full justify-center items-end absolute">
        <div className="flex flex-col w-full m-2 items-center">
          <h1 className="font-bold text-4xl transition-transform transform group-hover:scale-110">{title}</h1>
        </div>
      </div>
    </a>
  );
}

export default PostCard;
