import * as React from "react"
import Svg, { Path } from "react-native-svg"

function RightArrowIcon(props) {
    return (
        <Svg height={32} viewBox="0 0 32 32" width={32} {...props}>
            <Path
                d="M24.291 14.276L14.705 4.69a2.267 2.267 0 00-3.195 0l-.8.8a2.266 2.266 0 000 3.194L18.024 16l-7.315 7.315a2.266 2.266 0 000 3.194l.8.8a2.265 2.265 0 003.195 0l9.586-9.587a2.24 2.24 0 00.647-1.723 2.239 2.239 0 00-.646-1.723z"
                fill="#FFFFFF"
            />
        </Svg>
    )
}

export default RightArrowIcon
