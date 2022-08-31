import React from "react";
import "./css/Activity.css";
import { useNavigate } from "react-router-dom";

export const Activity = ({ activity, isArchivedList, archive, unArchive }) => {

    const callCreatedDate = new Date(activity.created_at)

    const navigate = useNavigate();

    const showCallDetails = (callId) => {
        navigate("/call/details/" + callId)
    }


    return (
        <div>
            <div className="activity-call">
                <div className="activity-call-icon">
                    {activity.call_type === "voicemail" && <img src="https://cdn-icons-png.flaticon.com/512/2934/2934436.png" alt="voice mail"/>}
                    {activity.call_type === "missed" && <img src="https://cdn-icons-png.flaticon.com/512/2227/2227858.png" alt="missed call"/>}
                    {activity.call_type === "answered" && <img src="https://cdn-icons-png.flaticon.com/512/483/483947.png" alt="answered call"/>}
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