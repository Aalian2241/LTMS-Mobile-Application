const url= "https://memories-rp.herokuapp.com/posts";
export const getCompletedJobs = (id) => axios.get(); // get jobs that have status: completed
export const getScheduledJobs = (newPost) => axios.get(); // get jobs that are assigned
export const setJobNoStatus = (id,status) => axios.patch(); // for our system to mark status: completed, cancelled, in-progress
export const setCurrentJob = (id) => axios.delete(); // assigned currentUser.currentJob = jobs[jobs_no], jobs[2].status='inProgress'   => currentUser.currentJob= 2 ======>>> getJobInformation(2)
export const getJobInformation =   (id) => axios.patch(); // fetch the job with given id