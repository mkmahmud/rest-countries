import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Country from './Country/Country';
import './Home.css'


const Home = (props) => {
    const data = useLoaderData()
    let countryName = props.data;
    
    const Countries = [];
    if(countryName){
        for(const myData of data){
            if(myData.name.common.includes(countryName)){
                Countries.push(myData)
            }
        }
    }else{
        for(const myData of data){
            Countries.push(myData)
        }
    }
    
    
console.log(props.data)
   
    
    return (
        <div className='Home'>

            {

                Countries.map(country => <Country key={country.cca3} data={country}></Country>)

                // data.forEach(con => {

                //         <Country key={con.cca3} data={con}></Country>

                //     // const name = con.name.common;
                //     // if(name.includes(countryName)) {
                //     //     console.log(countryName);
                //     //     <Country key={con.cca3} data={con}></Country>
                //     // }else{
                //     //     <Country key={con.cca3} data={con}></Country>
                //     // }
                // })

            }
        </div>
    );
};

export default Home;