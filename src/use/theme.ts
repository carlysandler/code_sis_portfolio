import _ from 'lodash'
import { ref, type Ref } from 'vue'

interface ColorVariant {
  palette: string
  base: number
  disabled?: number
  extraColors: boolean
  secondary?: number
  hover?: number
  selected?: number
  active?: number
}

interface ThemeVariant {
  light: ColorVariant
  dark: ColorVariant
}

interface ColorCodes {
  primary: ThemeVariant
  warning: ThemeVariant
  success: ThemeVariant
  error: ThemeVariant
  background: ThemeVariant
  layer: ThemeVariant
  text: ThemeVariant
}

const palettes: Record<string, string[]> = {
  primary: [
    '#FFFFFF',
    '#F4E2EE',
    '#DBCBD6',
    '#C3B4BE',
    '#AA9DA5',
    '#91878D',
    '#787075',
    '#60595D',
    '#474245',
    '#2E2B2D'
  ],
  grey: [
    '#F3F3F3',
    '#B1B6C1',
    '#636D83',
    '#5A6375',
    '#525969',
    '#494F5B',
    '#41454F',
    '#383B41',
    '#303134',
    '#282828'
  ],
  text: [
    '#000000',
    '#010306',
    '#2C4267',
    '#536B95',
    '#637AA0',
    '#728CB7',
    '#859ABF',
    '#AFC2E3',
    '#EFF2F6',
    '#FFFFFF'
  ],
  error: [
    '#FFECEF',
    '#FFCED4',
    '#F99C9D',
    '#F37476',
    '#FF5252',
    '#F73536',
    '#E42930',
    '#D72028',
    '#C8111C',
    '#A81824'
  ],
  success: [
    '#C8E6C9',
    '#A5D6A7',
    '#81C784',
    '#66BB69',
    '#4CAF4F',
    '#47A74A',
    '#43A046',
    '#388E3B',
    '#2E7D31',
    '#1B5E1F'
  ],
  warning: [
    '#FFF3E0',
    '#FFDFB2',
    '#FFCB7F',
    '#FFA525',
    '#FFA525',
    '#FF9600',
    '#FB8A00',
    '#F57A01',
    '#EF6A01',
    '#E64F01'
  ]
}

const reversePalettes: Record<string, string[]> = _.mapValues(
  palettes,
  (p) => [...p].reverse()
)

// Extend the 'text' palette
palettes.text.push('#FFF')
reversePalettes.text.push('#FFF')

const colorCodes: ColorCodes = {
  primary: {
    light: {
      palette: 'primary',
      base: 3,
      disabled: 1,
      extraColors: true
    },
    dark: {
      palette: 'primary',
      base: 5,
      disabled: 1,
      extraColors: true
    }
  },
  warning: {
    light: {
      palette: 'warning',
      base: 4,
      disabled: 1,
      extraColors: true
    },
    dark: {
      palette: 'warning',
      base: 5,
      disabled: 1,
      extraColors: true
    }
  },
  success: {
    light: {
      palette: 'success',
      base: 4,
      disabled: 1,
      extraColors: true
    },
    dark: {
      palette: 'success',
      base: 5,
      disabled: 1,
      extraColors: true
    }
  },
  background: {
    light: {
      palette: 'primary',
      base: 0,
      secondary: 1,
      extraColors: false
    },
    dark: {
      palette: 'primary',
      base: 0,
      secondary: 1,
      extraColors: false
    }
  },
  layer: {
    light: {
      palette: 'grey',
      base: 0,
      secondary: 1,
      extraColors: true
    },
    dark: {
      palette: 'grey',
      base: 0,
      secondary: 1,
      extraColors: true
    }
  },
  text: {
    light: {
      palette: 'text',
      base: 1,
      disabled: 3,
      extraColors: false
    },
    dark: {
      palette: 'text',
      base: 1,
      disabled: 3,
      extraColors: false
    }
  },
  error: {
    light: {
      palette: 'error',
      base: 4,
      disabled: 1,
      extraColors: true
    },
    dark: {
      palette: 'error',
      base: 5,
      disabled: 1,
      extraColors: true
    }
  }
}

const HOVER_OFFSET = 1
const SELECTED_OFFSET = 2
const ACTIVE_OFFSET = 3

const generateCssVar = (
  color: string,
  key: string,
  value: number,
  palette: string[]
): Record<string, string> => {
  return {
    [key === 'base' ? color : `${color}-${key}`]: palette[value]
  }
}

const generateCssVariables = (
  paletteObj: Ref<Record<string, string>>,
  theme: 'light' | 'dark',
  variant: ThemeVariant,
  colorKey: string
) => {
  let variantCopy = _.cloneDeep(variant[theme])
  const themePalette =
    theme === 'light'
      ? palettes[variantCopy.palette]
      : reversePalettes[variantCopy.palette]
  // Define base css vars first
  const baseCssVar = generateCssVar(
    colorKey,
    'base',
    variantCopy.base,
    themePalette
  )
  paletteObj.value = { ...paletteObj.value, ...baseCssVar }

  // Handle the extra color states if needed
  if (variantCopy.extraColors) {
    const hoverCssVar = generateCssVar(
      colorKey,
      'hover',
      variantCopy.base + HOVER_OFFSET,
      themePalette
    )
    const selectedCssVar = generateCssVar(
      colorKey,
      'selected',
      variantCopy.base + SELECTED_OFFSET,
      themePalette
    )
    const activeCssVar = generateCssVar(
      colorKey,
      'active',
      variantCopy.base + ACTIVE_OFFSET,
      themePalette
    )

    paletteObj.value = {
      ...paletteObj.value,
      ...hoverCssVar,
      ...selectedCssVar,
      ...activeCssVar
    }
  }

  // Handle the disabled color if it exists
  if (variantCopy.disabled !== undefined) {
    const disabledCssVar = generateCssVar(
      colorKey,
      'disabled',
      variantCopy.disabled,
      themePalette
    )
    paletteObj.value = { ...paletteObj.value, ...disabledCssVar }
  }

  // Handle the secondary color if it exists
  if (variantCopy.secondary !== undefined) {
    const secondaryCssVar = generateCssVar(
      colorKey,
      'secondary',
      variantCopy.secondary,
      themePalette
    )
    paletteObj.value = { ...paletteObj.value, ...secondaryCssVar }
  }
}

const lightModeColors = ref<Record<string, string>>({})
const darkModeColors = ref<Record<string, string>>({})

Object.keys(colorCodes).forEach((k) => {
  generateCssVariables(
    lightModeColors,
    'light',
    colorCodes[k as keyof ColorCodes] as ThemeVariant,
    k
  )
  generateCssVariables(
    darkModeColors,
    'dark',
    colorCodes[k as keyof ColorCodes] as ThemeVariant,
    k
  )
})

export const useTheme = () => {
  return {
    lightModeColors,
    darkModeColors,
    palettes,
    reversePalettes
  }
}
