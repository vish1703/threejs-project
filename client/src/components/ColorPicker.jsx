import React from 'react'
import{SketchPicker} from 'react-color'
import {useSnapshot} from 'valtio';
import state from '../store';


const ColorPicker = () => {
  const snap=useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}/*this color is from the state*/
        disableAlpha/*kind of opacity we have*/
        /*presetColors={[
          "#ccc" ,"#EFD4E","#2CCCE4"
        ]} preset color i.e colors we are already given ,might be use for good color suggestion for customers*/
        onChange={(color)=> state.color=color.hex}

      />      
    </div>
  )
}

export default ColorPicker
