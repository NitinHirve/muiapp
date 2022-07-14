import React from 'react'

import styled from '@emotion/styled'

const BatchStyled = styled.span`
background-color:${props=>props.variantColor?props.variantColor:'red'};
color:white;
padding:10px;
border-radius:3px;

`;

const ModifiedBatchStyled = styled(BatchStyled)`
background-color:blue;
`

const Batch = () => {
    return (
        <>
        <h1>This is Batch Componant</h1>
        <BatchStyled >Value</BatchStyled>
        <BatchStyled variantColor="purple" >Value</BatchStyled>
        <ModifiedBatchStyled >Modified Batch</ModifiedBatchStyled>
        </>
    )
}

export default Batch