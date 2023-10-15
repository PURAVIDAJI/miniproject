import { useState } from "react";
import VolunteerItem from "./VolunteerItem";



const sortOptionList = [
    { value: "latest", name: "최신순" },
    { value: "oldest", name: "오래된 순" }
]

const filterOptionList = [
    { value: "all", name: "모두" },
    { value: "children", name: "보육원" },
    { value: "seniors", name: "양로원" },
    { value: "arts", name: "문화&예술봉사" },
    { value: "education", name: "교육/재능나눔" },
    { value: "animal", name: "유기동물보호" },
    { value: "environment", name: "환경봉사" },


]


const ControlMenu = ({ value, onChange, optionList }) => {
    return (
        <select
            className="ControlMenu"
            value={value}
            onChange={(e) => onChange(e.target.value)}>
            {optionList.map((it, idx) =>
                <option key={idx} value={it.value}>
                    {it.name}

                </option>)}

        </select>);
}


const VolunteerList = ({ VolunteerList }) => {
    const [sortType, setSortType] = useState("latest");
    const [filter, setFilter] = useState("all");

    const getProcessdVolunteerList = () => {

        const copyList = JSON.parse(JSON.stringify(VolunteerList));
        //배열을 제이슨화 시킨 후 => parse를 수행시켜서 배열로 복구한 것을 저장 
        //=> 원본 안건드리고 깊은 복사

        const filterCallBack = (item) => {
            if (filter === "children") {
                return parseInt(item.category) === 1;
            } else if (filter === "seniors") {
                return parseInt(item.category) === 2;
            } else if (filter === "arts") {
                return parseInt(item.category) === 3;
            } else if (filter === "education") {
                return parseInt(item.category) === 4;
            } else if (filter === "animal") {
                return parseInt(item.category) === 5;
            } else if (filter === "environment") {
                return parseInt(item.category) === 6;
            }
            return true;
        };

        const compare = (a, b) => {
            if (sortType === 'latest') {
                return parseInt(b.date) - parseInt(a.date);
                //가장 최근이 앞에 오게
            }
            else {
                return parseInt(a.date) - parseInt(b.date);
            }
        };

        const filteredList =
            filter === "all" ? copyList : copyList.filter((it) => filterCallBack(it));

        const sortedList = filteredList.sort(compare); //소팅원리 모르겠음
        return sortedList;
    };

    return (
        <div className="VolunteerList">
            <div className="menu_wrapper">
                <div className="left_col">
                    <ControlMenu
                        value={sortType}
                        onChange={setSortType}
                        optionList={sortOptionList}
                    />
                    <ControlMenu
                        value={filter}
                        onChange={setFilter}
                        optionList={filterOptionList}
                    />
                </div>
                <div className="right_col"></div>
            </div>

            <div className="item">


                {getProcessdVolunteerList().map((it) => (
                    <VolunteerItem key={it.id} {...it} />
                )
                )}
            </div>
        </div>
    );
};

VolunteerList.defaultProps = {
    diaryList: [],

};
export default VolunteerList;