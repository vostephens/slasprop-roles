import React from "react";
import { AuthProvider } from "./hooks/useAuth";
import { Route, Routes } from 'react-router-dom';
import Login from "./pages/LoginPage";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./pages/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import RequestsSent from "./pages/LandRequestsSent";
import RequestFromLandBureau from "./pages/RequestsFromLandBureau";
import Settings from "./pages/Settings";
import Notifications from "./pages/Notifications";
import Messages from "./pages/Messages";
import FAQS from "./pages/FAQS";
import TaskDetails from "./pages/TaskDetails";
import RequestsFromSLTROfficer from "./pages/RequestsFromSLTROfficer";
import RequestsSentToSurveyorGeneral from "./pages/RequestsSentToSurveyorGeneral";
import ScheduleFieldTasks from "./pages/ScheduleFieldTasks";
import ScheduleTaskDetails from "./pages/ScheduleTaskDetails";
import GovernorApprovalRequests from "./pages/GovernorApprovalRequests";
import GovernorSentRequets from "./pages/GovernorSentRequests";
import SurveyorGeneralRequests from "./pages/SurveyorGeneralRequests";
import ManageAssistantChiefRegistrarDeeds from "./pages/ManageAssistantChiefRegistrarDeeds";
import AssignedChiefRegistrarTasks from "./pages/AssignedChiefRegistrarTasks";
import RegistrationGISOfficerRequests from "./pages/RegistrationGISOfficerRequests";
import EditTaskData from "./pages/EditTaskData";
import AssignedSLTRRequests from "./pages/AssignedSLTRRequests";
import GISParcelDataPackets from "./pages/GISParcelPacketsData";
import CreateGISParcelDataPackets from "./pages/CreateGISParcelDataPackets";
import FieldDataCollectedList from "./pages/FieldDataCollectedList";
import ParcelDetails from "./pages/ParcelDetails";
import ApprovedMapsSLTROfficer from "./pages/ApprovedMapsSLTROfficer";
import PropertyQueries from "./pages/PropertyQueries";
import PropertyQueryDetails from "./pages/PropertyQueryDetails";
import PropertyTaxQueries from "./pages/PropertyTaxQueries";
import AssignedFieldTeamTasks from "./pages/AssignedFieldTeamTasks";
import SLTRRequestsSent from "./pages/SLTRRequestsSent";
import RequestsFromFieldTeams from "./pages/RequestsFromFieldTeams";

export const ButtonViewContext = React.createContext();
export const ClaimantsViewContext = React.createContext();


const App = () =>{

    const [buttonOption, setButtonOption] = React.useState(false);
    const [isClaimants, setIsClaimants] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    return (
        <AuthProvider>
            <ClaimantsViewContext.Provider value={{isClaimants, setIsClaimants, isMenuOpen, setIsMenuOpen}}>
                <ButtonViewContext.Provider value={{buttonOption, setButtonOption}}>
                    <Routes>
                        <Route path="/" element={<Login/>}/>
                        <Route
                                path="/dashboard"
                                element={
                                    <ProtectedRoute>
                                        <DashboardLayout/>
                                    </ProtectedRoute>
                                }
                            >
                                <Route index element={<Dashboard />} />
                                <Route path='land-bureau-requests-sent' element={<RequestsSent/>}/>
                                <Route path ='surveyor-general-requests' element ={<SurveyorGeneralRequests/>}/>
                                <Route path ='assigned-cr-requests' element ={<AssignedChiefRegistrarTasks/>}/>
                                <Route path ='governor-requests-sent' element={<GovernorSentRequets/>}/>
                                <Route path ='registration-gis-requests' element={<RegistrationGISOfficerRequests/>}/>
                                <Route path ='manage-assistant-crds' element={<ManageAssistantChiefRegistrarDeeds/>}/>
                                <Route path='sltr-officer-requests-sent' element={<RequestsSentToSurveyorGeneral/>}/>
                                <Route path='sltr-officer-requests' element={<RequestsFromSLTROfficer/>}/>
                                <Route path='schedule-task-details/:id' element={<ScheduleTaskDetails/>}/>
                                <Route path='parcel-details/:id' element={<ParcelDetails/>}/>
                                <Route path='task-details/:id/edit' element={<EditTaskData/>}/>
                                <Route path='approved-sltr-maps' element={<ApprovedMapsSLTROfficer/>}/>
                                <Route path='governor-approval-requests' element={<GovernorApprovalRequests/>}/>
                                <Route path='schedule-field-tasks' element={<ScheduleFieldTasks/>}/>
                                <Route path ='assigned-sltr-requests' element ={<AssignedSLTRRequests/>}/>
                                <Route path='gis-parcel-data-packets' element={<GISParcelDataPackets/>}/>
                                <Route path='create-parcel-data-packet' element={<CreateGISParcelDataPackets/>}/>
                                <Route path='land-bureau-requests' element={<RequestFromLandBureau/>}/>
                                <Route path='field-teams-collected-list' element={<FieldDataCollectedList/>}/>
                                <Route path='property-queries' element={<PropertyQueries/>}/>
                                <Route path='property-tax-queries' element={<PropertyTaxQueries/>}/>                      
                                <Route path='property-query-details/:id' element={<PropertyQueryDetails/>}/> 
                                <Route path='property-tax-queries' element={<PropertyTaxQueries/>}/>
                                <Route path='assigned-field-teams-tasks' element={<AssignedFieldTeamTasks/>}/>                     
                                <Route path='sent-sltr-requests' element={<SLTRRequestsSent/>}/>
                                <Route path='field-teams-requests' element={<RequestsFromFieldTeams/>}/>
                                <Route path='settings' element={<Settings/>}/>
                                <Route path='messages' element={<Messages/>}/>
                                <Route path='faqs' element={<FAQS/>}/>
                                <Route path='notifications' element={<Notifications/>}/>
                                <Route path='task-details/:id' element={<TaskDetails/>}/>
                        </Route>
                    </Routes>
                </ButtonViewContext.Provider>
            </ClaimantsViewContext.Provider>
        </AuthProvider>
    )
}

export default App
