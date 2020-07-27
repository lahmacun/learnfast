import * as React from "react"
import Svg, { Path } from "react-native-svg"

function AddIcon(props) {
    return (
        <Svg width={22} height={22} viewBox="0 0 22 22" {...props}>
            <Path
                d="M20.625 8.25H13.75V1.375C13.75.619 13.131 0 12.375 0h-2.75C8.869 0 8.25.619 8.25 1.375V8.25H1.375C.619 8.25 0 8.869 0 9.625v2.75c0 .756.619 1.375 1.375 1.375H8.25v6.875c0 .756.619 1.375 1.375 1.375h2.75c.756 0 1.375-.619 1.375-1.375V13.75h6.875c.756 0 1.375-.619 1.375-1.375v-2.75c0-.756-.619-1.375-1.375-1.375z"
                fill="#FFF"
                fillRule="nonzero"
            />
        </Svg>
    )
}

export default AddIcon
