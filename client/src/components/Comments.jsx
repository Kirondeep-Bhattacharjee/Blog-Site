import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';

const Container = styled.div`
 display: flex;
 justify-content: center;
 width: 100%;
 
`
const CommentContainer = styled.div`
    display: flex;
    width: 60%;
    justify-content: center;
`
const Input = styled.input`
    flex: 12;
`
const PostButton = styled.button`
    flex: 1;
    background-color: #E8DFCA;
    border: 0 black solid; 
    cursor: pointer;
    
`

const Comments = () => {
  return (
    <Container>
        <CommentContainer>
            <Input />
            <PostButton>
                <SendIcon />
            </PostButton>
        </CommentContainer>
    </Container>
  )
}

export default Comments;
