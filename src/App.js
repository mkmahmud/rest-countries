import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Faq from "./component/Faq/Faq";
import Home from "./component/Home/Home";
import OurWork from "./component/OurWork/OurWork";
import Services from "./component/Services/Services";
import Main from "./layout/Main";




function App() {
 
  const router = createBrowserRouter([
    {
      path:'',
      element: <Main></Main>,
      children: [
        {
          path:'/home',
          loader: async () => {
            return fetch('https://restcountries.com/v3.1/all');
          },
          element: <Home></Home>
        },
        {
          path:'/about',
          element:<About></About>
        },
        {
          path:'/contact',
          element:<Contact></Contact>
        },
        {
          path:'/services',
          element:<Services></Services>
        },
        {
          path:'/faq',
          element:<Faq></Faq>
        },
        {
          path:'/ourWork',
          element:<OurWork></OurWork>
        }
      ]
    },
    
    
  ])
  
  return (
    <div className="App">
        <RouterProvider router={router}></RouterProvider>
      
    </div>
  );
}

export default App;
