import { createSlice, miniSerializeError } from '@reduxjs/toolkit'

const initialState = { 
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