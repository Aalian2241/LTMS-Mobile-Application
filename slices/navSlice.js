import { createSlice, miniSerializeError } from '@reduxjs/toolkit'
const data = [
  {
    id:"1501/LFINT/22/27",
    scheduled_at: "20 November, 2022",
    origin: "A ONE LOGISTICS, Mina Jabel Ali, Dubai",
    destination: "A ONE LOGISTICS, Industrial Area 5,Industrial area,Sharjah",
    transporter: "GENTLE TRANSPORTERS",
    status:"assigned",
    load_type:"Heavy",
  }, 
  {
    id:"1501/LCB/22/50", 
    scheduled_at: "29 November, 2022",
    origin: "Peshawar,Pakistan",
    destination: "Lahore, Punjab, Pakistan",
    status:"assigned",
  },
  {
    id:"1501/LFINT/22/28",
    date: "15 Nov, 4:18PM",
    status: "Delivered",
    origin: "Lahore, Punjab, Pakistan",
    destination: "Karachi, Sindh, Pakistan",
    completed_at: "16 Nov, 4:00PM",
  }, 
  {
    id:"1501/LCTSA/22/50",
    date: "11 Nov, 9:18PM",
    status: "Cancelled",
    origin: "Peshawar, KPK, Pakistan",
    destination: "Lahore, Punjab, Pakistan",
    completed_at: "20 Nov, 4:00PM",
  }
]
const initialState = { 
    allJobs:data,
    jobNo:null,
    origin:null,
    destination:null,
    travelTimeInformation:null,
    progress:false,
    vehicleId:null,
    loadType:null,
    jobStatus:null,
    start_date:null,
    end_date:null,
    transporter:null,
    location:null,
    description:null,
    

}

export const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    setOrigin: (state, action)=> {
      state.origin= action.payload;
    },
    setDescription: (state, action)=> {
      state.description= action.payload;
    },
    setLocation: (state, action)=> {
      state.location= action.payload;
    },
    setDestination: (state, action)=> {
        state.destination= action.payload;
    },
    setTravelTimeInformation: (state, action)=> {
        state.travelTimeInformation= action.payload;
    },
    setJobNo: (state, action)=> {
      state.jobNo= action.payload;
    },
    setProgress: (state, action)=> { // active or not
      state.progress= action.payload;
    },
    setVehicleId: (state, action)=> {
      state.vehicleId= action.payload;
    },
    setLoadType: (state, action)=> {
      state.loadType= action.payload;
    },
    setJobStatus: (state, action)=> { // completed, cancelled, in-transit, picked-up
      state.jobStatus= action.payload;
    },
    setStartDate: (state, action)=> { // completed, cancelled, in-transit, picked-up
      state.start_date= action.payload;
    },
    setEndDate: (state, action)=> { // completed, cancelled, in-transit, picked-up
      state.end_date= action.payload;
    },
    setTransporter: (state, action)=> { // completed, cancelled, in-transit, picked-up
      state.end_date= action.payload;
    },
    
  },
});

// sending the data layer
export const { setOrigin,setLocation, setDescription, setDestination,setLoadType,setTransporter, setTravelTimeInformation,setStartDate,setProgress, setJobStatus, setJobNo,setEndDate } = navSlice.actions
  
// grabbing the data layer: SELECTORS
export const selectAllJobs = (state) =>state.nav.allJobs
export const selectOrigin = (state) =>state.nav.origin
export const selectLocation = (state) =>state.nav.location
export const selectDescription = (state) =>state.nav.description
export const selectDestination = (state) =>state.nav.destination
export const selectTravelTimeInformation = (state) =>state.nav.travelTimeInformation
export const selectJobNo = (state) =>state.nav.jobNo
export const selectProgress = (state) =>state.nav.progress
export const selectVehicleId = (state) =>state.nav.vehicleId
export const selectLoadType = (state) =>state.nav.loadType
export const selectJobStatus = (state) =>state.nav.jobStatus
export const selectEndDate = (state) =>state.nav.end_date
export const selectStartDate = (state) =>state.nav.start_date
export const selectTransporter = (state) =>state.nav.transporter

export default navSlice.reducer