import axios from "axios";

const api = "https://aircall-job.herokuapp.com"

class ActivitiesApi {

    GetAllCallActivities() {
        return axios.get(api+"/activities")
    }

    GetCallActivityDetails(callId) {
        return axios.get(api + "/activities/" + callId)
    }

    UpdateCallActivityDetail(callId, isArchive) {
        const callDetail = {
            is_archived : isArchive
        }
        axios.post(api + "/activities/" + callId, callDetail)
        .then(response => {
            console.log(" Post response " +response.data)
        })
    }
}

export default new ActivitiesApi;

