import React from 'react';
import { useMediaQuery } from '@material-ui/core';
import { List, SimpleList, Datagrid, TextField, EditButton, Edit, SimpleForm, TextInput, Create, ReferenceField, ReferenceInput, SelectInput } from 'react-admin';
import { required } from 'react-admin';


export const ProductList = ({permissions, ...props}) => {
    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'))
    
    return (
        <List
        title="Endereços" 
        {...props} >
            {isSmall ? (
                <SimpleList
                    primaryText={record => record.name}
                    secondaryText={record => record.ingredients_details}
                    tertiaryText={record => record.price}
                />
            ) : (
                <Datagrid>
                    <TextField source="id" />
                    <ReferenceField source="category_id" reference="category" label="Categoria">
                        <TextField source="title" />
                    </ReferenceField>
                    <TextField source="name" label="Nome"/>
                    <TextField source="price" label="Preço"/>
                    <TextField source="ingredients_details" label="Ingredientes"/>
                    <TextField source="allergic_information" label="Alérgicos"/>
                    <EditButton/>
                </Datagrid>
            )}
        </List>
    );
}

const ProductTitle = ({ record }) => {
    return <span>Nome: {record ? `"${record.name}"` : ''}</span>;
};

export const ProductEdit = props => (
    <Edit title={<ProductTitle />} {...props}>
        <SimpleForm>
            <ReferenceInput source="category_id" reference="category" label="Categoria" validate={required()}>
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput source="name" label="Nome" validate={required()}/>
            <TextInput source="price" label="Preço" validate={required()}/>
            <TextInput source="ingredients_details" label="Ingredientes"/>
            <TextInput source="allergic_information" label="Alérgicos"/>
        </SimpleForm>
    </Edit>
);

export const ProductCreate = props => (
    <Create title= "Novo produto" {...props}>
        <SimpleForm>
            <ReferenceInput source="category_id" reference="category" label="Categoria" validate={required()}>
                <SelectInput optionText="title" />
            </ReferenceInput>
            <TextInput source="name" label="Nome" validate={required()}/>
            <TextInput source="price" label="Preço" validate={required()}/>
            <TextInput source="ingredients_details" label="Complemento"/>
            <TextInput source="allergic_information" label="Alérgicos"/>
        </SimpleForm>
    </Create>
);