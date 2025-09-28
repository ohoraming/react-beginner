import {useCallback, useState} from "react";

const getAverage = (numbers: number[]) => {
    console.log("계산 중...");

    if (numbers.length === 0) return 0;

    const sum = numbers.reduce((acc: number, cur: number) => acc + cur);
    return sum / numbers.length; // 평균값
};

function App() {
    const [list, setList] = useState<number[]>([]);
    const [number, setNumber] = useState<string>(""); // 실제 input 태그(입력된 값은 string)에 입력된 숫자를 list 배열에 주입

    const onInsert = useCallback(
        () => {
            const newList = list.concat(parseInt(number));
            setList(newList);
            setNumber(""); // number 상태값 초기화
        }, [number, list]
        // useCallback은 첫 렌더링 때 한번만 함수 onInsert를 생성함([])
        // onInsert 안에서 사용하는 list, number는 초기값의 복사본으로 함수 안에 '닫혀(closed over)' 있음
        // 이후 number나 list가 변경되어도, onInsert는 초기 값을 계속 사용함
    ); // 컴포넌트가 처음 렌더링 될 때만 함수를 생성

    const onChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        setNumber(event.target.value);
    },[]); // 컴포넌트가 처음 렌더링 될 때만 함수를 생성

    return (
        <div>
            <input type="text" value={number} onChange={onChange}/>
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
