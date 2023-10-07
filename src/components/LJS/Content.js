
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
      font-size: 1em;
      border-bottom: 1px solid #eee;
      height: 100%;
      line-height: 70px;
      cursor: pointer;
      &:nth-child(1){
        border-top: 1px solid #eee;
      }
      @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
        width: 100%;
        border: 1px solid gray;
        text-align: center;
        align-items: center;
        font-size: 1em;
        line-height: 40px;
        letter-spacing: -1.55px;
       

      }   
      &.on{
        background-color: #000;
        color: white;
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
        height: 500px;
      }
    }
  }
`

function Content() {
  const [camping, setCamping] = useState(0);
  const campingList = ['캠핑  안전수칙' , '캠핑 추천 레시피', '캠핑 꿀팁', '캠핑  플레이리스트', '캠핑  용품 추천'];
  const youTubeList = ['3uyjWs7L8Bs?si=rc4OM-h1rg5wWL8X,','J-Q9Om2ohfQ?si=R3Nr343ZSOizmqz6','ZBo8_JcCeU4?si=LGNtOhDD_MvCx6Pv','TScI7--3lvo?si=K79AzKygGKrzAI5m','7SkvMmhUl5I?si=9ykA86sWSyx0yHd3']  
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
              className={btnActive === i ? 'on' : "" }
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