import React, {useState, useEffect} from "react";
import activities from "../airCallApi/ActivitiesApi.js";
import { Activity } from "./Activity";
import "./css/Activity.css"


export const ActivityFeed = () => {

    const [callActivites, setCallActivities] = useState([]);

    const [archivedCalls, setArchivedCalls] = useState([]);

    const [displayAllCalls,setdisplayAllCalls] = useState();

    const [displayArchivedCalls, setdisplayArchivedCalls] = useState();


    useEffect(() => {
        const fetchAllCallActivities = async () => {
            const response = await activities.GetAllCallActivities();
            (response.data.map(element => {
                if(element.is_archived) {
                    archivedCalls.push(element);
                } else {
                    callActivites.push(element);
                }
            }))
        }
        fetchAllCallActivities();
    }, [])

    const archiveCall = (archive) => {
        activities.UpdateCallActivityDetail(archive.id,true)
        archivedCalls.push(archive)
        const updatedCallActivties = callActivites.filter(activity => activity.id !== archive.id)
        setCallActivities(updatedCallActivties);
    }

    const unArchiveCall = (unarchive) => {
        activities.UpdateCallActivityDetail(unarchive.id,false)
        callActivites.push(unarchive)
        const updatedUnArchiveCallActivties = archivedCalls.filter(activity => activity.id !== unarchive.id)
        setArchivedCalls(updatedUnArchiveCallActivties);
    }


    const showCalls = () => {
        setdisplayAllCalls(true);
        setdisplayArchivedCalls(false);
    }

    const showArchivedCalls = () => {
        setdisplayAllCalls(false);
        setdisplayArchivedCalls(true);
    }

    return (
        <div className="activityFeedContainer">
        <div className="activityFeed">
            <div className="activityFeed-nav">
                <button onClick={showCalls}>All Calls</button>
                <button onClick={showArchivedCalls}>Archived Calls</button>
            </div>
           {displayAllCalls && ( callActivites.map(call => {
            return(
                <div key={call.id}>
                    <Activity activity={call} isArchivedList={false} archive={archiveCall}/>
                </div>)
           }))}
           {displayArchivedCalls && ((archivedCalls.map(call => {
            return(
                <div key={call.id}>
                    <Activity activity={call} isArchivedList={true} unArchive={unArchiveCall} />
                </div>)
           })))}
        </div>
        </div>
    )
} 