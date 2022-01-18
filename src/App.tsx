import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { hours, Minutes } from "./atoms";

function App() {
  const [minute, setMinute] = useRecoilState(Minutes);
  const [hour, setHours] = useRecoilState(hours);
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    // +를 붙이는 이유 ==> string을 number로 바뀌게 해줌
    setMinute(+e.currentTarget.value);
  };
  const onHourChange = (e: React.FormEvent<HTMLInputElement>) => {
    setHours(+e.currentTarget.value);
  };
  return (
    <div>
      <input
        type="number"
        value={minute}
        onChange={onChange}
        placeholder="Write Minutes"
      />
      <input type="number" onChange={onHourChange} value={hour} />
    </div>
  );
}

export default App;
