import { createBrowserRouter } from "react-router-dom";
import Main from "../Root/Main";
import Home from "../pages/home/Home";
import AddJob from './../pages/addJobs/AddJob';
import MyPostedJobs from './../pages/mypostedJob/MyPostedJobs';
import MyBids from './../pages/myBIds/MyBids';
import BidRequest from "../pages/bidRequest/BidRequest";
import Login from './../pages/login/Login';
import Register from './../pages/register/Register';
//import PrivateRoutes from "../privateRoutes/PrivateRoutes";
import ErrorPage from './../pages/Error/ErrorPage';


export const  router=createBrowserRouter([



{  path:"/",
 
element:<Main></Main>,
errorElement:<ErrorPage></ErrorPage>
,children:[

{//path:'/',
    index:true,
    element:<Home></Home>
},
//login
{path:'/login',
element:<Login></Login>

},
{
    path:'/registration',
    element:<Register></Register>
}

,
//add jobs
{
    path:'/addJob',
    element:<AddJob></AddJob>
},
//my posted job
{
    path:'/myPostJob',
    element:<MyPostedJobs></MyPostedJobs>
},
//my bids job
{
    path:'/myBidsJob',
    element:<MyBids></MyBids>
},
{
    path:'/bidRequest',
    element:<BidRequest></BidRequest>
}


]
}

])