import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { List, SimpleList, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create } from 'react-admin';
import { required } from 'react-admin';

export const UserList = ({permissions, ...props}) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'))
    
    return (
        <List
        title="Usuários" 
        {...props} >
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => record.username}
                    tertiaryText={record => `id: ${record.id}`}
                />
            ) : (
                <Datagrid>
                    <TextField source="id" />
                    <TextField source="name" label="Nome"/>
                    <TextField source="username" label="Username"/>
                    <EditButton/>
                </Datagrid>
            )}
        </List>
    );
}

const UserTitle = ({ record }) => {
    return <span>Nome: {record ? `"${record.name}"` : ''}</span>;
};

export const UserEdit = props => (
    <Edit title={<UserTitle />} {...props}>
        <SimpleForm >
            <TextInput source="name" label="Nome" validate={required()}/>
            <TextInput source="username" label="Username" validate={required()}/>
        </SimpleForm>
    </Edit>
);

export const UserCreate = props => (
    <Create title= "Novo usuário" {...props}>
        <SimpleForm>
            <TextInput source="name" label="Nome" validate={required()}/>
            <TextInput source="username" label="Username" validate={required()}/>
        </SimpleForm>
    </Create>
);