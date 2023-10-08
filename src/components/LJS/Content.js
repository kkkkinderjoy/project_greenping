
import styled from 'styled-components'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'

const Container= styled.div`
  width: 100%;
  margin: 120px 0 200px;
`

const ContentWrap = styled.div`
  display: flex;
  flex-basis: 100%;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`

const Title = styled.div`
  font-size: 2em;
  font-weight: bold;
  margin-bottom: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
`
const Youtube= styled(FontAwesomeIcon)`
    font-size: 1.6em;
    color: #ff0000;
    
`

const MenuList = styled.div`
    flex-basis: 15%;
    display: flex;
  ul{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 550px;
    @media screen and (max-width: 768px) {
      height: 70px;
      display: flex;
      flex-direction: row;
      height: 100px;
      justify-content: space-between;
      font-size: 0.9em;
    }
    li{ 
      width: 100%;
      text-align: center;
      font-size: 1em;
      border-bottom: 1px solid #eee;
      height: 100%;
      line-height: 90px;
      cursor: pointer;
      &:nth-child(1){
        border-top: 1px solid #eee;
      }
      @media screen and (max-width: 768px){
        display: flex;
        justify-content: center;
        border: 1px solid #eee;
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
  flex-basis: 85%;
  ul{
    li{
      iframe{
        margin-top: 1px;
        width: 100%;
        height: 548px;
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
    <Title>캠핑을 위한<Youtube icon={faYoutube}/></Title>
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