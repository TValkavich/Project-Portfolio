import {Card} from 'react-bootstrap';
import styled from 'styled-components';

const ContactCardStyle = styled.div`

    .card {
        margin-top: 10%;
        margin-bottom: 200px;
        padding: 10%;
        height: 60%;
        width: 60%;
        background: white;
        transition: width 0.5s;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.5),
            5px 5px 15px rgba(0,0,0,0.1),
            -1px -1px 10px rgba(0,0,0,0.2);
        float: right;
    }

    .card:hover {
        background: #1ebdd6;
        width: 90%;
        box-shadow: 2px 2px 5px rgba(0,0,0,0.5),
            10px 10px 15px rgba(0,0,0,0.5),
            -1px -1px 30px rgba(0,0,0,0.2);
    }

`;
function ContactCard() {
    return (
        <ContactCardStyle>
            <Card>
                Contact
            </Card>
        </ContactCardStyle>            
    )
}

export default ContactCard;
