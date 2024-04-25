import { useEffect, useState } from "react";
import fm from 'front-matter';
import PostCard from "./components/postCard";

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
        <div className="flex flex-col space-y-12 pt-10 w-full items-center p-2">
            {posts.map((post, index) => (
                <PostCard key={index} title={fm(post.content).attributes.title} filename={post.fileName}/>
            ))}
        </div>
      </div>
    );
  }
  
export default Blog;
  