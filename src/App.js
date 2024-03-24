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

const App = () =>{
    return (
        <AuthProvider>
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
                        <Route path='sltr-officer-requests-sent' element={<RequestsSentToSurveyorGeneral/>}/>
                        <Route path='sltr-officer-requests' element={<RequestsFromSLTROfficer/>}/>
                        <Route path='schedule-task-details/:id' element={<ScheduleTaskDetails/>}/>
                        <Route path='governor-approval-requests' element={<GovernorApprovalRequests/>}/>
                        <Route path='schedule-field-tasks' element={<ScheduleFieldTasks/>}/>
                        <Route path='land-bureau-requests' element={<RequestFromLandBureau/>}/>
                        <Route path='settings' element={<Settings/>}/>
                        <Route path='messages' element={<Messages/>}/>
                        <Route path='faqs' element={<FAQS/>}/>
                        <Route path='notifications' element={<Notifications/>}/>
                        <Route path='task-details/:id' element={<TaskDetails/>}/>
                </Route>
            </Routes>
        </AuthProvider>
    )
}

export default App