import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { styled } from "styled-components";
import { Link } from "react-router-dom";

const Wrap = styled.ul`
  position: fixed;
  bottom: 4px;
  right: 30px;
  align-items: center;
  z-index: 500;
`;
const Content = styled.li`
  width: 30px;
  height: 30px;
  padding: 15px;
  border-radius: 22px;
  background-color: #ffffff;
  opacity: 0.98;
  box-shadow: 1px 1px 4px gainsboro;
  margin-bottom: 10px;
  text-align: center;
  cursor: pointer;
  font-size: 1.2em;
   img {
    width: 30px;
    height: 30px;
    color: #98eecc;
  }
`;

function Aside() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const isActiveClick = () => {
      if (window.scrollY > 350) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    window.addEventListener("scroll", isActiveClick);
  }, []);

  const moveToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <>
      {isActive && (
        <Wrap>
          <Content>
            <img src={`images/chat (1).png`} alt="" />
          </Content>
          <Content>
            <Link to="https://instagram.com/green_ping2023?igshid=MzRlODBiNWFlZA==">
              <img src={`images/instagram.png`} alt="instagram" />
            </Link>
          </Content>
          <Content onClick={moveToTop}>
            <FontAwesomeIcon className="mt-5" icon={faChevronUp} />
          </Content>
        </Wrap>
      )}
    </>
  );
}

export default Aside;
