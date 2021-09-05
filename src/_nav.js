import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilTruck,
  cilUser,
  cilClipboard,
  cilIndustry,
  cilSwapHorizontal,
  cilCheck,
  cilQrCode,
  cilSearch,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Menu',
  },
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    component: CNavItem,
    name: 'Consignments',
    to: '/consignments',
    icon: <CIcon icon={cilQrCode} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Transfers',
    to: '/transfers',
    icon: <CIcon icon={cilTruck} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Authentication',
    to: '/authentication',
    icon: <CIcon icon={cilCheck} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Payouts',
    to: '/consignments',
    icon: <CIcon icon={cilSwapHorizontal} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Vendors',
    to: '/consignments',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Inventory',
    to: '/consignments',
    icon: <CIcon icon={cilClipboard} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Venues',
    to: '/consignments',
    icon: <CIcon icon={cilIndustry} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Tools',
  },
  {
    component: CNavItem,
    name: 'Sneaker Search',
    to: '/consignments',
    icon: <CIcon icon={cilSearch} customClassName="nav-icon" />,
  },
]

export default _nav
