import React from 'react';

import { Admin, Resource } from 'react-admin';
import { UserList, UserEdit, UserCreate } from './Pages/user';
import { GoalList, GoalEdit, GoalCreate } from './Pages/goal';

import authProvider from './Provider/authProvider';
import dataProvider from './Provider/dataProvider';

import UserIcon from '@material-ui/icons/Group';

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
        icon={UserIcon} 
        options={{ label: 'Metas' }} 
        name="goal" 
        list={GoalList} 
        edit={GoalEdit} 
        create={GoalCreate} 
    />
    </Admin>
);

export default App;