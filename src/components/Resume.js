import React from 'react';
import data from"../data/data.json";
import Img from "../images.jpg";


export default function Resume(props) {
fetch("https://jsonplaceholder.typicode.com/posts/")
.then(res=>res.json())
.then(data=>console.log(data))

// let info=data.profiles[props.location.data.i]
// console.log(info.basic.name)
let info=data.profiles[props.location.data.i]
    return(
      
        <div className="row justify-content-center">
           <div className="col-lg-5 m-4">
           <div className="card">
<div className="card-body">
 <img src={Img} alt="profile Icon" style={{width:"30em"}}/>
<h1>{info.basic.name}</h1>
<h1>{info.basic.role}</h1>
<h5>{info.basic.phone}</h5>
<h5>{info.basic.email}</h5>
</div>
</div>
</div>
      
           <div className="col-lg-5 m-4">
          <div className="card">
         <div className="card-body">
        <h3>Career Objective:</h3>
        <p>{info.carrer}</p>
        <hr></hr>
        
        <h3>Education Details:</h3>
	    <table border="1">
 	    	<tr>
 	    		<th>Course</th>
 	    		<th>Name of the Institution</th>
 	    		<th>Year Of Passing</th>
                 <th>percentage</th>
 	    	</tr>
 	    	<tr>
 	    		<td>ssc</td>
 	    		<td>Kesava Reddy Concept School</td>
 	    		<td>2015</td>
                 <td>75%</td>
 	    	</tr>
 	    	<tr>
 	    		<td>inter</td>
 	    		<td>Sri Chaitanya Junior College</td>
 	    		<td>2017</td>
                 <td>90%</td>

 	    	</tr>
 	    	<tr>
 	    		<td>B.Tech</td>
 	    		<td>Sri Venteswara University</td>
 	    		<td>2021</td>
                 <td>75%</td>
 	    	</tr>
            
             </table>
             <hr></hr>
             <div className="col-lg-15 m-4">
          <div className="card">
         <div className="card-body">
            <h3 >Technical Skills:</h3>
           
            <p>{info.technicalskills}</p>
            <p>{info.technicalskills1}</p>
            <p>{info.technicalskills2}</p>
            </div>
            </div>
            </div>
            <div className="col-lg-15 m-4">
          <div className="card">
         <div className="card-body">
            <h3>Workshops:</h3>
            <p>{info.workshops}</p>
            <p>{info.workshops1}</p>
            </div>
            </div>
            </div>

            
    </div>
</div>
    </div>
 
        </div>
       
    )
}