import React from 'react'

function ProgramItem({ mission_name, flight_number, launch_year, launch_success, launch_landing ,links,mission_id }) {
    return (
        <div className="program">
            <div className="program__imageContainer">
                <img src={links.mission_patch} alt=""/>
            </div>
            <div className="program__info">
                <p className="program__infoHeader">{mission_name} #{flight_number}</p>
                <div className="program__infoRowData">
                    <span className="program__detailHeader">Mission Ids: </span><br/>
                    {mission_id.length>0 &&(
                        <ul>
                        {mission_id.map((id)=>(
                            <li key={id}>{id}</li>
                        ))}
                        </ul>
                    )}
                </div>
                <div className="program__infoRowData">
                    <span className="program__detailHeader">Launch Year: </span>
                    <span className="program__detail">{launch_year}</span>
                </div>
                <div className="program__infoRowData">
                    <span className="program__detailHeader">Successful Launch: </span>
                    <span className="program__detail">{launch_success?"true":"false"}</span>
                </div>
                <div className="program__infoRowData">
                    <span className="program__detailHeader">Successful Landing: </span>
                    <span className="program__detail">{launch_landing?"true":"false"}</span>
                </div>
            </div>
        </div>
    )
}

export default ProgramItem
