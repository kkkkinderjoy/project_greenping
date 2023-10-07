import React from 'react';

function TimeGap({ timestamp }) {
  console.log(timestamp)
  const getTimegap = () => {
    const createTime = timestamp.toMillis(); 
    const timeDiff = Date.now() - createTime;

    const minutegap = Math.floor(timeDiff / (1000 * 60)); 
    const hourgap = Math.floor(timeDiff / (1000 * 60 * 60));

    if (timeDiff <= 1) {
      return "방금";
    }

     if (hourgap > 24) {
       return timestamp.toDate().toLocaleDateString(); 
     }

     if (minutegap > 60) {
       return `${hourgap}시간 전`;
     } else {
       return `${minutegap}분 전`;
     }
  };

  return (
    <>
      <p>{getTimegap()}</p>
    </>
  );
}

export default TimeGap;



  