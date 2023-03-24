import React from 'react'

const EventComponnt: React.FC = () =>  {

  const onChange= (event: React.ChangeEvent<HTMLInputElement>) => {
  }

  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    console.log(event);
  }

  return (
    <div>
      <input onChange={(e) => console.log(e)}/>
      <div draggable onDragStart={onDragStart}>Drag me!</div>
    </div>
  )
}

export default EventComponnt;