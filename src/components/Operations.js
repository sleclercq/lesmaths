import React from 'react'
import Addition from "./Addition";

const Operations = ({operations}) => {
    return (
            operations.map(operation =>
                    <Addition first={operation.first}
                              second={operation.second} />)
    )
}


export default Operations