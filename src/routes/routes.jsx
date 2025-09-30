import ErrorPage from "../pages/404";
import AboutUs from "../pages/AboutUs";
import Hotels from "../pages/Hotels";

export const rawRoutes = [
  { path: "/", 
    title:'About Us',
    element: <AboutUs />,
    layout:true,
    // protected:true
  },
  { path: "/hotels", 
    title:'Booking',
    element: <Hotels />, 
    layout: true 
  },
  { path: "/*",
    title:'Error',
    element: <ErrorPage />, 
    layout: true 
  }
];