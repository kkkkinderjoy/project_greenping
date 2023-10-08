import React, { useEffect, useState } from 'react'
function ScrollInfinite() {

    const [data, setData] = useState([]);
    // 가져온 데이터를 담을 스테이트
    const [loading, setLoading] = useState(false);
    // 데이터를 가져올 때 로딩을 보여줄 스테이트
    let page = 1;
    // 현재의 페이지를 나타내는 변수

    /*
        fetch 를 통해 로딩을 먼저 걸고 / 화면에서는 로딩이 보여짐
        그리고 데이터를 가져와 setData 에 배열에 기존 데이터를 복사해 추가를 함
        완료가 되면 로딩이 보여지면 안되므로 false로 설정
    */
    

      const fetchData = async (currentPage) => {
        setLoading(true);
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${currentPage}`);
        const result = await response.json();
        setData(prevData => [...prevData, ...result]);
        setLoading(false);
    };
      // 최초 마운트가 되었을때는 스크롤유무와 관계 없이 1회가 시작되어야 하므로 fetch를 마운트 되었을 때 실행  
    useEffect(() => {
        fetchData(page);
    }, [page]);
    
    

      // 비동기적인 표현을 위해, 로딩과 페이지 값이 변경 되면 스크롤 이벤트를 다시 실행하기 위해 useEffect를 적용
      // window.scrollY -  브라우저 창 상단에서 현재 스크롤된 위치까지의 거리(픽셀)
      // window.innerHeight - 브라우저 창의 높이(픽셀), 현재 보이는 뷰포트의 높이
    // 이 둘을 더하면 뷰포트의 맨 아래 부분의 절대 위치 표현
    // document.documentElement.scrollHeight - 전체 문서의 높이(스크롤이 가능한 모든 영역 포함)
    // 조건문을 통해 맨 아래의 위치 값과 전체 문서의 값이 다르다면 (즉 끝까지 안내려왔다면 리턴) 쉽게 말해 끝까지 왔다면 트루
    // 로딩이 눈에 보인다면 실행하지 말고 리턴
    // 위 조건이 아니라면 fetch 데이터를 다시 실행 - 실행시 현재의 페이지 + 1

    useEffect(() => {
        const scrollEvent = () => {
            if (window.scrollY + window.innerHeight !== document.documentElement.scrollHeight || loading) return;
            fetchData(page + 1); 
        };
        
        window.addEventListener('scroll', scrollEvent);
        return () => window.removeEventListener('scroll', scrollEvent);
    }, [loading, page]);

  return (
    <>
         {data.map(item => (
      <div key={item.id}>
        <p>{item.id}</p>
        <p>{item.title}</p>
        <p>{item.url}</p>
      </div>
    ))}
    {loading && <div>Loading...</div>}
    </>
  )
}

export default ScrollInfinite