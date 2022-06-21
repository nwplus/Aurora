import styled from 'styled-components';


// TEST
const Button = (props) => {

    const Outline = styled.div`
    font-family: 'HK Grotesk';
    font-weight: 700;
    font-size: 24px;
    background-color: transparent;
    color: #20FFAF;
    display: block;
    border-radius: 8px;
    text-align: center;
    border: 2px solid;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 60px;
    gap: 8px;
    width: 100%;
    height: 60px;
    left: 0;
    top: 0;
    border-radius: 8px;
    border: linear-gradient(92.58deg, #0DEFE1 0%, #78FF96 100%);

    &:hover {
        background: linear-gradient(90deg, #D7FFF0 0%, #A5FFDE 54.61%, #7BFFCF 100%);
        color: #00A399;
        border: none;
    }

    &:disabled {
        
    }
    `

    const Destructive = styled.div`
    font-family: 'HK Grotesk';
    font-weight: 700;
    font-size: 24px;
    background-color: transparent;
    color: #20FFAF;
    display: block;
    border-radius: 8px;
    text-align: center;
    border: 2px solid;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 60px;
    gap: 8px;
    width: 100%;
    height: 60px;
    left: 0;
    top: 0;
 
    background: #F65C5C;
    border-radius: 8px;

    &:hover {
      
    }

    &:disabled {
        
    }
    `
    return (
        <Outline>{props.label}</Outline>,
        <Destructive>{props.label}</Destructive>
    )
}

export {Button}

// TEST