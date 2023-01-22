import React, { useState, useEffect } from "react";

import { PostCard } from "../components";
import { getFeaturedPosts } from "../services";

const Posts = () => {
  const [allPosts, setallPosts] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    getFeaturedPosts().then((result) => {
      setallPosts(result);
      setDataLoaded(true);
    });
  }, []);

  return (
    <div className="mb-8">
      {dataLoaded &&
        allPosts.map((post, index) => <PostCard key={index} post={post} />)}
    </div>
  );
};

export default Posts;
