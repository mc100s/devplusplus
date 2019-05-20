import React, { useState } from 'react'

export default function ThugPicture({className,name}) {
  function toggleGlasses() {
    setShouldShowGlasses(!shouldShowGlasses)
  }

  let [shouldShowGlasses, setShouldShowGlasses] = useState(false)
  let src = `/img/${name}`
  if (shouldShowGlasses) src += `-glasses`
  src += `.png`
  return (
    <img className={"ThugPicure "+className} src={src} alt="" onClick={toggleGlasses} />
  )
}
