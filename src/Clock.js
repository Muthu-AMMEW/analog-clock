import './Clock.css';

function Clock() {

  return (
   <div className=' container-fluid'>
    <div className='row'>
      <div className='col clock'>
        <div ClassName="clock-inner-bg"></div>
          <div ClassName="clock-inner-bg">
            <div ClassName="clock-markers">
              {()=>{return(`<div ClassName="clock-mark"></div>`*60)}}
            </div>
          </div>
          <div class="needle hrs"></div>
          <div class="needle min"></div>
          <div class="needle sec"></div>
          <div class="clock-center"></div>
      </div>
    </div>
   </div>
  );
}

export default Clock;
