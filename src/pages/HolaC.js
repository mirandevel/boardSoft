import React, {useRef, useState} from 'react';
import {Xwrapper} from 'react-xarrows';
import Box from "../figures/Box";
import Arrow from "../figures/Arrow";


function HolaC(props) {
    const [boxes, setBoxes] = useState([]);
    const [arrows, setArrows] = useState([]);
    const [action, setAction] = useState({});
    const [selected, setSelected] = useState({});
    const [showOptions, setShowOptions] = useState({box: false, arrow: false});


    const boxProps = {
        showOptions,
        setShowOptions,
        action,
        setAction,
        selected,
        setSelected,
        arrows,
        setArrows,
    }
    const arrowProps = {
        showOptions,
        setShowOptions,
        selected,
        setSelected,
        setAction
    }

    function nexBoxId() {
        let id = 'box-0'
        if (boxes.length === 0) return id;
        else {
            const lastBox = boxes[boxes.length - 1];
            const lastNumber = Number((lastBox.id.split('-'))[1]) + 1;
            return 'box-' + lastNumber;
        }
    }

    const handleDropDynamic = (e) => {
        let boxType = e.dataTransfer.getData('shape');
        let {x, y} = e.target.getBoundingClientRect();
        let newBox = {
            id: nexBoxId(), x: e.clientX - x, y: e.clientY - y, boxType: boxType,
            title: 'title', content: 'content'
        };
        setBoxes([...boxes, newBox]);
    };

    return (
        <div className={'flex min-h-screen'}>
            <div className={'w-48 border border-4 shadow-xl p-5 space-y-5'}>
                <div className={'rounded w-24 p-5 border-2'}
                     onDragStart={(e) => e.dataTransfer.setData('shape', 'box')}
                     draggable={'true'}>hola
                </div>
                <div className={'rounded-full w-24 p-5 border-2'}
                     onDragStart={(e) => e.dataTransfer.setData('shape', 'circle')}
                     draggable={'true'}>hola
                </div>
            </div>


            <div className={'w-full relative overflow-auto bg-blue-50'}>
                <Xwrapper>

                    <div className={'w-full h-full p-2'}
                         onDragOver={(e) => e.preventDefault()}
                         onDrop={handleDropDynamic}>
                        {boxes.map(box => {
                            return <Box key={box.id} id={box.id} boxType={box.boxType} posX={box.x} posY={box.y}
                                        {...boxProps} title={box.title} content={box.content}/>
                        })}
                        {arrows.map((arrow, index) => {
                            return <Arrow key={index} id={arrow.id} start={arrow.start} end={arrow.end}
                                          dotted={arrow.dotted}
                                          {...arrowProps} label={arrow.label}/>
                        })}
                    </div>
                </Xwrapper>
            </div>

            {showOptions.box && (<div className={'w-48 border border-4 shadow-xl p-2'}>
                <p className={'text-md font-medium text-center uppercase'}>{selected.id}</p>
                <div className={'w-full h-0.5 bg-gray-200'}/>

                <div className={'space-y-2 mt-5'}>
                    <div>
                        <label>Título</label>
                        <input className={'w-full border'} type="text" value={selected.title}
                               onChange={e => update(e, 'box', 'title')}/>
                    </div>
                    <div>
                        <label>Contenido</label>
                        <textarea className={'w-full border'} value={selected.content}
                                  onChange={e => update(e, 'box', 'content')}/>
                    </div>
                </div>
                <p className={'text-md font-medium text-center mt-8 uppercase'}>{'Conectores'}</p>
                <div className={'w-full h-0.5 bg-gray-200'}/>


                <button className={'block'} onClick={e => {
                    setAction({name: 'addArrow', options: {dotted: false}})
                }}>->
                </button>
                <button className={'block'} onClick={e => {
                    setAction({name: 'addArrow', options: {dotted: true}})
                }}>---->
                </button>

                <button className={'border-2 w-full mt-8'} onClick={e=>setShowOptions({})}>{'Cerrar'}</button>

            </div>)}

            {showOptions.arrow && (<div className={'w-48 border border-4 shadow-xl p-2'}>
                <p className={'text-md font-medium text-center uppercase'}>{selected.id}</p>
                <div className={'w-full h-0.5 bg-gray-200'}/>
                <div className={'mt-5'}>
                    <label>Label</label>
                    <input className={'w-full border'} type="text" value={selected.label}
                           onChange={e => update(e, 'arrow', 'label')}/>
                </div>

                <div className={'mt-2'}>
                <label>Conector</label>
                    <select className={'w-full'} onChange={e => update(e, 'arrow', e.target.value)}>
                    <option value="normal">-></option>
                    <option value="dotted">---></option>
                </select>
                </div>

                <button className={'border-2 w-full mt-8'} onClick={e=>setShowOptions({box: false, arrow: false})}>{'Cerrar'}</button>

            </div>)}
        </div>
    );

    function update(e, type, toUpdate) {
        if (type === 'box') {
            let updated = [...boxes];
            const position = updated.findIndex((element) => selected.id === element.id);
            const value = toUpdate === 'title' ? {title: e.target.value} : {content: e.target.value};
            updated.splice(position, 1, {...updated[position], ...value});
            setSelected({...selected, ...value});
            setBoxes(updated);
        } else {
            let updated = [...arrows];
            const position = updated.findIndex((element) => selected.id === element.id);

            let value;
            switch (toUpdate){
                case 'dotted':
                    value={dotted:true}
                    break;
                case 'label':
                    value={label:e.target.value}
                    break;
                default:
                    value={dotted:true};
                    break;
            }
            updated.splice(position, 1, {...updated[position], ...value});
            setSelected({...selected, ...value});
            setArrows(updated);
        }
    }
}

export default HolaC;