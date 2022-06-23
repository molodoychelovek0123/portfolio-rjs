// Тут когда-то была идея редактировать файлы locales, но не получилось не фортануло не повезло

import React, {useRef} from 'react';
import EditorComponent from "./components/EDITPAGE/Editor";
// import RU from '../public/locales/ru/translation.json';

function AppEdit() {
    let ref= [];
    ref.push(useRef(), useRef())
    // console.log(RU);
    return (
        <>
            <EditorComponent ref={ref[0]} />
            <div onClick={()=>{console.log(ref[0].current.state.model)}}> CLICK ME </div>
            <EditorComponent ref={ref[1]} />
            <div onClick={()=>{console.log(ref[1].current.state.model)}}> CLICK ME </div>
        </>
    );
}
export default AppEdit