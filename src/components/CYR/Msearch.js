import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'



const Wrapper= styled.div`
    width: 100%;
    height: 100px;
    border-radius: 10px;
    display: block;
    @media screen and (min-width: 768px){ display: none;}
`

const Msearchbar = styled.div`
  width: 80%;
  height: 75px;
  padding: 0 1%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;
  border-radius: 10px;
  background-color: none;
  @media screen and (max-width:640px){
    position: absolute;
    top: 0px;
    margin-left: 10px;
    z-index: 10000;

  }
`

const Msearchinput = styled.input`
 border: none;
  width: 180px;
  flex-basis:23%;
  height: 75%;
  font-size: 1em;
  border: 0;
  padding-left :3%;
  appearance: none;
  -moz-appearance: none;
  border-radius: 100px;
  &:focus {
    outline: none;
    border-radius: 100px;
    border: 1px solid #2ed090;
  }
`

const NavLinkWrap = styled.div`
  background-color: #98eecc;
  font-weight: bold;
  border-radius: 100px;
  right: 0;
  width: 90px;
  height: 75%;
  a {
    display: flex;
    height: 100%;
    align-items: center;
    p {
      width: 100%;
      font-size: 1.7em;
      text-align: center;
      font-weight: bold;
      color: #fff;
    }
  }
`;



function Msearch() {
    const [userInput, setUserInput] = useState("");



    const InputValue = (e) => {
        const ValueI = e.target.value;
        setUserInput(ValueI);
      };
  return (
    <>
        <Wrapper>
            <Msearchbar>
                <Msearchinput
                    type="text" 
                    placeholder="검색어를 입력하세요" 
                    onChange={InputValue}/>
                    <NavLinkWrap>
                        <NavLink
                            to={{
                            pathname: "/msearch",
                            }}
                            state={{
                            userInput: userInput,
                            }}>
                            <p><FontAwesomeIcon icon={faMagnifyingGlass}/></p>
                        </NavLink>
                    </NavLinkWrap>
            </Msearchbar>
        </Wrapper>
    </>
  )
}

export default Msearch
