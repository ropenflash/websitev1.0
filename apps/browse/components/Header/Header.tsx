
import { useMediaQuery } from 'react-responsive'
import MobileHeader from './MobileHeader'
import DesktopHeader from './DesktopHeader'

export function Header() {

  const isTabletOrMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)'
  })


  return (isTabletOrMobileDevice ? <MobileHeader /> : <DesktopHeader />

  )
}
