import React, { useRef } from 'react';
import { Form } from '@unform/web';

import Input from '../Form/input';
import Tabs from '../Tabs';
import * as Yup from 'yup';
import {
    Wrapper,
    Container,
    FormLabel,
    FormContainer,
    FormElement,
    Button,
    Buttons,
} from './style';

const Simulator = () => {
    const formRef = useRef(null);

    async function handleSubmit(data) {
        try {
            const schema = Yup.object().shape({
                prazo: Yup.number().max(
                    12,
                    'Please insert number smaller than 12'
                ),
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            console.log(data);
        } catch (err) {
            if (err instanceof Yup.ValidationError) {
                const errorMessages = {};

                err.inner.forEach((error) => {
                    errorMessages[error.path] = error.message;
                });
                formRef.current.setErrors(errorMessages);
            }
        }
    }

    return (
        <Container>
            <h2>Simulador</h2>
            <Form ref={formRef} onSubmit={handleSubmit}>
                <FormContainer>
                    <Wrapper>
                        <div>
                            <p>Rendimento</p>
                            <Tabs names={['Bruto', 'Liquído']} />
                            <FormElement>
                                <FormLabel for="aporte">
                                    Aporte inicial
                                </FormLabel>
                                <Input name="aporte" id="aporte" />
                            </FormElement>

                            <FormElement>
                                <FormLabel for="prazo">
                                    Prazo (em meses)
                                </FormLabel>
                                <Input name="prazo" id="prazo" />
                            </FormElement>

                            <FormElement>
                                <FormLabel for="ipca">IPCA (ao ano)</FormLabel>
                                <Input name="ipca" id="ipca" />
                            </FormElement>
                        </div>

                        <div>
                            <p>Tipos de indexação</p>
                            <Tabs names={['PRE', 'POS', 'FIXADO']} />

                            <FormElement>
                                <FormLabel for="aporte-mensal">
                                    Aporte Mensal
                                </FormLabel>
                                <Input
                                    name="aporte-mensal"
                                    id="aporte-mensal"
                                />
                            </FormElement>

                            <FormElement>
                                <FormLabel for="rentabilidade">
                                    Rentabilidade
                                </FormLabel>
                                <Input
                                    name="rentabilidade"
                                    id="rentabilidade"
                                />
                            </FormElement>

                            <FormElement>
                                <FormLabel for="cdi">CDI (ao ano)</FormLabel>
                                <Input name="cdi" id="cdi" />
                            </FormElement>
                        </div>
                    </Wrapper>
                    <Buttons>
                        <Button>Limpar Campos</Button>
                        <Button type="submit">Simular</Button>
                    </Buttons>
                </FormContainer>
            </Form>
        </Container>
    );
};

export default Simulator;
