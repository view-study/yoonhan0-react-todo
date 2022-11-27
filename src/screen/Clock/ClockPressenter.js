import React from 'react'

function ClockPressenter() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', textAlign: 'center', flexDirection: 'column' }}>
      <div style={{ height: 50, backgroundColor: 'skyblue', width: '100%' }}>
        <h3>Clock</h3>
      </div>

      <section style={{ height: 300, backgroundColor: '#ccc', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <h3>HH:MM:SS</h3>
      </section>
    </div>
  )
}

export default ClockPressenter