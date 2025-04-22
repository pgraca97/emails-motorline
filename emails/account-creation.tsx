import crypto from 'crypto';

import {
  Body,
  Button,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Heading,
  Section,
  Text,
  Tailwind,
  Row,
  Container,
  Font,
  Column
} from '@react-email/components';


const baseUrl = process.env.NODE_ENV === 'production' 
  ? process.env.NEXT_PUBLIC_URL 
  : '';


interface AccountActivationProps {
  token: string;
  email: string;
}

export const AccountActivation = ({ token, email }: AccountActivationProps) => (
  <Html>
    <Head>
    <style>
        {`
          @media screen and (max-width: 525px) {
            .contact-section {
              display: block !important;
              text-align: center !important;
            }

            .contact-section.pad {
              margin-bottom: 10px !important;
            }

          }

          @media screen and (min-width: 526px) {
            .contact-section {
              text-align: left !important;
            }

          .width {
              width: calc(100%/3) !important;
            }

            .fit {
              white-space: nowrap;
              width: 1px;
            }
          }
        `}
      </style>
      <Font
        fontFamily="Geist"
        fallbackFontFamily="Verdana"
        webFont={{
          url: "https://fonts.gstatic.com/s/geist/v1/gyByhwUxId8gMEwcGFU.woff2",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
      <Font
        fontFamily="Inter"
        fallbackFontFamily="Verdana"
        webFont={{
          url: "https://fonts.gstatic.com/s/roboto/v27/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2",
          format: "woff2",
        }}
        fontWeight={400}
        fontStyle="normal"
      />
      <title>Bem-vindo ao Backoffice da Motorline!</title>
    </Head>
    <Tailwind>
      <Body>
        <Preview>
          Bem-vindo ao Backoffice da Motorline!
        </Preview>
        <Container style={main} className="mx-auto">
          <Section className="my-[37px] px-[37px]">
            <Row className="mb-[37px]" style={{ whiteSpace: 'nowrap', width: '1px' }}>
              <Column align='center'>
                <Img
                  src={`${baseUrl}/static/motorline.png`}
                  alt='Motorline Logo'
                  width={148}
                />
              </Column>
            </Row>
            <Row>
              <Column align='center'>
                <Heading as='h1' className="text-[18px] text-[#171717] font-semibold m-0" style={{ fontFamily: 'Geist, sans-serif' }}>
                  Bem-vindo ao Backoffice da Motorline!
                </Heading>
              </Column>
            </Row>
          </Section>
          <Section className='px-[20px]'>
            <Section className=''>
              <Text className="text-[14px] text-[#171717] leading-[150%] mb-0" style={{ fontFamily: 'Geist, sans-serif' }}>
                Foi criada uma conta para si no backoffice da Motorline. <br />
                Para ativar a sua conta e começar a utilizá-la, clique no botão abaixo e siga as instruções para concluir o processo de ativação.
              </Text>
            </Section>
            <Section className='mt-[48px]'>
              <Row>
                <Column align='center'>
                  <Button
                    className="bg-[#1E3A8A] text-white rounded-[8px] text-[14px] py-[8px] px-[16px] leading-[24px]"
                    href={`${baseUrl}/auth/activate?token=${token}&email=${encodeURIComponent(email)}`}
                    style={{ fontFamily: 'Inter, sans-serif' }}
                  >
                    Ativar Conta
                  </Button>
                </Column>
              </Row>
            </Section>
            <Section className='mt-[48px]'>
              <Text className="text-[14px] text-[#171717] leading-[150%] m-0" style={{ fontFamily: 'Geist, sans-serif' }}>
                Se não solicitou a criação desta conta, por favor, ignore este e-mail.
              </Text>
              <Text className="text-[12px] text-[#A3A3A3] leading-[150%] mb-0" style={{ fontFamily: 'Geist, sans-serif' }}>
                Esta é uma mensagem de sistema, não responda a este email. <br />
                Estamos disponíveis através do email <Link href="mailto:mail@motorline.pt"><strong>mail@motorline.pt</strong></Link>.
              </Text>
            </Section>
          </Section>
          {/* Footer */}
          <Section className='px-[20px] mt-[48px]'>

            <Section className='py-6' style={border}>
              <Row>

                <Column align='center' className='contact-section pad'>
                  <Text className="text-[#171717] text-[12px] leading-[150%] mb-[4px] mt-0" style={{ fontFamily: 'Geist, sans-serif' }}>
                    <strong>Morada</strong>
                  </Text>
                  <Text className="text-[#171717] text-[12px] leading-[150%] m-0" style={{ fontFamily: 'Geist, sans-serif' }}>
                    Travessa do Sobreiro, nº29 <br />
                    4755-474 Rio Côvo (Santa Eugénia) <br />
                    Barcelos, Portugal
                  </Text>
                </Column>

                <Column align='center'  className='contact-section pad width'>
                  <Text className="text-[#171717] text-[12px] leading-[150%] mb-[4px] mt-0" style={{ fontFamily: 'Geist, sans-serif' }}>
                    <strong>Telefone</strong>
                  </Text>
                  <Text className="text-[#171717] text-[12px] leading-[150%] m-0" style={{ fontFamily: 'Geist, sans-serif' }}>
                    +351 253 830 060 <br />
                    +351 253 830 260 <br />
                    +351 910 723 334
                  </Text>
                </Column>

                <Column style={{ verticalAlign: 'top' }} align='center' className='contact-section fit'>
                  <Text className="text-[#171717] text-[12px] leading-[150%] mb-[4px] mt-0" style={{ fontFamily: 'Geist, sans-serif' }}>
                    <strong>Email</strong>
                  </Text>
                  <Text className="text-[#171717] text-[12px] leading-[150%] m-0" style={{ fontFamily: 'Geist, sans-serif'}}>
                    <Link href="mailto:mail@motorline.pt">mail@motorline.pt</Link>
                  </Text>
                </Column>

              </Row>

            </Section>

            <Section className='mt-[37px]'>
              <Row className="">
                <Text className="text-[#A3A3A3] text-[12px] leading-[150%] m-0" style={{ fontFamily: 'Geist, sans-serif', textAlign: 'center' }}>
                  Powered by
                </Text>
              </Row>
              <Row className="mt-[8px] mb-[20px]">
                <Column align='center'>
                  <Img
                    src={`${baseUrl}/static/backdot.png`}
                    alt='Backdot Logo'
                    width={116}
                  />
                </Column>
              </Row>
            </Section>
          </Section>
        </Container>
      </Body>
    </Tailwind>
  </Html>
);

export default AccountActivation;

export function generateRandomToken(length = 32) {
  return crypto.randomBytes(length).toString('hex');
}

AccountActivation.PreviewProps = {
  token: generateRandomToken(16),
  email: 'paula@example.com',
} as AccountActivationProps;

const main = {
  backgroundColor: '#F5F5F5',
  maxWidth: '640px',
};

const border = {
  borderTop: '1px solid',
  borderBottom: '1px solid',
  borderColor: '#CDD4DC',
}

