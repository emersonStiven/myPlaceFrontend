import React from 'react'
import { FooterSetting } from '../../components/account/FooterSetting'
import { Outlet } from 'react-router'
import { HeaderSettings } from '../../components/account/HeaderSettings'
import "./account.css"

export const SettingsLayout = () => {
  return (
    <div className='settings-layout'>
      <HeaderSettings/>
      <Outlet/>
      <FooterSetting/>
    </div>
  )
}
