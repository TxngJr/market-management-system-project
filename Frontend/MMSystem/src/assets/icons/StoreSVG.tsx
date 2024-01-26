import * as React from "react"
import Svg, { Defs, Pattern, Use, Image, Path } from "react-native-svg"

function StoreSvgIcon() {
  return (
    <Svg
      width={77}
      height={77}
      viewBox="0 0 77 77"
      fill="none"
    >
      <Path fill="url(#pattern0)" d="M0 0H77V77H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#image0_41_721" transform="scale(.00195)" />
        </Pattern>
        <Image
          id="image0_41_721"
          width={512}
          height={512}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAgAElEQVR4Ae3dK7TlRNoG4LiRyJFI5EgkEjkS2RKJHIkbiUQikS2RI5FIJHIkciz/eqHTfzq9L0l2JalKPVmr1zl9LtnZz/dW8uV6hsFEgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAt0L/G0Yhl+GYfjDPwYyIAMyUCQDvw/D8Pfuty4Aqhf41oAvMuA1UJpIGZCBaQbeVr/2t4BdC3w2DMP/NAAaABmQARnYJQNfdb2F8earFvjZoN9l0E/3Anxur1AG+s3Af4dh+KTqrYCF61LgGxt/G38ZkAEZ2D0DP3S5hfGmqxX41KH/3Qe9vb5+9/rUXu3nGfiy2q2BBetO4CddvwZABmRABg7LwG/DMOSOKxOBUwXeGPSHDfr5XoD/2zOUgX4z8N2pa34v3r1A7kvN/alWQgxkQAZk4PgMfN79VgjAaQI/2vhrfmRABmTgtAz86lTAadu/rl/4nwb9aYPentbxe1rMmdeagTx8zUTgMIHch5r7UWsdEJZL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0ABoADQAMiADMtBhBjQAGgADv8OBX2oPwnzsjcpAuxnQAGgANAAaABmQARnoMAMaAA2Agd/hwLfX1u5em9qpXakMaAA0ABoADYAMyIAMdJgBDYAGwMDvcOCX2oMwH3ujMtBuBjQAGgANgAZABmRABjrMgAZAA2Dgdzjw7bW1u9emdmpXKgMaAA2ABkADIAMyIAMdZkADoAEw8Dsc+KX2IMzH3qgMtJsBDYAGQAOgAZABGZCBDjOgAdAAGPgdDnx7be3utamd2pXKgAZghwbALAkQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ2CTwf/HqjMviV4x7AAAAAElFTkSuQmCC"
        />
      </Defs>
    </Svg>
  )
}

export default StoreSvgIcon