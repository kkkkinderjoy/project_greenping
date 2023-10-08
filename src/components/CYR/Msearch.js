import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'



const Wrapper= styled.div`
    width: 100%;
    height: 100px;
    border-radius: 10px;
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
  background-color: #fff;
`

const Msearchinput = styled.div`
    &input{
        width: 70%;
        height: 100%;
        color: #ddd;
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
                <Msearchinput>
                    <input type="text" placeholder="검색어를 입력하세요" onChange={InputValue}></input>
                    <NavLinkWrap>
                        <NavLink
                            to={{
                            pathname: "/msearch",
                            }}
                            state={{
                            userInput: userInput,
                            }}
                        >
                            <p><FontAwesomeIcon icon={faMagnifyingGlass}/></p>
                        </NavLink>
                    </NavLinkWrap>
                </Msearchinput>
            </Msearchbar>
        </Wrapper>
    </>
  )
}

export default Msearch
