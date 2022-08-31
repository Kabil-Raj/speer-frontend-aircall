import React, { useState, useEffect } from "react";
import { useParams,Link } from "react-router-dom";
import activities from "../airCallApi/ActivitiesApi"
import "./css/activityDetails.css"

export const ActivityDetail = () => {

    const { id } = useParams();

    const [callDetails, setCallDetails] = useState({})

    useEffect(() => {
        const fetchCallDetails = async () => {
            const response = await activities.GetCallActivityDetails(id);
            setCallDetails(response.data)
        }
        fetchCallDetails();
    }, [])

    return (
        <div className="activity-details">
            <div className="activity-details-info">
                <h2>From:  <span>{callDetails.from}</span></h2>
                <h2>To: <span>{callDetails.to}</span></h2>
                <h2>Duration: <span>{callDetails.duration / 60} min {callDetails.duration % 60} sec</span></h2>
                <h2>Direction: <span>{callDetails.direction}</span></h2>
                <h2>Via: <span>{callDetails.via}</span></h2>
                <h2>Archived: <span>{callDetails.is_archived}</span></h2>
                <h2>Call Type: <span>{callDetails.call_type}</span></h2>
                <h2>Created At: <span>{new Date(callDetails.created_at).getHours() + ":" + new Date(callDetails.created_at).getMinutes()}</span></h2>
            </div>
            <button className="activity-details-back"><Link to="/">Back</Link></button>
        </div>
    )
} 