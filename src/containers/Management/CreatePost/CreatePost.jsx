import React from "react";
import classes from './CreatePost.module.css';
import axios from "../../../axios-firebase";

export default (props) =>{
    const onSubmitHandler =(event) =>{
        event.preventDefault();


        const form = {
            title: 'whatever',
            thumbNail:'img_path',
            info:{
                author: 'john',
                data:'02/07',
                categorie:'exemple',
            },
            contentStructure:[
                {type:'TEXT', content:{text:'testando'}},
                {type:'TEXT', content:{text:`lorerokfsdokfodskfos foksdofksdo ofkdso koskfosdk fksdof kdsofksdf
                ds fodsfksdofsdofk sodkf odk odsk ok odsk ofsdkfodsfkodfksodkfosdko Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Facere sed illum eum reprehenderit illo ut ipsam dolorem,
                 nostrum optio inventore reiciendis, beatae eveniet quis explicabo iure voluptates officia maiores iste.
                `}},
                {type:'TEXT', content:{text:`lorerokfsdokfodskfos foksdofksdo ofkdso koskfosdk fksdof kdsofksdf
                ds fodsfksdofsdofk sodkf odk odsk ok odsk ofsdkfodsfkodfksodkfosdko Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Facere sed illum eum reprehenderit illo ut ipsam dolorem,
                 nostrum optio inventore reiciendis, beatae eveniet quis explicabo iure voluptates officia maiores iste.
                `}},
                {type:'TEXT', content:{text:`lorerokfsdokfodskfos foksdofksdo ofkdso koskfosdk fksdof kdsofksdf
                ds fodsfksdofsdofk sodkf odk odsk ok odsk ofsdkfodsfkodfksodkfosdko Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Facere sed illum eum reprehenderit illo ut ipsam dolorem,
                 nostrum optio inventore reiciendis, beatae eveniet quis explicabo iure voluptates officia maiores iste.
                `}},
                {type:'TEXT', content:{text:`lorerokfsdokfodskfos foksdofksdo ofkdso koskfosdk fksdof kdsofksdf
                ds fodsfksdofsdofk sodkf odk odsk ok odsk ofsdkfodsfkodfksodkfosdko Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Facere sed illum eum reprehenderit illo ut ipsam dolorem,
                 nostrum optio inventore reiciendis, beatae eveniet quis explicabo iure voluptates officia maiores iste.
                `}},
                {type:'TEXT', content:{text:`lorerokfsdokfodskfos foksdofksdo ofkdso koskfosdk fksdof kdsofksdf
                ds fodsfksdofsdofk sodkf odk odsk ok odsk ofsdkfodsfkodfksodkfosdko Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Facere sed illum eum reprehenderit illo ut ipsam dolorem,
                 nostrum optio inventore reiciendis, beatae eveniet quis explicabo iure voluptates officia maiores iste.
                `}},
                {type:'HEADING', content:{text:'testandoTitulo'}},
                {type:'TEXT', content:{text:`lorerokfsdokfodskfos foksdofksdo ofkdso koskfosdk fksdof kdsofksdf
                ds fodsfksdofsdofk sodkf odk odsk ok odsk ofsdkfodsfkodfksodkfosdko Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Facere sed illum eum reprehenderit illo ut ipsam dolorem,
                 nostrum optio inventore reiciendis, beatae eveniet quis explicabo iure voluptates officia maiores iste.
                `}},
                {type:'TEXT', content:{text:`lorerokfsdokfodskfos foksdofksdo ofkdso koskfosdk fksdof kdsofksdf
                ds fodsfksdofsdofk sodkf odk odsk ok odsk ofsdkfodsfkodfksodkfosdko Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Facere sed illum eum reprehenderit illo ut ipsam dolorem,
                 nostrum optio inventore reiciendis, beatae eveniet quis explicabo iure voluptates officia maiores iste.
                `}},
                {type:'TEXT', content:{text:`lorerokfsdokfodskfos foksdofksdo ofkdso koskfosdk fksdof kdsofksdf
                ds fodsfksdofsdofk sodkf odk odsk ok odsk ofsdkfodsfkodfksodkfosdko Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Facere sed illum eum reprehenderit illo ut ipsam dolorem,
                 nostrum optio inventore reiciendis, beatae eveniet quis explicabo iure voluptates officia maiores iste.
                `}},
                {type:'TEXT', content:{text:`lorerokfsdokfodskfos foksdofksdo ofkdso koskfosdk fksdof kdsofksdf
                ds fodsfksdofsdofk sodkf odk odsk ok odsk ofsdkfodsfkodfksodkfosdko Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Facere sed illum eum reprehenderit illo ut ipsam dolorem,
                 nostrum optio inventore reiciendis, beatae eveniet quis explicabo iure voluptates officia maiores iste.
                `}},
                {type:'HEADING', content:{text:'Segundo Titulo Teste Com UpperCase'}},
            ]
        }
        axios.post('/posts.json', form)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        })
    }


    return(
        <form onSubmit={onSubmitHandler}>
            <input/>
            <button>Submit</button>
        </form>
    )
}