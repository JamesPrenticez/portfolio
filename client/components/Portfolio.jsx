import React from 'react'
import Sidebar from './Sidebar';

export default class Portfolio extends React.Component {

// Name plug
namePlug = (count) => {
    console.log("namePlug")
    var jobName = ""
    var coutner = count
    var nameArray = ['alexandra', 'andrew', 'anne', 'cathrine']
    jobName = nameArray[coutner]   
}

render(){
        const jobName = "andrew"
return(
    <>
            <Sidebar/>

            {/* <div className={jobName}>
                <div className="content">
                <img src={"./img/houses/" + `${jobName}` + "/" + `${jobName}` + ".png"} alt={jobName}></img>
                <h4>{jobName}</h4>
                <p>test</p>
                </div>
            </div> */}

            <div className="row alexandra">
                <div className="content">
                    <div className="text">
                        <h2>Alexandra</h2><br />
                        <h4>GFA:</h4><p>180m2</p><br />
                      </div>
                    <img src="./img/houses/alexandra/alexandra_elevation.png" alt="alexandra"></img>
                    <img src="./img/houses/alexandra/alexandra_3d.png" alt="alexandra"></img>
                    <img src="./img/houses/alexandra/alexandra_floor.png" alt="alexandra"></img>
                    <img src="./img/houses/alexandra/alexandra.png" alt="alexandra"></img>
                </div>
            </div>

            <div className="row andrew">
                <div className="content">
                    <div className="text">
                        <h2>Andrew</h2><br />
                        <h4>GFA:</h4><p>180m2</p><br />
                    </div>
                    <img src="./img/houses/andrew/andrew_elevation.png" alt="andrew"></img>
                    <img src="./img/houses/andrew/andrew_3d.png" alt="andrew"></img>
                    <img src="./img/houses/andrew/andrew_plan.png" alt="andrew"></img>
                    <img src="./img/houses/andrew/andrew.png" alt="andrew"></img>
                </div>
            </div>




    </>
        )
    }
}


