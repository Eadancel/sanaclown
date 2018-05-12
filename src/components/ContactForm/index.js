import React from 'react'
import styled from "styled-components";

const FormWrp = styled.div`
    display:grid;
    grid-template-columns : 1fr;
    grid-gap:30px;
    width:100%
`;
const InputStyled = styled.input`
        background: rgba(2,129,187,0.30);;
        padding: 15px;
        color: #fff;
        border: 1px solid #979797;
        border-radius: 8px;
        font-size: 20px;

        transition: outline 0.5s ease;

        &::placeholder {
            color:rgba(255,255,255,0.8);
            font-family: OxygenMono-Regular;
        }


`;
const ContactForm = props => (

        <form style={{width : "100%"}}action="./enviar-contacto.php" method="POST" class="footer__form grid">
        <FormWrp>
            <InputStyled color={props.color} type="text" name="name" placeholder="Your Name..." />
            <InputStyled type="email" name="email" placeholder="Email" />
            <textarea name="message" id="" placeholder="Your Message..."></textarea>
            <div class="footer__button"><input type="submit" value="Enviar" class="button" /></div>
        </FormWrp>
        </form>

);

export default ContactForm;