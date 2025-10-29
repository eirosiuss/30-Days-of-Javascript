
//mano versija

// import {useState} from "react"

// export default function Picture() {
//   const [background, setBackground] = useState('background--active')
//   const [picture, setPicture] = useState('')
//   function handleBackgroundChange() {
//     if (background === 'background--active') {
//     setBackground("")
// setPicture("")
//     } else {
//       setBackground('background--active')
// setPicture('')
//     }
//   }

//     function handlePictureChange(e) {
//       e.stopPropagation()
//     if (picture === '') {
//       setPicture("picture--active")
//       setBackground("")
//     } else {
//       setPicture('')
//       setBackground('background--active')
//     }
//   }
  
//   return (
//     <div className={`background ${background}`}
//       onClick={handleBackgroundChange}
//       >
//       <img
//         className={`picture ${picture}`}
//               onClick={handlePictureChange}
//         alt="Rainbow houses in Kampung Pelangi, Indonesia"
//         src="https://i.imgur.com/5qwVYb1.jpeg"
//       />
//     </div>
//   );
// }

import { useState } from 'react';

export default function Picture() {
  const [isActive, setIsActive] = useState(false);

  let backgroundClassName = 'background';
  let pictureClassName = 'picture';
  if (isActive) {
    pictureClassName += ' picture--active';
  } else {
    backgroundClassName += ' background--active';
  }

  return (
    <div
      className={backgroundClassName}
      onClick={() => setIsActive(false)}
    >
      <img
        onClick={e => {
          e.stopPropagation();
          setIsActive(true);
        }}
        className={pictureClassName}
        alt="Rainbow houses in Kampung Pelangi, Indonesia"
        src="https://i.imgur.com/5qwVYb1.jpeg"
      />
    </div>
  );
}