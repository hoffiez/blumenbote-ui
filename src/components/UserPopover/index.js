import React, { useRef, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLanguage, useSession, LogoutAction as LogoutActionController } from 'ordering-components'
import { usePopper } from 'react-popper'
import { HeaderItem, PopoverBody, PopoverArrow, PopoverList, PopoverListItem, PopoverListLink } from './styles'
import { DropDownCircleImage } from '../Dropdown/style'
import { FaUserAlt, FaRegAddressCard, FaRegListAlt, FaSignOutAlt } from 'react-icons/fa'

export const UserPopover = (props) => {
  const { open } = props
  const [sessionState] = useSession()
  const [, t] = useLanguage()
  const referenceElement = useRef()
  const popperElement = useRef()
  const arrowElement = useRef()
  const popper = usePopper(referenceElement.current, popperElement.current, {
    placement: 'auto',
    modifiers: [
      { name: 'arrow', options: { element: arrowElement.current } },
      {
        name: 'offset',
        options: {
          offset: [0, 12]
        }
      }
    ]
  })

  const { styles, attributes, forceUpdate } = popper
  const location = useLocation()
  const isHome = location.pathname === '/' || location.pathname === '/home'

  useEffect(() => {
    forceUpdate && forceUpdate()
  }, [open, sessionState])

  const handleClickOutside = (e) => {
    if (!open) return
    const outsidePopover = !popperElement.current?.contains(e.target)
    const outsidePopoverMenu = !referenceElement.current?.contains(e.target)
    if (outsidePopover && outsidePopoverMenu) {
      props.onClose && props.onClose()
    }
  }

  useEffect(() => {
    window.addEventListener('mouseup', handleClickOutside)
    return () => window.removeEventListener('mouseup', handleClickOutside)
  }, [open])

  const popStyle = { ...styles.popper, visibility: open ? 'visible' : 'hidden', minWidth: '150px' }
  if (!open) {
    popStyle.transform = 'translate3d(0px, 0px, 0px)'
  }
  return (
    <div style={{ overflow: 'hidden' }}>
      <HeaderItem
        isPhoto={sessionState?.user?.photo}
        isHome={isHome}
        ref={referenceElement}
        onClick={props.onClick}
      >
        <DropDownCircleImage
          src={sessionState?.user?.photo}
          fallback={<FaUserAlt />}
        />
      </HeaderItem>
      <PopoverBody ref={popperElement} style={popStyle} {...attributes.popper}>
        <PopoverList>
          <PopoverListLink onClick={props.onClose} to='/profile'>
            <FaRegAddressCard /> {t('PROFILE', 'Profile')}
          </PopoverListLink>
          <PopoverListLink onClick={props.onClose} to='/profile/orders'>
            <FaRegListAlt /> {t('ORDERS', 'Orders')}
          </PopoverListLink>
          <PopoverListItemLogout onClose={props.onClose} />
        </PopoverList>
        <PopoverArrow key='arrow' ref={arrowElement} style={styles.arrow} />
      </PopoverBody>
    </div>
  )
}

const LogoutActionUI = (props) => {
  const [, t] = useLanguage()

  const handleClick = () => {
    props.handleLogoutClick()
    props.onClose()
  }
  return (
    <PopoverListItem onClick={handleClick}>
      <FaSignOutAlt /> {t('LOGOUT', 'Logout')}
    </PopoverListItem>
  )
}

const PopoverListItemLogout = (props) => {
  const logoutActionProps = {
    UIComponent: LogoutActionUI,
    onClose: props.onClose
  }
  return (
    <LogoutActionController {...logoutActionProps} />
  )
}
