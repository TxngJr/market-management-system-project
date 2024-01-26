import * as React from "react"
import Svg, { Defs, Pattern, Use, Image, Circle } from "react-native-svg"

function PersonSvgIcon() {
  return (
    <Svg
      width={71}
      height={71}
      viewBox="0 0 71 71"
      fill="none"
    >
      <Circle cx={35.5} cy={35.5} r={35.5} fill="url(#pattern0)" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_101_185" transform="scale(.005)" />
        </Pattern>
        <Image
          id="image0_101_185"
          width={200}
          height={200}
          xlinkHref="data:image/png;base64,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"
        />
      </Defs>
    </Svg>
  )
}

export default PersonSvgIcon
