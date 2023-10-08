const data = [
    {
        "ID": "판매",
        "IMG" : "https://idoogen.com/web/product/medium/202309/8ad6636c92eaec24d41c4f1dd6930569.jpg",
        "TITLE": "내가 판매할 물건은?",
        "PRICE": "판매 글쓰기"
    },
    {   
        "NAME" : "수연",     
        "ID": "구매",
        "NUM": 100,
        "DATE": "2021-01-22",
        "OBJ": "가방",
        "TITLE": "모빌리티 쿨러백 보냉 가방 44L",
        "PRICE": "26,000원",
        "IMG": "https://idoogen.com/web/product/medium/202308/10315869bd60a9eece307ee0405e5670.jpg"
    },  
    {
        "NAME" : "윤정",
        "ID": "구매",
        "NUM": 101,
        "DATE": "2021-02-11",
        "OBJ": "그릴",
        "TITLE": "스톤웨이 캠핑 버너 스토브",
        "PRICE": "13,000원",
        "IMG": "https://idoogen.com/web/product/medium/202308/54f868dfac016de07bacf511b75ebd06.jpg"
    },
    {
        "NAME" : "재석",
        "ID": "구매",
        "NUM": 102,
        "DATE": "2021-03-12",
        "OBJ": "주전자",
        "TITLE": "베이직 감성 케들 캠핑 주전자 0.7L",
        "PRICE": "6,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/c3e759743302919b9dff77f2456a498d.jpg"
    },
    {
        "NAME" : "홍식",
        "ID": "구매",
        "NUM": 103,
        "DATE": "2021-04-11",
        "OBJ": "박스",
        "TITLE": "아이두젠 이지 폴딩 캠핑 박스",
        "PRICE": "53,000원",
        "IMG": "https://idoogen.com/web/product/medium/202309/cc1148b81713db234253efb995696bdd.jpg"
    },
    {
        "NAME" : "수현",
        "ID": "구매",
        "NUM": 104,
        "DATE": "2021-04-25",
        "OBJ": "램프",
        "TITLE": "블루투스 랜턴 스피커",
        "PRICE": "14,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/6665cfb4293050a974dd9af02cc412f3.jpg"
    },
    {
        "NAME" : "뚜뚜",
        "ID": "구매",
        "NUM": 105,
        "DATE": "2021-05-11",
        "OBJ": "박스",
        "TITLE": "아이두젠 다용도 에이카트",
        "PRICE": "26,000원",
        "IMG": "https://idoogen.com/web/product/medium/202304/30e59447b8d2c50405cc6a4ba2951d0d.jpg"
    },
    {
        "NAME" : "수민",
        "ID": "구매",
        "NUM": 106,
        "DATE": "2021-05-21",
        "OBJ": "침대",
        "TITLE": "폴딩 캠핑코트 야전침대",
        "PRICE": "69,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/6806bcbb69e5c1a023c2c15dfda35a95.jpg"
    },
    {
        "NAME" : "kk",
        "ID": "구매",
        "NUM": 107,
        "DATE": "2021-06-25",
        "OBJ": "테이블",
        "TITLE": "미니 알루미늄 폴딩 테이블",
        "PRICE": "46,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/2674537fb027e6fdddb9ce6a200b723a.jpg"
    },
    {
        "NAME" : "민정2",
        "ID": "구매",
        "NUM": 108,
        "DATE": "2022-03-18",
        "OBJ": "선풍기",
        "TITLE": "곰돌이 LED 선풍기",
        "PRICE": "13,000원",
        "IMG": "https://idoogen.com/web/product/medium/202305/a0477960b2bbf466b5cdd5eac50307f4.jpg"
    },
    {
        "NAME" : "soo",
        "ID": "구매",
        "NUM": 109,
        "DATE": "2022-04-07",
        "OBJ": "의자",
        "TITLE": "우드 캔버스 접이식 의자",
        "PRICE": "42,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/1a1fe8213275258a8ecaa023a57b464c.jpg"
    },
    {
        "NAME" : "경이",
        "ID": "구매",
        "NUM": 110,
        "DATE": "2022-06-11",
        "OBJ": "가방",
        "TITLE": "보냉 쿨러 도시락 가방",
        "PRICE": "40,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/e99898ae4f889ca25b1c77f50f309f7d.jpg"
    },
    {
        "NAME" : "현123",
        "ID": "구매",
        "NUM": 111,
        "DATE": "2022-06-22",
        "OBJ": "테이블",
        "TITLE": "키높이 캠핑테이블",
        "PRICE": "56,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/a9d8d891248db5850bb481b5219e0dda.jpg"
    },
    {
        "NAME" : "아보카도",
        "ID": "구매",
        "NUM": 112,
        "DATE": "2022-07-01",
        "OBJ": "침대",
        "TITLE": "마일드 슬리핑 핑크 침낭",
        "PRICE": "66,000원",
        "IMG": "https://idoogen.com/web/product/medium/202307/d9d6a2293f9dc18fad2b778ef31c5e6f.jpg"
    },
    {
        "NAME" : "민",
        "ID": "구매",
        "NUM": 113,
        "DATE": "2022-07-22",
        "OBJ": "램프",
        "TITLE": "LED 다용도 렌턴(오렌지)",
        "PRICE": "33,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/c3e12f77f749ad027092e454f077c07c.jpg"
    },
    {
        "NAME" : "Lee",
        "ID": "구매",
        "NUM": 114,
        "DATE": "2022-09-01",
        "OBJ": "테이블",
        "TITLE": "피크닉 3종 SET(테이블+의자2)",
        "PRICE": "41,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/7d6804475fbe1d0be3a4f0f567a8c9f0.jpg"
    },
    {
        "NAME" : "지혜",
        "ID": "구매",
        "NUM": 115,
        "DATE": "2022-10-01",
        "OBJ": "램프",
        "TITLE": "아이녹스 방수 캠핑랜턴",
        "PRICE": "9,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/931d989913a2bfa1c42186d0c5b4e455.jpg"
    },
    {
        "NAME" : "민둉",
        "ID": "구매",
        "NUM": 116,
        "DATE": "2022-10-23",
        "OBJ": "박스",
        "TITLE": "패스트캠프 핑크 박스",
        "PRICE": "22,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/6409781e83695a93c39e1acce6e91c17.jpg"
    },
    {
        "NAME" : "홍민",
        "ID": "구매",
        "NUM": 117,
        "DATE": "2022-12-10",
        "OBJ": "그릴",
        "TITLE": "미니화로대(블랙)",
        "PRICE": "12,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/172e070d4d21cef438c5116cd48ea5cf.jpg"
    },
    {
        "NAME" : "민민",
        "ID": "구매",
        "NUM": 118,
        "DATE": "2023-07-01",
        "OBJ": "의자",
        "TITLE": "초경량 롱 릴렉스 캠핑용 체어",
        "PRICE": "25,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/c28cf435812026ed28e1bd3def4f70c4.jpg"
    },
    {
        "NAME" : "수연",
        "ID": "구매",
        "NUM": 119,
        "DATE": "2023-09-01",
        "OBJ": "가방",
        "TITLE": "캠핑 미니 파우치",
        "PRICE": "33,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/a521f2453e74f37e0b0e9f891c6d8c30.jpg"
    },
    {   
        "NAME" : "유리",
        "ID": "양도",
        "NUM": 300,
        "DATE": "2021-01-02",
        "OBJ": "박스",
        "TITLE": "오픈 도어 폴딩박스",
        "PRICE": "24,900원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230419/520a9a0d479da.jpg"
    },
    {
        "NAME" : "정석2",
        "ID": "양도",
        "NUM": 301,
        "DATE": "2021-01-08",
        "OBJ": "테이블",
        "TITLE": "접이식 2단 캠핑 사다리형 선반",
        "PRICE": "28,900원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230322/18f3bf9dabd37.jpg"
    },
    {
        "NAME" : "Bee",
        "ID": "양도",
        "NUM": 302,
        "DATE": "2021-02-20",
        "OBJ": "박스",
        "TITLE": "미니 폴딩박스(8L)",
        "PRICE": "9,900원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230322/d708ad8b38f61.jpg"
    },
    {
        "NAME" : "김수환",
        "ID": "양도",
        "NUM": 303,
        "DATE": "2021-05-08",
        "OBJ": "가방",
        "TITLE": "다용도 캠핑 보관가방",
        "PRICE": "15,000원",
        "IMG": "https://idoogen.com/web/product/medium/202303/4bf1223a28763489498389e2e1b2f7cc.jpg"
    },
    {
        "NAME" : "판매자",
        "ID": "양도",
        "NUM": 304,
        "DATE": "2021-05-11",
        "OBJ": "램프",
        "TITLE": "LED 접이식 아코디언 램프(화이트)",
        "PRICE": "25,900원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230328/a134945d1c309.jpg"
    },
    {
        "NAME" : "1등",
        "ID": "양도",
        "NUM": 305,
        "DATE": "2021-07-22",
        "OBJ": "박스",
        "TITLE": "스쿠반 다용도 폴딩 바스켓",
        "PRICE": "21,900원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230526/bc0812fb62c16.jpg"
    },
    {   
        "NAME" : "수연",
        "ID": "양도",
        "NUM": 306,
        "DATE": "2022-03-08",
        "OBJ": "램프",
        "TITLE": "레벤트 빈티지 테이블 램프",
        "PRICE": "49,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230804/fa80eccbcaedc.jpg"
    },
    {
        "NAME" : "해찬",
        "ID": "양도",
        "NUM": 307,
        "DATE": "2022-05-20",
        "OBJ": "캠핑팬",
        "TITLE": "아웃도어 프리미엄 캠핑팬",
        "PRICE": "79,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230804/a814073fb6f38.jpg"
    },
    {
        "NAME" : "태용",
        "ID": "양도",
        "NUM": 308,
        "DATE": "2022-09-15",
        "OBJ": "선풍기",
        "TITLE": "캐로스 미니 이동식 에어컨",
        "PRICE": "579,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230804/19e783e033a96.jpg"
    },
    {
        "NAME" : "용용",
        "ID": "양도",
        "NUM": 309,
        "DATE": "2022-09-23",
        "OBJ": "선풍기",
        "TITLE": "유니맥스 대형 박스형 선풍기 16형",
        "PRICE": "67,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230804/a3bea957b3187.jpg"
    },
    {
        "NAME" : "푸링",
        "ID": "양도",
        "NUM": 310,
        "DATE": "2022-11-01",
        "OBJ": "테이블",
        "TITLE": "알루미늄 이지 쿨러스탠드, 우드",
        "PRICE": "39,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230817/425aa7c567cc6.jpg"
    },
    {
        "NAME" : "아메리카노",
        "ID": "양도",
        "NUM": 311,
        "DATE": "2022-12-25",
        "OBJ": "그릴",
        "TITLE": "하이디웍스 쿼드앵글 폴딩 화로대 그릴",
        "PRICE": "38,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230731/ba8d4b5c27c13.jpg"
    },
    {
        "NAME" : "수연",
        "ID": "양도",
        "NUM": 312,
        "DATE": "2022-12-28",
        "OBJ": "우산",
        "TITLE": "우드그립 반자동 대형 장우산",
        "PRICE": "27,800원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230718/cb5483bfc49af.jpg"
    },
    {
        "NAME" : "수연22",
        "ID": "양도",
        "NUM": 313,
        "DATE": "2023-01-11",
        "OBJ": "우산",
        "TITLE": "클래식 무드 포플러 수동 대형 장우산",
        "PRICE": "29,800원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230718/e6da28a436061.jpg"
    },
    {
        "NAME" : "홍",
        "ID": "양도",
        "NUM": 314,
        "DATE": "2023-01-29",
        "OBJ": "의자",
        "TITLE": "하이디웍스 페스카체어",
        "PRICE": "59,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230718/7c0cdd787e6c4.jpg"
    },
    {
        "NAME" : "흥시기",
        "ID": "양도",
        "NUM": 315,
        "DATE": "2023-03-01",
        "OBJ": "의자",
        "TITLE": "하이디웍스 피스첸체어",
        "PRICE": "48,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230718/cbea2c711f17a.jpg"
    },
    {
        "NAME" : "ba",
        "ID": "양도",
        "NUM": 316,
        "DATE": "2023-03-05",
        "OBJ": "박스",
        "TITLE": "알루미늄 캠핑 수납박스 30L",
        "PRICE": "108,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230726/06d5b95987f61.jpg"
    },
    {
        "NAME" : "병아리",
        "ID": "양도",
        "NUM": 317,
        "DATE": "2023-04-11",
        "OBJ": "그릴",
        "TITLE": "하이디웍스 14인치 소형 마스터커버 그릴",
        "PRICE": "29,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230718/0c81c6949d746.jpg"
    },
    {
        "NAME" : "수연",
        "ID": "양도",
        "NUM": 318,
        "DATE": "2023-06-06",
        "OBJ": "그릴",
        "TITLE": "하이디웍스 17인치 대형 마스터커버 그릴",
        "PRICE": "54,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230718/9878c26f45674.jpg"
    },
    {
        "NAME" : "Pooo",
        "ID": "양도",
        "NUM": 319,
        "DATE": "2023-06-13",
        "OBJ": "버너",
        "TITLE": "스텐 고체연료 미니버너",
        "PRICE": "18,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230711/9653d52e08b20.jpg"
    },
    {
        "NAME" : "캠핑왕",
        "ID": "양도",
        "NUM": 320,
        "DATE": "2023-06-24",
        "OBJ": "그릴",
        "TITLE": "듀로 대형 스틸 화로대",
        "PRICE": "48,900원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230616/88a5a6e75b722.jpg"
    },
    {
        "NAME" : "민5",
        "ID": "양도",
        "NUM": 321,
        "DATE": "2023-08-08",
        "OBJ": "그릴",
        "TITLE": "폴뉴 스텐 그릴 화로대",
        "PRICE": "33,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230616/648a2e917840a.jpg"
    },
    {
        "NAME" : "춘식",
        "ID": "양도",
        "NUM": 322,
        "DATE": "2022-10-31",
        "OBJ": "주전자",
        "TITLE": "순수 티타늄 초경량 주전자 600ml",
        "PRICE": "84,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230711/9dbee683f318e.jpg"
    },
    {
        "NAME" : "수연",
        "ID": "양도",
        "NUM": 323,
        "DATE": "2022-05-11",
        "OBJ": "의자",
        "TITLE": "유니버스 릴렉스 로우 폴딩 체어",
        "PRICE": "29,000원",
        "IMG": "https://cdn.imweb.me/thumbnail/20230522/19cfa2df09ca6.jpg"
    },
    {
        "NAME" : "campingking",
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