import { useEffect, useState } from "react";
import fm from 'front-matter';
import PostCard from "./components/postCard";
import image from './assets/divider.svg';
import splatter from './assets/splatter.png';

const importAll = (r) => r.keys().map(r);
const markdownFiles = importAll(require.context('./posts', false, /\.md$/));

function Blog() {
    const [posts, setPosts] = useState([]);

    const loadPosts = async () => {
        const mdposts = await Promise.all(
            markdownFiles.map(async (file) => {
                const content = await fetch(file).then((res) => res.text());
                return { content, fileName: file};
            })
        );
        setPosts(mdposts);
    };

    useEffect(() => {
        loadPosts(); 
    }, []);
    
    return (
      <div className="flex flex-col pt-40 justify-center items-center bg-white">
        <h1 className="text-6xl text-black">Blog</h1>
        <div className="flex flex-col space-y-12 pt-10 w-full items-center p-2 z-10">
            {posts.map((post, index) => (
                <PostCard key={index} title={fm(post.content).attributes.title} filename={post.fileName}/>
            ))}
        </div>
        <img className="w-full z-50 object-cover" src={image} alt='divider'/>
        <img className='absolute top-80 lg:top-40 -right-52 lg:w-1/2 m-auto' src={splatter} alt=''/>
      </div>
    );
  }
  
export default Blog;
  