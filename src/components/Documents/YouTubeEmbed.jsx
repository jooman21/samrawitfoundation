// // import React, { useState, useEffect } from 'react';

// // const YouTubeEmbed = () => {
// //   const [videos, setVideos] = useState([]);

// //   useEffect(() => {
// //     // Fetch the list of video IDs from Youtubes.txt
// //     fetch('Youtubes.txt')
// //       .then(response => response.text())
// //       .then(text => {
// //         // Split the text into an array of video IDs
// //         const videoIds = text.trim().split('\n');
// //         setVideos(videoIds);
// //       });
// //   }, []);

// //   const handleClick = videoId => {
// //     // Redirect to the YouTube video when an image is clicked
// //     window.location.href = `https://www.youtube.com/watch?v=${videoId}`;
// //   };

// //   return (
// //     <div>
// //       {videos.map(videoId => (
// //         <div key={videoId} className="video-container">
// //           <img
// //             src={`./public/assets/youtube/1.png`}
// //             alt={`Thumbnail for YouTube Video ${videoId}`}
// //             onClick={() => handleClick(videoId)}
// //             style={{ cursor: 'pointer' }}
// //           />
// //         </div>
// //       ))}
// //     </div>
// //   );
// // };

// // export default YouTubeEmbed;
