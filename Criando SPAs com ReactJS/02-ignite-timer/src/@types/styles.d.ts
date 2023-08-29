import 'styled-components'
import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-componentss' {
  export interface DefaultTheme extends ThemeType {}
}
