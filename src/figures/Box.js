import React, {useState} from 'react';
import {useXarrow} from "react-xarrows";
import Draggable from "react-draggable";

const boxSelected='cursor-move w-24 rounded p-1 border-4 absolute border-red-500';
const box='cursor-move w-auto max-w-xs rounded p-1 border-2 absolute';

const circleSelected='cursor-move w-24 rounded-full p-1 border-4 absolute border-red-500';
const circle='cursor-move w-24 rounded-full p-1 border-2 absolute';

function Box(props) {
        const updateXarrow = useXarrow();
        const [state,setState]=useState({
            activeDrags: 0,
            controlledPosition: {
                x: props.posX, y: props.posY
            }
        });

        const onControlledDrag = (e, position) => {
            let {x, y} = position;
            setState({controlledPosition: {x, y}});
        };
        const onStart = () => {
            // setState({activeDrags: ++state.activeDrags});
        };

        const onStop = () => {
            setState({
                activeDrags: --state.activeDrags,
                controlledPosition:state.controlledPosition
            });

        };

        const dragHandlers = {onStart: onStart, onStop: onStop};
        const {controlledPosition} = state;

    function createBox() {

        if(props.boxType==='box'){
               return(
                   <div className={props.action.name==='addArrow'?props.selected.id!==props.id?boxSelected:box:box}  id={props.id}>
                       <p className={'text-center border-b'}>{props.title}</p>
                       <p className={'text-center'}>{props.content}</p>
                   </div>
               )
        }
        if(props.boxType==='circle'){
            return(
                <div  className={props.action.name==='addArrow'?props.selected.id!==props.id?circleSelected:circle:circle} id={props.id}>
                    <p className={'text-center border-b'}>{props.title}</p>
                    <p className={'text-center'}>{props.content}</p>
                </div>
            )
        }

    }

    function nexArrowId() {
        let id = 'arrow-0'
        if (props.arrows.length === 0) return id;
        else {
            const lastBox = props.arrows[props.arrows.length - 1];
            const lastNumber = Number((lastBox.id.split('-'))[1]) + 1;
            return 'arrow-' + lastNumber;
        }
    }

    function handleCLick(e) {
        if(e.button===1) {
            if(props.selected.id===props.id) {
                props.setShowOptions({box:!props.showOptions.box,arrow:false});
                props.setAction('');
            }else{
                props.setSelected({id:props.id,boxType:props.boxType,title:props.title,content:props.content,type:'box'});
                props.setShowOptions({box:true,arrow:false});
            }
        }
        if(e.button===0){
            switch (props.action.name) {
                case 'addArrow':
                    props.setArrows([...props.arrows,{id:nexArrowId(),start:props.selected.id, end:props.id,
                        dotted:props.action.options.dotted, label:'label'}]);
                    break;
                default :
                    props.setAction('');
                    break;
            }

        }
    }

    return (
            <Draggable position={controlledPosition} {...dragHandlers} onDrag={onControlledDrag}
                       onStop={updateXarrow}   bounds={{top: 0, left: 0}}
                        onMouseDown={(e)=>handleCLick(e)}>
                {createBox()}
            </Draggable>

        );
}

export default Box;