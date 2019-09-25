import React, { Component } from 'react';
import Contact from './Contact'

class Contacts extends Component {
    state = {
        contacts:[
            {
                id: 1,
                name:'ismaila sylla',
                email:'syldox@gmail.com',
                phone:'999-000-888'
            },
            {
                id: 2,
                name:'sakinat Youssouf',
                email:'sakinat@gmail.com',
                phone:'333-444-555'
            },  
            {
                id: 3,
                name:'mariam sylla',
                email:'mariam@gmail.com',
                phone:'444-222-111'
            }
        ]
    }
       
        
    
    render() {
        const {contacts} = this.state;
        return (
            <div>
                <h1>Contacts</h1>
               {contacts.map(contact =>(
                   <Contact name={contact.name} email={contact.email} phone={contact.phone}/>
        ))}
            </div>
        )
    }
}


export default Contacts