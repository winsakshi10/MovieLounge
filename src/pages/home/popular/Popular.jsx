import React,{useState} from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import Carousel from '../../../components/carousal/Carousel'

import useFetch from '../../../hooks/useFetch'


const Popular = () => {

    const [endPoint,setEndPoint] =useState("movie");
    const {data,loading}=useFetch(`/${endPoint}/popular`)

    const onTabChange =(tab) => {
        setEndPoint(tab === "Movies" ? "movie" : "tv");
        

    }

    
  return (
    <div className='carousalSection'>
        <ContentWrapper>
            <span className='carousalTitle'>What's Popular</span>
            <SwitchTabs data={["Movies","TV shows"]} onTabChange={onTabChange}/>
        </ContentWrapper>
        <Carousel data={data?.results} 
        loading={loading}
        endPoint={endPoint}/>
    </div>
  )
}

export default Popular