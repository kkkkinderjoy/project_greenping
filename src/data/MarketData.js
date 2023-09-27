const data = [
    {
        "ID": "판매",
        "NUM": 1,
        "DATE": "2021-01-11",
        "OBJ": "테이블",
        "TITLE": "고밀도 브로몰딩 테이블",
        "PRICE": "56,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230518/e52f9a39cd3c2.jpg"
    },
    {
        "ID": "판매",
        "NUM": 2,
        "DATE": "2021-01-22",
        "OBJ": "침대",
        "TITLE": "자동충전 에어배드",
        "PRICE": "99,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230726/9b941230fefb6.jpg"
    },
    {
        "ID": "판매",
        "NUM": 3,
        "DATE": "2021-02-08",
        "OBJ": "선풍기",
        "TITLE": "스마텍 멀티 캠핑용 무선 선풍기",
        "PRICE": "45,800원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230718/3f65cab1bf03d.jpg"
    },
    {
        "ID": "판매",
        "NUM": 4,
        "DATE": "2021-02-14",
        "OBJ": "침대",
        "TITLE": "컴팩트 야전침대",
        "PRICE": "94,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230605/94ce2fcfb5c46.jpg"
    },
    {
        "ID": "판매",
        "NUM": 5,
        "DATE": "2021-02-22",
        "OBJ": "테이블",
        "TITLE": "쿠킹랙 멀티테이블용(스테인리스)",
        "PRICE": "84,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230303/0f47aaa0a3842.jpg"
    },
    {
        "ID": "판매",
        "NUM": 6,
        "DATE": "2021-03-02",
        "OBJ": "테이블",
        "TITLE": "경량 우드 테이블",
        "PRICE": "72,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230602/2b1ea39367f92.jpg"
    },
    {
        "ID": "판매",
        "NUM": 7,
        "DATE": "2021-05-05",
        "OBJ": "선풍기",
        "TITLE": "LED 무선 선풍기",
        "PRICE": "53,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230601/c17541becd137.jpg"
    },
    {
        "ID": "판매",
        "NUM": 8,
        "DATE": "2021-05-22",
        "OBJ": "선풍기",
        "TITLE": "넥밴드 선풍기 NF88",
        "PRICE": "99,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230601/5ee40127681bd.jpg"
    },
    {
        "ID": "판매",
        "NUM": 9,
        "DATE": "2021-06-02",
        "OBJ": "그릴",
        "TITLE": "일회용 바베큐 그릴 세트",
        "PRICE": "7,300원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230526/a67177f1c25f3.png"
    },
    {
        "ID": "판매",
        "NUM": 10,
        "DATE": "2021-07-11",
        "OBJ": "선풍기",
        "TITLE": "접이식 타워 무선 선풍기",
        "PRICE": "45,800원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230515/62a5f515344e8.jpg"
    },
    {
        "ID": "판매",
        "NUM": 11,
        "DATE": "2021-07-21",
        "OBJ": "그릴",
        "TITLE": "스테인리스 석쇠 그릴",
        "PRICE": "24,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230519/9233d17d26ee3.jpg"
    },
    {
        "ID": "판매",
        "NUM": 12,
        "DATE": "2021-07-29",
        "OBJ": "그릴",
        "TITLE": "인덕션 그리들팬",
        "PRICE": "45,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230519/bf9c660c97e9c.jpg"
    },
    {
        "ID": "판매",
        "NUM": 13,
        "DATE": "2022-01-11",
        "OBJ": "테이블",
        "TITLE": "웨건 전용 우드 상판",
        "PRICE": "49,800원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230616/b9937931ea322.jpg"
    },
    {
        "ID": "판매",
        "NUM": 14,
        "DATE": "2022-03-09",
        "OBJ": "가방",
        "TITLE": "카모 접이식 멀티 가방",
        "PRICE": "12,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230616/d0bb819176ca3.jpg"
    },
    {
        "ID": "판매",
        "NUM": 15,
        "DATE": "2022-04-16",
        "OBJ": "박스",
        "TITLE": "갈바늄강판 쉘프 컨테이너",
        "PRICE": "85,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230616/27241fcb541f6.jpg"
    },
    {
        "ID": "판매",
        "NUM": 16,
        "DATE": "2022-04-29",
        "OBJ": "박스",
        "TITLE": "5면 오픈형 캠핑 폴딩박스 36L",
        "PRICE": "29,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230519/237e3b64a6650.jpg"
    },
    {
        "ID": "판매",
        "NUM": 17,
        "DATE": "2022-05-11",
        "OBJ": "의자",
        "TITLE": "플래톤 폴딩 체어",
        "PRICE": "20,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230522/e27c5c19fc38b.jpg"
    },
    {
        "ID": "판매",
        "NUM": 18,
        "DATE": "2022-06-20",
        "OBJ": "의자",
        "TITLE": "빈티지 릴렉스 로우체어",
        "PRICE": "72,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230223/d7cf5467047d4.jpg"
    },
    {
        "ID": "판매",
        "NUM": 19,
        "DATE": "2022-08-20",
        "OBJ": "박스",
        "TITLE": "접이식 폴딩카트 58L",
        "PRICE": "59,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230523/03d9204324a13.jpg"
    },
    {
        "ID": "판매",
        "NUM": 20,
        "DATE": "2022-08-30",
        "OBJ": "텐트",
        "TITLE": "원터치 대형 육각텐트(블랙)",
        "PRICE": "98,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230314/76060963a6290.jpg"
    },
    {
        "ID": "판매",
        "NUM": 21,
        "DATE": "2022-11-11",
        "OBJ": "선풍기",
        "TITLE": "큐팬 무선 탁상용 선풍기",
        "PRICE": "31,900원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230515/51c176399e255.jpg"
    },
    {
        "ID": "판매",
        "NUM": 22,
        "DATE": "2022-11-28",
        "OBJ": "텐트",
        "TITLE": "프리미엄 텍타타프 텐트",
        "PRICE": "98,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230519/b973eeb81d632.jpg"
    },
    {
        "ID": "판매",
        "NUM": 23,
        "DATE": "2022-12-12",
        "OBJ": "텐트",
        "TITLE": "오토 스퀘어 텐트",
        "PRICE": "31,900원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230512/bd7c41232c2d4.png"
    },
    {
        "ID": "판매",
        "NUM": 24,
        "DATE": "2022-12-31",
        "OBJ": "테이블",
        "TITLE": "초경량 캠핑 테이블",
        "PRICE": "26,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230322/59acae2a1c898.png"
    },
    {
        "ID": "판매",
        "NUM": 25,
        "DATE": "2023-01-01",
        "OBJ": "램프",
        "TITLE": "LED 캠핑 랜턴",
        "PRICE": "19,800원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230616/a235cf2674fe4.jpg"
    },
    {
        "ID": "판매",
        "NUM": 26,
        "DATE": "2023-01-11",
        "OBJ": "램프",
        "TITLE": "LED 멀티 랜턴",
        "PRICE": "25,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230616/98ffef55e8075.jpg"
    },
    {
        "ID": "판매",
        "NUM": 27,
        "DATE": "2023-03-11",
        "OBJ": "그릴",
        "TITLE": "빅파이어 토치(이소/부탄)",
        "PRICE": "24,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230306/11bbd7d12e737.jpg"
    },
    {
        "ID": "판매",
        "NUM": 28,
        "DATE": "2023-04-20",
        "OBJ": "침대",
        "TITLE": "12T 배게 일체형 에어매트",
        "PRICE": "69,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230602/ad94a4cba74d0.jpg"
    },
    {
        "ID": "판매",
        "NUM": 29,
        "DATE": "2023-05-11",
        "OBJ": "의자",
        "TITLE": "컴팩트 체어 1+1 세트",
        "PRICE": "66,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230512/762dad4d89d88.png"
    },
    {
        "ID": "판매",
        "NUM": 30,
        "DATE": "2023-07-15",
        "OBJ": "텐트",
        "TITLE": "슬라이드 3단 알루미늄 폴대 세트",
        "PRICE": "39,800원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230515/6710bf06021a7.jpg"
    },
    {        
        "ID": "구매",
        "NUM": 100,
        "DATE": "2021-01-22",
        "OBJ": "가방",
        "TITLE": "모빌리티 쿨러백 보냉 가방 44L",
        "PRICE": "26,000원",
        "IMG": "https://idoogen.com/web/product/medium/202308/10315869bd60a9eece307ee0405e5670.jpg"
    },  
    {
        "ID": "구매",
        "NUM": 101,
        "DATE": "2021-02-11",
        "OBJ": "그릴",
        "TITLE": "스톤웨이 캠핑 버너 스토브",
        "PRICE": "13,000원",
        "IMG": "https://idoogen.com/web/product/medium/202308/54f868dfac016de07bacf511b75ebd06.jpg"
    },
    {
        "ID": "구매",
        "NUM": 102,
        "DATE": "2021-03-12",
        "OBJ": "주전자",
        "TITLE": "베이직 감성 케들 캠핑 주전자 0.7L",
        "PRICE": "6,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/c3e759743302919b9dff77f2456a498d.jpg"
    },
    {
        "ID": "구매",
        "NUM": 103,
        "DATE": "2021-04-11",
        "OBJ": "박스",
        "TITLE": "아이두젠 이지 폴딩 캠핑 박스",
        "PRICE": "53,000원",
        "IMG": "https://idoogen.com/web/product/medium/202309/cc1148b81713db234253efb995696bdd.jpg"
    },
    {
        "ID": "구매",
        "NUM": 104,
        "DATE": "2021-04-25",
        "OBJ": "램프",
        "TITLE": "블루투스 랜턴 스피커",
        "PRICE": "14,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/6665cfb4293050a974dd9af02cc412f3.jpg"
    },
    {
        "ID": "구매",
        "NUM": 105,
        "DATE": "2021-05-11",
        "OBJ": "박스",
        "TITLE": "아이두젠 다용도 에이카트",
        "PRICE": "26,000원",
        "IMG": "https://idoogen.com/web/product/medium/202304/30e59447b8d2c50405cc6a4ba2951d0d.jpg"
    },
    {
        "ID": "구매",
        "NUM": 106,
        "DATE": "2021-05-21",
        "OBJ": "침대",
        "TITLE": "폴딩 캠핑코트 야전침대",
        "PRICE": "69,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/6806bcbb69e5c1a023c2c15dfda35a95.jpg"
    },
    {
        "ID": "구매",
        "NUM": 107,
        "DATE": "2021-06-25",
        "OBJ": "테이블",
        "TITLE": "미니 알루미늄 폴딩 테이블",
        "PRICE": "46,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/2674537fb027e6fdddb9ce6a200b723a.jpg"
    },
    {
        "ID": "구매",
        "NUM": 108,
        "DATE": "2022-03-18",
        "OBJ": "선풍기",
        "TITLE": "곰돌이 LED 선풍기",
        "PRICE": "13,000원",
        "IMG": "https://idoogen.com/web/product/medium/202305/a0477960b2bbf466b5cdd5eac50307f4.jpg"
    },
    {
        "ID": "구매",
        "NUM": 109,
        "DATE": "2022-04-07",
        "OBJ": "의자",
        "TITLE": "우드 캔버스 접이식 의자",
        "PRICE": "42,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/1a1fe8213275258a8ecaa023a57b464c.jpg"
    },
    {
        "ID": "구매",
        "NUM": 110,
        "DATE": "2022-06-11",
        "OBJ": "가방",
        "TITLE": "보냉 쿨러 도시락 가방",
        "PRICE": "40,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/e99898ae4f889ca25b1c77f50f309f7d.jpg"
    },
    {
        "ID": "구매",
        "NUM": 111,
        "DATE": "2022-06-22",
        "OBJ": "테이블",
        "TITLE": "키높이 캠핑테이블",
        "PRICE": "56,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/a9d8d891248db5850bb481b5219e0dda.jpg"
    },
    {
        "ID": "구매",
        "NUM": 112,
        "DATE": "2022-07-01",
        "OBJ": "침대",
        "TITLE": "마일드 슬리핑 핑크 침낭",
        "PRICE": "66,000원",
        "IMG": "https://idoogen.com/web/product/medium/202307/d9d6a2293f9dc18fad2b778ef31c5e6f.jpg"
    },
    {
        "ID": "구매",
        "NUM": 113,
        "DATE": "2022-07-22",
        "OBJ": "램프",
        "TITLE": "LED 다용도 렌턴(오렌지)",
        "PRICE": "33,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/c3e12f77f749ad027092e454f077c07c.jpg"
    },
    {
        "ID": "구매",
        "NUM": 114,
        "DATE": "2022-09-01",
        "OBJ": "테이블",
        "TITLE": "피크닉 3종 SET(테이블+의자2)",
        "PRICE": "41,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/7d6804475fbe1d0be3a4f0f567a8c9f0.jpg"
    },
    {
        "ID": "구매",
        "NUM": 115,
        "DATE": "2022-10-01",
        "OBJ": "램프",
        "TITLE": "아이녹스 방수 캠핑랜턴",
        "PRICE": "9,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/931d989913a2bfa1c42186d0c5b4e455.jpg"
    },
    {
        "ID": "구매",
        "NUM": 116,
        "DATE": "2022-10-23",
        "OBJ": "박스",
        "TITLE": "패스트캠프 핑크 박스",
        "PRICE": "22,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/6409781e83695a93c39e1acce6e91c17.jpg"
    },
    {
        "ID": "구매",
        "NUM": 117,
        "DATE": "2022-12-10",
        "OBJ": "그릴",
        "TITLE": "미니화로대(블랙)",
        "PRICE": "12,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/172e070d4d21cef438c5116cd48ea5cf.jpg"
    },
    {
        "ID": "구매",
        "NUM": 118,
        "DATE": "2023-07-01",
        "OBJ": "의자",
        "TITLE": "초경량 롱 릴렉스 캠핑용 체어",
        "PRICE": "25,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/c28cf435812026ed28e1bd3def4f70c4.jpg"
    },
    {
        "ID": "구매",
        "NUM": 119,
        "DATE": "2023-09-01",
        "OBJ": "가방",
        "TITLE": "캠핑 미니 파우치",
        "PRICE": "33,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/a521f2453e74f37e0b0e9f891c6d8c30.jpg"
    },
    {   
        "ID": "양도",
        "NUM": 300,
        "DATE": "2021-01-02",
        "OBJ": "박스",
        "TITLE": "오픈 도어 폴딩박스",
        "PRICE": "24,900원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230419/520a9a0d479da.jpg"
    },
    {
        "ID": "양도",
        "NUM": 301,
        "DATE": "2021-01-08",
        "OBJ": "테이블",
        "TITLE": "접이식 2단 캠핑 사다리형 선반",
        "PRICE": "28,900원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230322/18f3bf9dabd37.jpg"
    },
    {
        "ID": "양도",
        "NUM": 302,
        "DATE": "2021-02-20",
        "OBJ": "박스",
        "TITLE": "미니 폴딩박스(8L)",
        "PRICE": "9,900원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230322/d708ad8b38f61.jpg"
    },
    {
        "ID": "양도",
        "NUM": 303,
        "DATE": "2021-05-08",
        "OBJ": "가방",
        "TITLE": "다용도 캠핑 보관가방",
        "PRICE": "15,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/4bf1223a28763489498389e2e1b2f7cc.jpg"
    },
    {
        "ID": "양도",
        "NUM": 304,
        "DATE": "2021-05-11",
        "OBJ": "램프",
        "TITLE": "LED 접이식 아코디언 램프(화이트)",
        "PRICE": "25,900원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230328/a134945d1c309.jpg"
    },
    {
        "ID": "양도",
        "NUM": 305,
        "DATE": "2021-07-22",
        "OBJ": "박스",
        "TITLE": "스쿠반 다용도 폴딩 바스켓",
        "PRICE": "21,900원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230526/bc0812fb62c16.jpg"
    },
    {   
        "ID": "양도",
        "NUM": 306,
        "DATE": "2022-03-08",
        "OBJ": "램프",
        "TITLE": "레벤트 빈티지 테이블 램프",
        "PRICE": "49,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230804/fa80eccbcaedc.jpg"
    },
    {
        "ID": "양도",
        "NUM": 307,
        "DATE": "2022-05-20",
        "OBJ": "캠핑팬",
        "TITLE": "아웃도어 프리미엄 캠핑팬",
        "PRICE": "79,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230804/a814073fb6f38.jpg"
    },
    {
        "ID": "양도",
        "NUM": 308,
        "DATE": "2022-09-15",
        "OBJ": "선풍기",
        "TITLE": "캐로스 미니 이동식 에어컨",
        "PRICE": "579,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230804/19e783e033a96.jpg"
    },
    {
        "ID": "양도",
        "NUM": 309,
        "DATE": "2022-09-23",
        "OBJ": "선풍기",
        "TITLE": "유니맥스 대형 박스형 선풍기 16형",
        "PRICE": "67,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230804/a3bea957b3187.jpg"
    },
    {
        "ID": "양도",
        "NUM": 310,
        "DATE": "2022-11-01",
        "OBJ": "테이블",
        "TITLE": "알루미늄 이지 쿨러스탠드, 우드",
        "PRICE": "39,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230817/425aa7c567cc6.jpg"
    },
    {
        "ID": "양도",
        "NUM": 311,
        "DATE": "2022-12-25",
        "OBJ": "그릴",
        "TITLE": "하이디웍스 쿼드앵글 폴딩 화로대 그릴",
        "PRICE": "38,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230731/ba8d4b5c27c13.jpg"
    },
    {
        "ID": "양도",
        "NUM": 312,
        "DATE": "2022-12-28",
        "OBJ": "우산",
        "TITLE": "우드그립 반자동 대형 장우산",
        "PRICE": "27,800원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230718/cb5483bfc49af.jpg"
    },
    {
        "ID": "양도",
        "NUM": 313,
        "DATE": "2023-01-11",
        "OBJ": "우산",
        "TITLE": "클래식 무드 포플러 수동 대형 장우산",
        "PRICE": "29,800원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230718/e6da28a436061.jpg"
    },
    {
        "ID": "양도",
        "NUM": 314,
        "DATE": "2023-01-29",
        "OBJ": "의자",
        "TITLE": "하이디웍스 페스카체어",
        "PRICE": "59,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230718/7c0cdd787e6c4.jpg"
    },
    {
        "ID": "양도",
        "NUM": 315,
        "DATE": "2023-03-01",
        "OBJ": "의자",
        "TITLE": "하이디웍스 피스첸체어",
        "PRICE": "48,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230718/cbea2c711f17a.jpg"
    },
    {
        "ID": "양도",
        "NUM": 316,
        "DATE": "2023-03-05",
        "OBJ": "박스",
        "TITLE": "알루미늄 캠핑 수납박스 30L",
        "PRICE": "108,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230726/06d5b95987f61.jpg"
    },
    {
        "ID": "양도",
        "NUM": 317,
        "DATE": "2023-04-11",
        "OBJ": "그릴",
        "TITLE": "하이디웍스 14인치 소형 마스터커버 그릴",
        "PRICE": "29,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230718/0c81c6949d746.jpg"
    },
    {
        "ID": "양도",
        "NUM": 318,
        "DATE": "2023-06-06",
        "OBJ": "그릴",
        "TITLE": "하이디웍스 17인치 대형 마스터커버 그릴",
        "PRICE": "54,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230718/9878c26f45674.jpg"
    },
    {
        "ID": "양도",
        "NUM": 319,
        "DATE": "2023-06-13",
        "OBJ": "버너",
        "TITLE": "스텐 고체연료 미니버너",
        "PRICE": "18,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230711/9653d52e08b20.jpg"
    },
    {
        "ID": "양도",
        "NUM": 320,
        "DATE": "2023-06-24",
        "OBJ": "그릴",
        "TITLE": "듀로 대형 스틸 화로대",
        "PRICE": "48,900원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230616/88a5a6e75b722.jpg"
    },
    {
        "ID": "양도",
        "NUM": 321,
        "DATE": "2023-08-08",
        "OBJ": "그릴",
        "TITLE": "폴뉴 스텐 그릴 화로대",
        "PRICE": "33,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230616/648a2e917840a.jpg"
    },
    {
        "ID": "양도",
        "NUM": 322,
        "DATE": "2022-10-31",
        "OBJ": "주전자",
        "TITLE": "순수 티타늄 초경량 주전자 600ml",
        "PRICE": "84,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230711/9dbee683f318e.jpg"
    },
    {
        "ID": "양도",
        "NUM": 323,
        "DATE": "2022-05-11",
        "OBJ": "의자",
        "TITLE": "유니버스 릴렉스 로우 폴딩 체어",
        "PRICE": "29,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230522/19cfa2df09ca6.jpg"
    },
    {
        "ID": "양도",
        "NUM": 324,
        "DATE": "2023-09-02",
        "OBJ": "테이블",
        "TITLE": "필드랙 멀티테이블",
        "PRICE": "25,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230720/98dfb72e7df56.jpg"
    }
];

export default data;