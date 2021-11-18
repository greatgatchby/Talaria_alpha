import React, { useCallback } from 'react'
import {
  CAvatar,
  CButton,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/8.jpg'
import { logout } from '../../actions/auth'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
const AppHeaderDropdown = () => {
  const dispatch = useDispatch()
  const logOut = () => {
    dispatch(logout())
  }
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="lg" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0 pb-0" placement="bottom-end">
        <CDropdownHeader className="bg-light fw-semibold py-2">Account</CDropdownHeader>
        <Link to={'/profile'}>
          <CDropdownItem>
            <CIcon icon={cilUser} className="me-2" />
            Profile
          </CDropdownItem>
        </Link>
        <Link to={'/settings'}>
          <CDropdownItem href="#">
            <CIcon icon={cilSettings} className="me-2" />
            Settings
          </CDropdownItem>
        </Link>
        <Link to={'/billing'}>
          <CDropdownItem href="#">
            <CIcon icon={cilCreditCard} className="me-2" />
            Billing
          </CDropdownItem>
        </Link>
        <CDropdownItem className="p-0 m-0">
          <CButton onClick={logOut} className={'w-100 rounded-bottom rounded-0'}>
            <CIcon icon={cilLockLocked} className="me-2" />
            Log Out
          </CButton>
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
