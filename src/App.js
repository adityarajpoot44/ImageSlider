import React, { useState ,useEffect} from "react";
import "./App.css";
import sunjinwoo from "./assest/image/sungjinwoo.jpg";
import sunjinwoodagger from "./assest/image/sungjinwoodagger.jpg";
import naruto from "./assest/image/naruto.jpg";
import sungjin from "./assest/image/sungjin.jpg";
import igrissung from "./assest/image/igrissung.jpg";
import igris from "./assest/image/igris.jpg";
import sungjinlig from "./assest/image/sungjinwoolig.jpg";
import {RxDotFilled} from 'react-icons/rx';



function App() { 
  const slide = [
    sungjin,
    sunjinwoo,
    naruto,
    sunjinwoodagger,
    sungjinlig,
    igrissung,
    igris,
  ];
  const [curr, setcurr]=useState(0)

  const next=()=>{
    setcurr( (curr === slide.length - 1 ? 0 : curr + 1 ))
  }
  const prev=()=>{
    setcurr((curr === 0 ? slide.length - 1 : curr - 1 ))
  }
  useEffect(() => {
    const id=setInterval(() => next(),5000); 
    return () => clearInterval(id);
  });

  const gotoslide = (index)=>{
    setcurr(index)
  }
 
  return (
    <>
      <div className="text-white p-1 h-screen pt-[30px] ">
        <div className="m-auto h-[90vh] w-[400px] lg:w-[30%] overflow-hidden rounded-xl relative">
          <div className="flex relative ">
          <img className="w-full h-[90vh]" src={slide[curr]}  alt=" "/>
          {/* {slide.map((slides,index)=>(
             <img className="w-full h-full" src={slide[curr]}  alt=" "/>
          ))} */}
          </div>
          <div className=" flex absolute inset-0 justify-between">
            <button onClick={prev} className="ml-5  "><span className=" glass text-[30px] px-[25px] py-[20px]">&#x276E;</span></button>
            <button onClick={next} className="mr-5"><span className=" glass text-[30px] px-[25px] py-[20px]">&#x276F;</span></button>
          </div>
         
        </div>
        <div className="flex z t-1 py-4 justify-center">
          {slide.map((_,index)=>(
            <div key={index} onClick={()=>gotoslide(index)} className="">
              <RxDotFilled className={(index==curr)? `bg-red-400 rounded-full `:null}/>
              </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
