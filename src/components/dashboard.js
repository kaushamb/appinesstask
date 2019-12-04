import React, { Component } from 'react'
import {Link} from "react-router-dom"
import userdata from "../data.json"
import logdata from "../components/logindata.json"

let i=1;
export default class dashboard extends Component {
    state={
        data:userdata,
      }
    
    render() {
        const card = {
            width:"270px",
            height:"200px",
            border:"3px solid green",
            borderRadius:"10px",
            backgroundColor:"red;",
            float:"left",
            FontSize:"15px",
            margin:"20px",
            paddingTop:"20px",
        };
        const floatL={
            width:"100px",
            float:"left",
            marginLeft:"10px",
        };
        const logoutButton={
            width:"80px",
            height:"35px",
            borderRadius:"7px",
            backgroundColor:"#b30000",
            textAlign:"center",
            float:"right",
            margin:"20px 40px 0 0",
            paddingTop:"4px",

        }
        const link={
            color:"white",
        }
        const dashboard={
            float:"left",
            paddingTop:"8px",
            marginLeft:"20px",
        }
        const navbar={
            height:"70px",
            width:"100%",
            backgroundColor:"#595959",
            color:"white",
            paddingBottom:"10px",
        }
        const navButton={
            color:"red",float:"left",

        }
        const search={
            width:"300px",
            height:"50px",
            border:"2px solid #ff0066",
            outline:"none",
            borderRadius:"8px",
            margin:"10px 0 0 30px",
            float:"left,"
        }
       console.log(logdata.username);
    
        return (
            <div>
                <div style={navbar}>
                    <h1 style={dashboard}>DASHBOARD</h1>
                   
                   
                    <div style={logoutButton}><Link to="/logout" style={link}>Logout</Link></div>
                </div>
                <div> 
                
               {this.state.data.user.map((resdata)=>{
                return ( 
                     
                        <div  key={i} style={card} >
                           
                           <label style={floatL}>ID:</label>     
                           <p>{resdata.id}</p>  
                           <label style={floatL}>NAME</label>
                           <p>{resdata.name}</p> 
                           <label style={floatL}>AGE</label>
                           <p>{resdata.age}</p>
                           <label style={floatL}>GENDER</label>
                           <p>{resdata.gender}</p>
                           <label style={floatL}>MAIL</label>
                           <p>{resdata.email}</p>
                        </div>
                        );
                    }           
                )
                } 

                </div> 
            </div>
        )
    }
}