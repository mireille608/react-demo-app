import React from 'react';

 function welcome(props){
     console.log(props);
     let name = props.match.params.name || props.name;
     return(
         <div className="Welcome">
             Welcome,{name}
         </div>
     )


 }
 export default welcome;