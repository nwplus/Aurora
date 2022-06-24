import styled from 'styled-components';


// Button
const Button = (props) => {

        if (props.name === "Outline") {
            var Button = styled.div`
                font-family: 'HK Grotesk', sans-serif;
                font-size: 1em;
                font-weight: 700;
                background-color: transparent;
                color: #20FFAF;
                display: inline-block;
                border-radius: 8px;
                text-align: center;
                
                padding: 0.8rem 2.8rem;
             
                transition: 0.3s;
                cursor: pointer;
                outline: 2px solid;

                &:hover {
                    background: linear-gradient(90deg, #D7FFF0 0%, #A5FFDE 54.61%, #7BFFCF 100%);
                    color: #00A399;
                    outline: none;
                }
            
                &:disabled {
                    color: #8C898F;
                    outline: 2px solid #8C898F;
                }`
        }
        else if (props.name === "Destructive") {
            var Button = styled.div`
                font-family: 'HK Grotesk', sans-serif;
                font-size: 1em;
                font-weight: 700;
                background-color: #F65C5C;
                color: #FFFFFF;
                display: inline-block;
                border-radius: 8px;
                text-align: center;
                
                padding: 0.8rem 2.8rem;
            
                transition: 0.3s;
                cursor: pointer;
            
                &:hover {
                    background-color: #F83D3D;
                    color: #FFFFFF;
                }
            
                &:disabled {
                    background: #BDBAC3
                    color: #8C898F;
                }`
        }

        else {
            // We can remove this else statement once all the buttons are made
            // The code below is just there to prevent errors from happening if we view a button that hasn't been made yet :)
            var Button = styled.div`
                font-family: 'HK Grotesk', sans-serif;
                font-size: 1em;
                font-weight: 700;
                background-color: #3399ff;
                color: #FFFFFF;
                display: inline-block;
                border-radius: 8px;
                text-align: center;
                
                padding: 0.8rem 2.8rem;
                
                transition: 0.3s;
                cursor: pointer;
                outline: 2px solid;

                &:hover {
                    background: #0066ff;
                    color: #FFFFFF;
                    outline: none;
                }
            
                &:disabled {
                    color: #8C898F;
                    border: 2px solid #8C898F;
                }`
        }
        
   
    return (
        <Button>{props.label}</Button>
    )
}

export {Button}

// Button