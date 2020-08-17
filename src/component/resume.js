import React, { Component } from "react"
import {Grid , Cell } from 'react-mdl'
import { grey } from "color-name";
import Education from "./education";
import Experience from "./experience";
import mayur from "../mayur.jpeg"

import Skils from './skils';
import Project from "./project";
import Certificate from "./certificate";


export default class Resume extends Component{

render(){

return(
<div>

<Grid>

    <Cell col={4}>
        <div style={{textAlign:'center'}}>
            <img
            src={mayur}
        
            style={{ height: '22em'}}/>


        </div>
        <h2 style={{paddingTop: '0.1em'}}>Er Mayur Nemade</h2>
        <h3 style={{color:'chocolate'}}>Programmer</h3>

    
        <p>Front End Developer React js</p>

        
        <h4>-----------------Address-----------------</h4>
        <p>Shankar Nagar , Akot file Akola , 444003</p>

        <h4>----------------Mobile No----------------</h4>
        <p>8408095657</p>

        <h4>-------------------Email-------------------</h4>
        <p>mayur93nemade@gmail.com</p>

        <h4>--------------------web--------------------</h4>
        <p>my web.com</p>
        
        </Cell>
    <Cell className="resume-right-col" col={8}>

        <h2>Education</h2>

        <Education
        startYear={2004}
        endYear={2009}
        schoolName="New English High School, Akola"
        schoolDescription="High School"
        />

<Education
        startYear={2011}
        endYear={2014}
        schoolName="Bhonsla College Of Polytechnic,Akola"
        schoolDescription="Electronics and Telecommunication Engineering"
        />

<Education
        startYear={2014}
        endYear={2017}
        schoolName="Bhonsla College Of Engineering And Research,Akola"
        schoolDescription="Electrical Engineering"
        />

        <hr style={{borderTop: '3px solid #e22947'}}/>


        <h2>Experience</h2>

        <Experience
        startYear={2019}
        endYear={2020}
        jobName ="Sunbeam Institute Of Information Technology,Pune"
        jobDescription="Software Developer (Trainee)"
        />
                <hr style={{borderTop: '3px solid #e22947'}}/>


                <h2>Skills</h2>
                <Skils
                skils="Java"
                progress={75}
                />
                <Skils
                skils="Database(Mysql)"
                progress={90}
              
                />
              <Skils
                skils="React js"
                progress={80}
              
                />
                <Skils
                skils="Data Structure"
                progress={65}
              
                />
                <hr style={{borderTop: '3px solid #e22947'}}/>

                <h2>Project</h2>
                
                <Project
                colege="Engineering Project"
                projectName="Transformer Monitoring System using Gsm"
                projectDescription="poewjfw"
                
                
                />

               <Project
                colege="CDAC Project"
                projectName="Inventory And Store Management System"
                projectDescription="poewjfw"
                
                
                /> 

               
             
                 <hr style={{borderTop: '3px solid #e22947'}}/>
                 <h2>Certificate</h2>

                 <Certificate
                 courseName="Post Graduate Diploma in Advanced Computing"
                 courseDescription="abcd"
                 
                 
                 />
   

     </Cell>
</Grid>



</div>

);

}

}

