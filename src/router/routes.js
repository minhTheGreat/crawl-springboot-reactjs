import React from 'react';

import ManagerCategory from '../views/Manager/ManagerCategory';
import ManagerFile from '../views/Manager/ManagerFile';
import ManagerSources from '../views/Manager/ManagerSources';
import ManagerNews from '../views/Manager/ManagerNews';
import ManagerUser from '../views/Manager/ManagerUser';

import CreateUserWithRouter from '../views/Manager/create/CreateUser';
import CreateNew from '../views/Manager/create/CreateNew';
import CreateCategory from '../views/Manager/create/CreateCategory';


const routes =[
   
    {
        path:"/manager/category",
        exact:true,
        main:() => <ManagerCategory/>
    },
    {
        path:"/manager/sources",
        exact:false,
        main:()=><ManagerSources/>
    },
    {
        path:"/manager/news",
        exact:true,
        main:()=><ManagerNews/>
    },
    {
        path:"/manager/user",
        exact:true,
        main:()=><ManagerUser/>
    },
    {
        path:"/manager/user/add",

        exact:true,
        main:({history})=><CreateUserWithRouter/>


    },
    {
        path:"/manager/user/:id/edit",
        exact:false,
        main: ({match,history})=> <CreateUserWithRouter match={match} history={history}/>
    },
     {
         path:"/manager/news/add",
         exact:false,
         main:({history})=><CreateNew history={history}/>
     },
    {
        path:"/manager/news/:id/edit",
        exact:false,
        main: ({match,history})=> <CreateNew match={match} history={history}/>
    },
    {
        path:"/manager/category/add",
        exact:false,
        main:({history})=><CreateCategory history={history}/>
    },
   {
       path:"/manager/category/:id/edit",
       exact:false,
       main: ({match,history})=> <CreateCategory match={match} history={history}/>
   }



]
export default routes