import React from 'react'



const DropDown = ({children}) => {
//     const dropDownRef=useRef();
// const handleClick= (e)=>{
// if(dropDownRef && !dropDownRef.current.contains(e.target)){
//     console.log('outside click');
//     onClose();
//     if(onClose){
//         onClose();

//     }
// }
// }

// useEffect(() => {
//   document.addEventListener("click", handleClick);
//   return () => {
//     document.removeEventListener("click", handleClick);
//   };
// }, []);

  return (
    <div   className='dropDown' style={{
        position:'absolute',
    top:'100%',
    zIndex:'999',
    right:'0'

    }} >
        {children}
        </div>
  )
}

export default DropDown