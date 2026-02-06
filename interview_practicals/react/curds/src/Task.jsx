import React, { useState } from 'react'

function Task() {
    const [follower, setfollower] = useState(0)
    const [unfollower, setunfollower] = useState(follower)
        const [type, settype] = useState("Follow")

        const handleChange = ()=>{
           if (type == "Follow")
           {
                setfollower(prev=>prev+1)
                settype("UnFollow")

            }
            else{
                  setfollower(prev=>prev-1)
                settype("Follow")
            }
        }    
    
    return (
        
            <div
                class="container  p-4" >
              
            {/* <div className="card p-3 border-2 text-center " style={{width: "22rem"}}>
                <div className="card-body  my-3 text-center py-3">
                    <div  className='' style={{width:"300px",height:"100px"}}>
                        <img className='object-fit-cover h-100 ' src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png " alt="" />
                        <h2>Emma wilson</h2>
                       
                         
                          </div>
                    
                        {<br/>}
                       <h6 className=' mt-2 text-center'>Frontend Developer</h6>
                        
                    
                    
                </div>
                <div className="subtext my- text-center">
                    <p>Lorem ipsum dolor sit amet consectetur  aghdo9dedj adipisicing elit..</p>
                    {}
                    
                    <button onClick={()=>handleChange()} className={`btn ${type == "Follow"? "btn-primary" : 'btn-warning'} w-50 my-2`}> {type}</button>
{<hr/>}
                </div>
                <div className="footer my-1">
                    <p> followers:{follower}</p>
                </div>
                
                
            </div>
            
           
            </div>

 */}
 <div className="card p-5">hhhhh </div>
        </div>
    )
}

export default Task