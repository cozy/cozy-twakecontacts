import React from 'react'
import { Outlet } from 'react-router-dom'

import { BarComponent } from 'cozy-bar'

import Contacts from './Icons/Contacts'
import ContactsText from './Icons/ContactsText'

const AppLayout = () => {
  return (
    <>
      <BarComponent
        searchOptions={{ enabled: false }}
        appIcon={Contacts}
        appTextIcon={ContactsText}
        componentsProps={{
          CozyTheme: {
            type: 'light'
          }
        }}
      />
      <Outlet />
    </>
  )
}

export default AppLayout
