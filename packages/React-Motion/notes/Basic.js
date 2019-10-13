const Markdown = `
# Title

 <Giphy gif='cheese' />

 ~~~js
 import React, { useState } from 'react';
 import './style.css';

 const Basic = () => {
   const [infinite, setInfinite] = useState(false);
   const [playing, setPlaying] = useState(false);

   const handleInfiniteChange = e => {
     setInfinite(e.target.checked);
   };
   const handlePlayingChange = () => {
     setPlaying(!playing);
   };

   return (
     <>
       <div
         className={
           'wrapper ' + (infinite && ' infinitePlay ') + (playing && 'playing')
         }
       >
         <div className="object" />
       </div>
       <label>
         Infinite:
         <input type="checkbox" onChange={handleInfiniteChange} />
       </label>
       <input type="button" value="Play" onChange={handlePlayingChange} />
     </>
   );
 };

 export default Basic;
 ~~~
`;

export default Markdown;
