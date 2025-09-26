import {useState} from "react";

const getAverage = (numbers: number[]) => {
    console.log("계산 중...");

    if (numbers.length === 0) return 0;

    const sum = numbers.reduce((acc: number, cur: number) => acc + cur);
    return sum / numbers.length; // 평균값
};

function App() {
    const [list, setList] = useState<number[]>([]);
    const [number, setNumber] = useState<string>(""); // 실제 input 태그(입력된 값은 string)에 입력된 숫자를 list 배열에 주입
    function onInsert() {
        const newList = list.concat(parseInt(number));
        setList(newList);
        setNumber("");
    }

    return (
        <div>
            <input type="text" value={number} onChange={(event) => setNumber(event.target.value)}/>
            <button onClick={onInsert}>등록</button>

            <ul>
                {list.map((item: number, index: number) => {
                    return <li key={index}>{item}</li>;
                })}
            </ul>
            <div>
                평균값: {getAverage(list)}
            </div>
        </div>
    );
}

export default App
