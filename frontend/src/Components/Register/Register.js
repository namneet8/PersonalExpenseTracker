import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import Form from './RegisterForm';


function Register() {
    
    return (
        <RegisterStyled>
            <InnerLayout>
                
                    <div className="form-container">
                        <Form />
                    </div>
                    
            
            </InnerLayout>
        </RegisterStyled>
    )
}

const RegisterStyled = styled.div`
    display: flex;
    overflow: auto;

`;

export default Register