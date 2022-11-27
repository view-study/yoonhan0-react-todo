import moment from "moment";
import React, {useState, useEffect} from 'react'
import ClockPressenter from './ClockPressenter'

function ClockContainer() {

  const [time, setTime] = useState("");
  const [alarm, setAlarm] = useState(null);

  useEffect(() => {
    const timeInterver = setInterval(() => {
      const time = moment().format("HH:mm:ss")
      setTime(time)
      // console.log('@@@@@@@@@@');
    }, 1000);
    
    return () => {  // 해당 페이지를 나가면 timeInterver를 꺼야함 아니면 코드가 계속 쌓임
      clearInterval(timeInterver)
    }
  }, []);

  useEffect(() => {
    return () => {
      clearTimeout(alarm)
    }
  }, [alarm]);
  

  const handleClickAlaram = (time) => () => {

    if(alarm) clearTimeout(alarm)

    const alarmTimeout = setTimeout(() => {
      alert("예약한 알람입니다!")
    }, time);

    setAlarm(alarmTimeout)
  }

  return <ClockPressenter time={time} onClickAlaram={handleClickAlaram}/>
}

export default ClockContainer