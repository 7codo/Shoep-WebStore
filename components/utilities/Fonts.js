import { Global } from '@emotion/react'

const Fonts = () => {
  return (
    <Global
      styles={`
      @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&display=swap');
    `}
    />
  )
}

export default Fonts
