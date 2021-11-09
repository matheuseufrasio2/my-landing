import { useContext, useState } from 'react';
import { FiMail, FiPhoneCall } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';
import {
  Container,
  Form,
  Section,
  StyledLink,
} from '../styles/pages/Contato';
import NavBar from '../components/Navbar';
import SEO from '../components/SEO';
import SideBar from '../components/SideBar';
import { HeaderContext } from '../contexts/HeaderContext';
import TextArea from '../components/TextArea';
import Input from '../components/Input';

export default function Contato() {
  const [state, setState] = useState('');
  const { isOpen, toggle } = useContext(HeaderContext);

  return (
    <Container>
      <SEO title="Contato" description="Página de Contato" />
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Section>
        <h1>Fale conosco!</h1>
        <h3>
          Saiba desde já que nossa equipe trabalha dia a dia para que sua
          resposta possa ser dada o mais rápido possível, então pode contar
          conosco pro que precisar.
        </h3>
        <div>
          <ul>
            <li>
              <span>
                <FiMail />
              </span>
              <div>
                <h3>E-mail</h3>
                <p>matheuseufrasio2@gmail.com</p>
              </div>
            </li>
            <li>
              <span>
                <FiPhoneCall />
              </span>
              <div>
                <h3>Telefone</h3>
                <p>(11) 95980-3773</p>
              </div>
            </li>
            <li>
              <span>
                <FaWhatsapp />
              </span>
              <div>
                <h3>Whatsapp</h3>
                <Link href="https://api.whatsapp.com/send?phone=5511959803773&text=Ol%C3%A1!%20Gostaria%20de%20maiores%20informa%C3%A7%C3%B5es">
                  <StyledLink
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=5511959803773&text=Ol%C3%A1!%20Gostaria%20de%20maiores%20informa%C3%A7%C3%B5es"
                  >
                    Chama no Whatsapp!
                  </StyledLink>
                </Link>
              </div>
            </li>
          </ul>
          <Form
            onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
              event.preventDefault();
              const form = event.currentTarget;
              const data = new FormData(form);
              const xhr = new XMLHttpRequest();
              xhr.open(form.method, form.action);
              xhr.setRequestHeader('Accept', 'application/json');
              xhr.onreadystatechange = () => {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                  form.reset();
                  setState('SUCCESS');
                  alert('Mensagem enviada.');
                } else {
                  setState('ERROR');
                }
              };
              xhr.send(data);
              form.reset();
            }}
            action="https://formspree.io/f/mbjpkoeb"
            method="POST"
          >
            <h2>Enviar Mensagem</h2>
            <Input name="name" placeholder="Nome Completo" type="text" />
            <Input name="email" placeholder="E-mail" type="email" />
            <Input name="phone" placeholder="Telefone" />
            <TextArea
              name="textMessage"
              placeholder="Digite sua mensagem aqui!"
            />
            <button type="submit">Enviar</button>
          </Form>
        </div>
      </Section>
    </Container>
  );
}
