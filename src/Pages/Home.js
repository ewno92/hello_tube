import React from "react";
import VideoCard from "./../components/VideoCard/VideoCard";
const Home = () => {
  return (
    <div>
      <VideoCard
        PreviewUrl="https://cdn.pixabay.com/photo/2021/03/07/16/31/person-6076771_960_720.jpg"
        profileUrl="https://cdn.pixabay.com/photo/2021/03/08/02/38/man-6077947_960_720.jpg"
        title="How to Solve Coding Problems"
        uploader="Aaron Jack"
        viewsDate="44K view 5 days ago"
      />
    </div>
  );
};

export default Home;
