import { useState } from "react";
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

  const [search, setSearch] = useState();
  const keyPress =(e) => {
    // console.log(e.target.value)
    const searchVal = e.target.value;
    setSearch(searchVal)
}

// console.log(search)
 
  const router = createBrowserRouter([
    {
      path:'',
      element: <Main keyPress={keyPress}></Main>,
      children: [
        {
          path:'',
          loader: async () => {
            return fetch('https://restcountries.com/v3.1/all');
          },
          element: <Home data={search}></Home>
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
