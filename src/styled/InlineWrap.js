import styled from 'styled-components';

const InlineWrap = styled.div`
  display: ${props => (props.flex ? 'inline-flex' : 'inline-block')};
  width: ${props => (props.width ? props.width : 'auto')};
  height: ${props => (props.height ? props.height : 'auto')};
  margin-left: ${props => (props.right ? 'auto' : 0)};
  align-items: ${props => (props.alignItems ? props.alignItems : 'flex-start')};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
  background: ${props => (props.background ? props.background : '')};
  flex-direction: ${props => (props.flexDirection ? props.flexDirection : '')};
`;

export default InlineWrap;
