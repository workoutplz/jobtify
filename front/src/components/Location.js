import { useState, useEffect } from "react";
import DropDown from "./DropDown";

const deselectedOptions = [
  "서울특별시",
  "인천광역시",
  "대구광역시",
  "대전광역시",
  "부산광역시",
  "광주광역시",
  "울산광역시",
  "세종특별자치시",
  "경기도 수원시",
  "경기도 성남시",
  "경기도 고양시",
  "경기도 용인시",
  "경기도 부천시",
  "경기도 안산시",
  "경기도 안양시",
  "경기도 남양주시",
  "경기도 화성시",
  "경기도 평택시",
  "경기도 의정부시",
  "경기도 시흥시",
  "경기도 파주시",
  "경기도 광명시",
  "경기도 김포시",
  "경기도 군포시",
  "경기도 광주시",
  "경기도 이천시",
  "경기도 양주시",
  "경기도 오산시",
  "경기도 구리시",
  "경기도 안성시",
  "경기도 포천시",
  "경기도 의왕시",
  "경기도 하남시",
  "경기도 여주시",
  "경기도 양평군",
  "경기도 동두천시",
  "경기도 과천시",
  "경기도 가평군",
  "경기도 연천군",
  "강원도 춘천시",
  "강원도 원주시",
  "강원도 강릉시",
  "강원도 동해시",
  "강원도 태백시",
  "강원도 속초시",
  "강원도 삼척시",
  "강원도 홍천군",
  "강원도 횡성군",
  "강원도 영월군",
  "강원도 평창군",
  "강원도 정선군",
  "강원도 철원군",
  "강원도 화천군",
  "강원도 양구군",
  "강원도 인제군",
  "강원도 고성군",
  "강원도 양양군",
  "충청북도 청주시",
  "충청북도 충주시",
  "충청북도 제천시",
  "충청북도 보은군",
  "충청북도 옥천군",
  "충청북도 영동군",
  "충청북도 진천군",
  "충청북도 괴산군",
  "충청북도 음성군",
  "충청북도 단양군",
  "충청북도 증평군",
  "충청남도 천안시",
  "충청남도 공주시",
  "충청남도 보령시",
  "충청남도 아산시",
  "충청남도 서산시",
  "충청남도 논산시",
  "충청남도 계룡시",
  "충청남도 당진시",
  "충청남도 금산군",
  "충청남도 연기군",
  "충청남도 부여군",
  "충청남도 서천군",
  "충청남도 청양군",
  "충청남도 홍성군",
  "충청남도 예산군",
  "충청남도 태안군",
  "전라북도 전주시",
  "전라북도 군산시",
  "전라북도 익산시",
  "전라북도 정읍시",
  "전라북도 남원시",
  "전라북도 김제시",
  "전라북도 완주군",
  "전라북도 진안군",
  "전라북도 무주군",
  "전라북도 장수군",
  "전라북도 임실군",
  "전라북도 순창군",
  "전라북도 고창군",
  "전라북도 부안군",
  "전라남도 목포시",
  "전라남도 여수시",
  "전라남도 순천시",
  "전라남도 나주시",
  "전라남도 광양시",
  "전라남도 담양군",
  "전라남도 곡성군",
  "전라남도 구례군",
  "전라남도 고흥군",
  "전라남도 보성군",
  "전라남도 화순군",
  "전라남도 장흥군",
  "전라남도 강진군",
  "전라남도 해남군",
  "전라남도 영암군",
  "전라남도 무안군",
  "전라남도 함평군",
  "전라남도 영광군",
  "전라남도 장성군",
  "전라남도 완도군",
  "전라남도 진도군",
  "전라남도 신안군",
  "경상북도 포항시",
  "경상북도 경주시",
  "경상북도 김천시",
  "경상북도 안동시",
  "경상북도 구미시",
  "경상북도 영주시",
  "경상북도 영천시",
  "경상북도 상주시",
  "경상북도 문경시",
  "경상북도 경산시",
  "경상북도 군위군",
  "경상북도 의성군",
  "경상북도 청송군",
  "경상북도 영양군",
  "경상북도 영덕군",
  "경상북도 청도군",
  "경상북도 고령군",
  "경상북도 성주군",
  "경상북도 칠곡군",
  "경상북도 예천군",
  "경상북도 봉화군",
  "경상북도 울진군",
  "경상북도 울릉군",
  "경상남도 창원시",
  "경상남도 진주시",
  "경상남도 진해시",
  "경상남도 통영시",
  "경상남도 사천시",
  "경상남도 김해시",
  "경상남도 밀양시",
  "경상남도 거제시",
  "경상남도 양산시",
  "경상남도 의령군",
  "경상남도 함안군",
  "경상남도 창녕군",
  "경상남도 고성군",
  "경상남도 남해군",
  "경상남도 하동군",
  "경상남도 산청군",
  "경상남도 함양군",
  "경상남도 거창군",
  "경상남도 합천군",
  "제주특별자치도 제주시",
  "제주특별자치도 서귀포시",
];

const Location = () => {
  const [hasText, setHasText] = useState(false); // input값 유무
  const [inputValue, setInputValue] = useState(""); // input값 상태
  const [options, setOptions] = useState(deselectedOptions); // input값을 포함하는 autocomplete 추천 리스트 확인

  useEffect(() => {
    if (inputValue === "") {
      setHasText(false);
    }
  }, [inputValue]);

  const inputChangeHandler = (e) => {
    setInputValue(e.target.value);
    setHasText(!hasText);
  };

  const dropDownClickHandler = (clickedOption) => {
    setInputValue(deselectedOptions[clickedOption]);
    console.log(clickedOption);
  };

  return (
    <div>
      <div onChange={inputChangeHandler}>
        <input
          type="text"
          id="location"
          className="mt-[8px] rounded-lg flex-1 border border-gray-300 w-[320px] py-2 px-2 bg-white text-gray-700 placeholder-gray-400 font-main text-base focus:outline-none focus:ring-2 focus:ring-red transition-all duration-150 focus:border-transparent"
          name="location"
          placeholder=""
          onChange={inputChangeHandler}
          value={inputValue}
        />
      </div>
      {inputValue ? (
        <DropDown
          options={options}
          comboBoxHandler={inputValue}
          onClick={(e) => dropDownClickHandler(e)}
        />
      ) : null}
    </div>
  );
};

export default Location;
