import React from 'react';

import { Admin, Resource } from 'react-admin';
import { UserList, UserEdit, UserCreate } from './Pages/user';
import { GoalList, GoalEdit, GoalCreate } from './Pages/goal';
import { AddressList, AddressEdit, AddressCreate } from './Pages/address';
import { CategoryList, CategoryEdit, CategoryCreate } from './Pages/category';
import { ProductList, ProductEdit, ProductCreate } from './Pages/product';

import authProvider from './Provider/authProvider';
import dataProvider from './Provider/dataProvider';

import UserIcon from '@material-ui/icons/Group';
import AddressIcon from '@material-ui/icons/Map';
import CategoryIcon from '@material-ui/icons/Category';
import ProductIcon from '@material-ui/icons/LocalBar';
import GoalIcon from '@material-ui/icons/Star';

import ptBrMessages from './language-pt-br';
import polyglotI18nProvider from 'ra-i18n-polyglot';

const i18nProvider = polyglotI18nProvider(() => ptBrMessages);

const App = () => (
    <Admin 
        authProvider={authProvider} 
        dataProvider={dataProvider} 
        i18nProvider={i18nProvider}
    >
    <Resource 
        icon={UserIcon} 
        options={{ label: 'Usuários' }} 
        name="user" 
        list={UserList} 
        edit={UserEdit} 
        create={UserCreate} 
    />
    <Resource 
        icon={GoalIcon} 
        options={{ label: 'Metas' }} 
        name="goal" 
        list={GoalList} 
        edit={GoalEdit} 
        create={GoalCreate} 
    />
    <Resource 
        icon={AddressIcon} 
        options={{ label: 'Endereços' }} 
        name="address" 
        list={AddressList} 
        edit={AddressEdit} 
        create={AddressCreate} 
    />
    <Resource 
        icon={CategoryIcon} 
        options={{ label: 'Categoria' }} 
        name="category" 
        list={CategoryList} 
        edit={CategoryEdit} 
        create={CategoryCreate} 
    />
    <Resource 
        icon={ProductIcon} 
        options={{ label: 'Produto' }} 
        name="product" 
        list={ProductList} 
        edit={ProductEdit} 
        create={ProductCreate} 
    />
    </Admin>
);

export default App;