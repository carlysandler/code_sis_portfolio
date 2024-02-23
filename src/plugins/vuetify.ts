import '@fortawesome/fontawesome-free/css/all.css'
import { createVuetify, type ThemeDefinition } from 'vuetify'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { aliases as mdiAliases, mdi } from 'vuetify/iconsets/mdi'

import { useTheme } from '@/use/theme'
const { palettes, reversePalettes, lightModeColors, darkModeColors } =
  useTheme()

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: '#FFFFFF',
    surface: '#FFFFFF',
    'surface-bright': '#FFFFFF',
    'surface-light': '#EEEEEE',
    'surface-variant': '#424242',
    'on-surface-variant': '#EEEEEE',
    primary: '#1867C0',
    'primary-darken-1': '#1F5592',
    secondary: '#48A9A6',
    'secondary-darken-1': '#018786',
    error: '#B00020',
    info: '#2196F3',
    success: '#4CAF50',
    warning: '#FB8C00'
  },
  variables: {
    'border-color': '#000000',
    'border-opacity': 0.12,
    'high-emphasis-opacity': 0.87,
    'medium-emphasis-opacity': 0.6,
    'disabled-opacity': 0.38,
    'idle-opacity': 0.04,
    'hover-opacity': 0.04,
    'focus-opacity': 0.12,
    'selected-opacity': 0.08,
    'activated-opacity': 0.12,
    'pressed-opacity': 0.12,
    'dragged-opacity': 0.08,
    'theme-kbd': '#212529',
    'theme-on-kbd': '#FFFFFF',
    'theme-code': '#F5F5F5',
    'theme-on-code': '#000000'
  }
}

const vuetify = createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases: {
      ...aliases,
      ...mdiAliases
    },
    sets: {
      fa,
      mdi
    }
  },
  theme: {
    themes: {
      light: {
        colors: {
          secondary: 'F2F4F7',
          white: palettes.text[palettes.text.length - 1],
          scrollBar: '#AAB2BF',
          ...lightModeColors.value
        }
      },
      dark: {
        colors: {
          secondary: '#1D3143',
          white:
            reversePalettes.text[reversePalettes.text.length - 1],
          scrollBar: '#4C5C74',
          ...darkModeColors.value
        }
      }
    }
  },
  display: {
    mobileBreakpoint: 'xs'
  }
})

export default vuetify
