import React, { useState } from 'react'
import styled from 'styled-components'
// import Card from './../data/ReviewData'


const Wrapper = styled.div`
  display: flex;
  list-style: none;
  justify-content: space-between;
  margin: 0 auto;
  width: 40%;
  margin-top: 20px;
`
const PageBtn = styled.div`
  border: 1px solid #eee;
  border-radius: 10px;
  padding: 10px 20px ;
  cursor: pointer;
 li{
    text-align: center;
 }
`

function Pagenation({total, limit, page, setPage}) {
  const [btnActive, setBtnActive] = useState("");
  const numPages = Math.ceil(total/limit);
  
  const hadlePageBtn = (e,i)=>{
    setPage(i+1);
    setBtnActive(e.target.value);
  }; // 넘버 번호 1,2,3 페이지 핸들링

    return (
    <>
        <Wrapper>
            <PageBtn onClick={()=> page !== 1 ? setPage(page-1) : page = 1}>
                <li>이전</li>
            </PageBtn>
            {
            Array(numPages).fill().map((_,i)=>(
                 <PageBtn 
                 value ={i}
                 key={i+1}
                 className={i === btnActive ? "active" : ""}
                 onClick={(e) => hadlePageBtn(e,i)}
                 aria-current={page === i +1 ? "page" : null}
                 >
                     {i+1}
             </PageBtn>
             ))
            }  
            <PageBtn onClick={()=> page !== numPages && setPage(page+1) }>
                <li>다음</li>
            </PageBtn>
        </Wrapper>
    </>
  )
}

export default Pagenation