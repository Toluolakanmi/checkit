import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Breadcrumbs = () => {
    const location = useLocation()
    let currentLink = ''
    
    const crumbs = location.pathname.split('/')
        .filter(crumb => crumb !=='')
        .map(crumb  => {
        currentLink += `/${crumb}`
    
    return (
    <div className='crumb' key={crumb}>
        <Link to='currentLink'>{crumb}</Link>
    </div>
    )
    
    })
    
    return (
        <div className="breadcrumbs w-9/12 mt-4 flex justify-center items-center">{crumbs}</div>
    )
}