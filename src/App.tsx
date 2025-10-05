import { BrowserRouter as Router, Routes, Route } from "react-router";
import SignIn from "./pages/AuthPages/SignIn";
import SignUp from "./pages/AuthPages/SignUp";
import NotFound from "./pages/OtherPage/NotFound";
import UserProfiles from "./pages/UserProfiles";
// import Videos from "./pages/UiElements/Videos";
// import Images from "./pages/UiElements/Images";
// import Alerts from "./pages/UiElements/Alerts";
// import Badges from "./pages/UiElements/Badges";
// import Avatars from "./pages/UiElements/Avatars";
// import Buttons from "./pages/UiElements/Buttons";
// import LineChart from "./pages/Charts/LineChart";
// import BarChart from "./pages/Charts/BarChart";
// import Calendar from "./pages/Calendar";
// import BasicTables from "./pages/Tables/BasicTables";
import JobList from "./pages/Jobs/Index";
import CreateJobs from "./pages/Jobs/create";
// import FormElements from "./pages/Forms/FormElements";
// import Blank from "./pages/Blank";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import Home from "./pages/Dashboard/Home";
import HomeIndex from "./pages/Home/Index";
import DetailJobs from "./pages/Home/Detail";
import Jobs from "./pages/Home/Jobs";
import React from "react";

export default function App() {
  const [fetchStatus, setFetchStatus] = React.useState(false);

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          {/* route home */}
            <Route index path="/" element={<HomeIndex />} />
            <Route path="/Jobs" element={<Jobs />} />
            <Route path="/Jobs/detail/:id" element={<DetailJobs />} />


          {/* route home */}
          {/* Dashboard Layout */}
          <Route element={<AppLayout />}>
            <Route index path="/dashboard" element={<Home />} />
            {/* route asli */}
            <Route path="/dashboard/jobs" element={<JobList />} />
             <Route path="/dashboard/create/jobs" element={<CreateJobs setFetchStatus={setFetchStatus} />} />
            {/* <Route path="/dashboard/create/jobs/:id" element={<CreateJobs setFetchStatus={() => {}} />} /> */}
            <Route path="/dashboard/create/jobs/:id" element={<CreateJobs setFetchStatus={setFetchStatus} />} />

            {/* Others Page */}
            <Route path="/profile" element={<UserProfiles />} />
            <Route path="/" element={<HomeIndex />} />

          </Route>

          {/* Auth Layout */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />

          {/* Fallback Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
}
