import React from "react";
import { Button, Form, Grid, GridColumn,Header as SemanticHeader,Segment } from "semantic-ui-react";
import Header from "../../components/Header"


const RegisterUI=({form:{onChange,form}})=>{
    return(
        <div>
            <Header />
            <Grid centered>
                <Grid.Column style={{maxWidth:550,marginTop:20}}>
                    <SemanticHeader>Signup Here</SemanticHeader>
                    <Segment>
                        <Form>
                            <Form.Field>
                                <Form.Input name="username" placeholder='Username' label='Username'  />
                            </Form.Field>
                            <Form.Field>
                                 <Form.Input name="firstName" placeholder='First Name' label='First Name'  />
                            </Form.Field>
                            <Form.Field>
                                 <Form.Input name="lastName" placeholder='Last Name' label='Last Name'  />
                            </Form.Field>
                            <Form.Field>
                                 <Form.Input name="email" type="email" placeholder='Email' label='Email'  />
                            </Form.Field>
                            <Form.Field>
                                 <Form.Input name="password" type="password" placeholder='Password' label='Password'  />
                            </Form.Field>
                            <Button fluid primary type='submit'>Submit</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>

        </div>
    );
};


export default RegisterUI;
