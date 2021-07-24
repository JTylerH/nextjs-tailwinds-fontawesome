import 'tailwindcss/tailwind.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faBars, faTimes } from '@fortawesome/pro-regular-svg-icons'
library.add(faBell,faBars,faTimes)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
