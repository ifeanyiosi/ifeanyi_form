import React, { useRef } from 'react'
import IdleTimer from 'react-idle-timer'

function IdleTimerContainer(props) {
     const {handleLogout} = props;
    const idleTimerRef =  useRef(null)
  const onIdle = () => {

    handleLogout();
     
      console.log('user is idle')
  }
  return (
    <div>
        <IdleTimer ref={idleTimerRef} timeout={60 * 1000} onIdle={onIdle}>

        </IdleTimer>
    </div>
  )
}

export default IdleTimerContainer