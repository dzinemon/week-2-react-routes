import React from 'react'
import { Link, useParams } from 'react-router-dom'

const DashboardProfile = () => {
  const { username } = useParams()
  return (
    <div>
      <div>
        <Link to="/dashboard">Go To Root</Link>
      </div>
      <div>
        <Link to="/dashboard/main">Go To Main</Link>
      </div>
      <div id="title">Profile</div>
      <div id="username">{username}</div>
    </div>
  )
}

DashboardProfile.propTypes = {}

export default DashboardProfile
