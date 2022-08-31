import React from "react";
import "./css/Activity.css";
import callIcon from require("../../../public/icons/phone.png");
import missedCallIcon from "../../../public/icons/missed-call.png";
import voiceMailIcon from "../../../public/icons/voicemail.png";
import { useNavigate } from "react-router-dom";

export const Activity = ({ activity, isArchivedList, archive, unArchive }) => {

    const callCreatedDate = new Date(activity.created_at)

    const navigate = useNavigate();

    const showCallDetails = (callId) => {
        console.log(" ca " + callId)
        navigate("/call/details/" + callId)
    }


    return (
        <div className="activity">
            <div className="activity-call">
                <div className="activity-call-icon">
                    {activity.call_type === "voicemail" && <img src={voiceMailIcon} alt="voice mail"/>}
                    {activity.call_type === "missed" && <img src={(missedCallIcon)} alt="missed call"/>}
                    {activity.call_type === "answered" && <img src={(callIcon)} alt="answered call"/>}
                </div>
                <div className="activity-call-info" onClick={() => { showCallDetails(activity.id) }}>
                    <h2>{activity.from}</h2>
                    {activity.direction === "inbound" && <h3>Incoming: {activity.duration / 60 } min {activity.duration % 60 } sec</h3>}
                    {activity.direction === "outbound" && <h3>Outgoing: {activity.duration / 60 } min {activity.duration % 60 } sec</h3>}
                </div>
                <div className="activity-call-time">
                    <h3>{callCreatedDate.getUTCHours() + ":" + callCreatedDate.getUTCMinutes()}</h3>
                </div>
                <div className="activity-call-archive">
                    {!isArchivedList && <button className="archiveButton" onClick={() => {archive(activity)}}  >Archive</button>}
                    {isArchivedList && <button className="unArchiveButton" onClick={() => {unArchive(activity)}} >UnArchive</button>}
                </div>
            </div>
        </div>
    )
}