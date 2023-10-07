import React, { useCallback, useEffect, useState } from 'react'
import ReviewMore from './ReviewMore';
import { useSelector } from 'react-redux';
import { collection, doc, getDocs, getFirestore, limit, orderBy, query, startAfter } from 'firebase/firestore';
import styled from 'styled-components';

const Scroller = styled.div`
    height: 50000px;
`

function Scroll(collections,limitCount,target) {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false); 
    const [loadingMore, setLoadingMore] = useState(false)
    const [key, setKey] = useState(null); 
    const [noMore, setNoMore] = useState(false);
    
    const getFirst = query(collection(getFirestore(), "review"), orderBy("timestamp"),
    limit(20)) 

    const getFirstPage  = useCallback(async () => {
        const queryRef = query(
            collection(getFirestore(), "review"),
            orderBy("timestamp", "desc"),
            limit(limitCount)
        );
        try {
          setLoading(true);
          const snap = await getDocs(queryRef);
          const docsArray = snap.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setData(docsArray);
          
          setKey(snap.docs[snap.docs.length - 1]);
        } catch (error) {
          console.log(error);
        }
        setLoading(false);
      }, [collections, limit]);

      const loadMore = useCallback(
        async (loadCount) => {
          const queryRef = query(
            collection(getFirestore(), "review"),
            orderBy("timestamp", "desc"),
            startAfter(key), // 마지막 커서 기준으로 추가 요청을 보내도록 쿼리 전송
            limit(loadCount)
          );
          try {
            const snap = await getDocs(queryRef);
            snap.empty === 0
              ? setNoMore(true) // 만약 스냅샷이 존재 하지 않는다면 더이상 불러올수 없다는 flag 설정
              : setKey(snap.docs[snap.docs.length - 1]); // 존재한다면 처음과 마찬가지고 마지막 커서 저장
            const docsArray = snap.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }));
            setData([...data, ...docsArray]); // 기존 데이터와 합쳐서 상태 저장
          } catch (err) {
            console.log(err);
          }
        },
        [collections, data, key]
      );
      const onIntersect = useCallback(
        async ([entry], observer) => {
         // 만약에 지정한 요소가 화면에 보이거나 현재 데이터를 더 불러오는 상황이 아닐경우,
         // 기존 요소의 주시를 해체하고 추가로 3개의 문서를 더 불러오도록 설정
          if (entry.isIntersecting && !loadingMore) {
            observer.unobserve(entry.target);
            setLoadingMore(true);
            await loadMore(3);
            setLoadingMore(false);
          }
        },
        [loadMore, loadingMore]
      );
    
     // 처음 화면이 랜더링 되었을때 첫번째 페이지를 문서를 가져오도록 설정
      useEffect(() => {
        getFirstPage();
      }, [getFirstPage]);
    
     // target 요소의 ref가 전달되었을때 해당 요소를 주시할수 있도록 observer 인스턴스 생성후 전달
      useEffect(() => {
        let observer;
        if (target && !noMore) {
          observer = new IntersectionObserver(onIntersect, {
            threshold: 0,
          });
          observer.observe(target);
        }
        // 메모리 해제 작업 
        return () => {
          setLoading(false);
          setLoadingMore(false);
          observer && observer.disconnect();
        };
      }, [target, onIntersect, noMore]);


      const react = useCallback(
        async ([entry], observer) => {
         // 만약에 지정한 요소가 화면에 보이거나 현재 데이터를 더 불러오는 상황이 아닐경우,
         // 기존 요소의 주시를 해체하고 추가로 3개의 문서를 더 불러오도록 설정
          if (entry.isIntersecting && !loadingMore) {
            observer.unobserve(entry.target);
            setLoadingMore(true);
            await loadMore(3);
            setLoadingMore(false);
          }
        },
        [loadMore, loadingMore]
      );
    
     // 처음 화면이 랜더링 되었을때 첫번째 페이지를 문서를 가져오도록 설정
      useEffect(() => {
        getFirstPage();
      }, [getFirstPage]);
    
     // target 요소의 ref가 전달되었을때 해당 요소를 주시할수 있도록 observer 인스턴스 생성후 전달
      useEffect(() => {
        let observer;
        if (target && !noMore) {
          observer = new IntersectionObserver(react, {
            threshold: 0,
          });
          observer.observe(target);
        }
        // 메모리 해제 작업
        return () => {
          setLoading(false);
          setLoadingMore(false);
          observer && observer.disconnect();
        };
      }, [target, react, noMore]);

  return (
   <>
   
   </>
  )
}
export default Scroll


