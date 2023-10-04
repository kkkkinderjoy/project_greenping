
import styled from 'styled-components'
import { useState } from 'react'

const Container= styled.div`
  width: 100%;
  margin: 160px 0;
`
const ContentWrap = styled.div`
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
      font-size: 1.2em;
      border-bottom: 2px solid #eee;
      height: 100%;
      line-height: 70px;
      cursor: pointer;
      @media screen and (max-width: 768px){
        display: flex;
        justify-content: space-between;
        width: 100%;
        border-right: 1px solid #eee;
        align-items: center;
        font-size: 1em;
        line-height: 40px;
        letter-spacing: -1px;
        
      }     
    }
  }
`
const ContentVideo = styled.div`
  flex-basis: 60%;
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
  const campingList = ['안전한 캠핑 즐기기' , '캠핑을 더 재밌게', '전문가가 알려주는 캠핑꿀팁', '캠핑 플레이리스트', '초보 캠퍼를 위한 캠핑템 추천'];
  const youTubeList = ['3uyjWs7L8Bs?si=rc4OM-h1rg5wWL8X,','6HXsc-KSvQQ?si=04KgBm8uY-EA3rRT','ZBo8_JcCeU4?si=Xz5EATGL8rLBFdUU','TScI7--3lvo?si=xRXrnetKgUeieIKm','KDggryzMYqA?si=aPIkyymruTmXbE-']  
  const [btnActive, setbtnActive] = useState(0);

  return (
    <>
  <Container>
    <ContentWrap>
      <MenuList>
      <ul>
        {campingList.map((e,i)=>{
            return(
              <li
              className={btnActive === true ? 'on' : "" }
              onClick={()=>{
                setbtnActive(i); 
              }} >{e}</li>
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
    </ContentWrap>
  </Container>
    </>
  )
}
export default Content