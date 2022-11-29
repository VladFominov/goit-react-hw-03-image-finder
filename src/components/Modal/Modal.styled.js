import styled from '@emotion/styled';

export const Overlay = styled.div`
position: fixed;
background-color: rgba(0,0,0,0.4);
 height: 100vh;
 width: 100vw;
  top: 0;
  left: 0;
 
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: blu;
  height: 600px;
  width: 800px;
`;
