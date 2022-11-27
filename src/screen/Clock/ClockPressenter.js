import React from 'react'

function ClockPressenter({ time, onClickAlaram }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
      <div style={{ height: 50, backgroundColor: 'skyblue', width: '100%' }}>
        <h3>Clock</h3>
      </div>

      <section style={{ height: 300, backgroundColor: '#ccc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h2>{time}</h2>
      </section>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <button style={{ flex: 1, height: 30 }} onClick={onClickAlaram(1000)}>1초</button>
        <button style={{ flex: 1, height: 30 }} onClick={onClickAlaram(5000)}>5초</button>
      </div>
      
    </div>
  )
}

export default ClockPressenter