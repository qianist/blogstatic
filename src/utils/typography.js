import Typography from "typography"
import theme from "typography-theme-de-young"

theme.overrideThemeStyles = () => {
  return {
    a: {
      boxShadow: `none`,
    },
    body: {
      lineHeight: 1.75,
      fontFamily: "Arial, Helvetica, sans-serif",
      fontSize: "0.85rem",
    },
    table: { fontSize: "0.85rem" },
  }
}

const typography = new Typography(theme)

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
