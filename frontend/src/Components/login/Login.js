import React, { useEffect } from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import Form from './LoginForm';


function Login() {
    
    return (
        <LoginStyled>
            <InnerLayout>
                
                    <div className="form-container">
                        <Form />
                    </div>
                    
            
            </InnerLayout>
        </LoginStyled>
    )
}

const LoginStyled = styled.div`
    display: flex;
    overflow: auto;

`;

export default Login