
import styled from 'styled-components'
import { useState } from 'react'

const ContentHead = styled.div`
  width: 100%;
  margin-top: 50px;
`
const ContentHeadWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`
const MenuList = styled.div`
    display: flex;
    justify-content: center;
    align-content: center;
   
  ul{
    display: flex;
    flex-direction: column;
    width: 300px;
    
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: row;
      width: 100%;
      justify-content: space-between;
    }
    li{ 
      width: 100%;
      text-align: center;
      font-size: 18px;
      border-bottom: 3px solid #eee;
      height: 100%;
      line-height: 70px;
      cursor: pointer;
      @media screen and (max-width: 768px){
        display: flex;
        justify-content: space-between;
        width: 100%;
        border-right: 1px solid #eee;
        align-content: center;
        font-size: 16px;
        line-height: 40px;
        letter-spacing: -1px;
        &.on{
          background-color: black;
          color: #fff;
        }
      }     
    }
  }
`
const ContentVideo = styled.div`
  flex-basis: 70%;

  ul{
    li{
      iframe{
        width: 100%;
        height: 400px;
      }
    }
  }
`

function Content() {
  const [camping, setCamping] = useState(0);
  const campingList = ['캠핑 안전수칙' , '캠핑재밌게', '캠핑 꿀팁', '캠핑 플레이리스트', '캠핑 용품추천'];
  const youTubeList = ['3uyjWs7L8Bs?si=rc4OM-h1rg5wWL8X,','6HXsc-KSvQQ?si=04KgBm8uY-EA3rRT','ZBo8_JcCeU4?si=Xz5EATGL8rLBFdUU','TScI7--3lvo?si=xRXrnetKgUeieIKm']  
  const [btnActive, setbtnActive] = useState(0);

  return (
    <>
  <ContentHead>
    <ContentHeadWrap>
      <MenuList>
      <ul>
        {
          campingList.map((e,i)=>{
            return(
              <li 
              className={btnActive === true ? 'on' : "" }
              onClick={()=>{setbtnActive(i) }}>{e}</li>
            )
          })
        }
      </ul>
      </MenuList>
      <ContentVideo>
      <ul>
        {
          youTubeList.map((e,i)=>{
            return(
              btnActive === i &&
              <li>
                <iframe src={`https://www.youtube.com/embed/${youTubeList[i]}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              </li>
            )
          })
        }
      </ul>
      </ContentVideo>
    </ContentHeadWrap>
  </ContentHead>
    </>
  )
}
export default Content