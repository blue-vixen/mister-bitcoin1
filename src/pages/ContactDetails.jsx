import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { contactService } from '../services/contactService'

export class ContactDetails extends Component {
    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }
    }

    async loadContact() {
        const contact = await contactService.getContactById(this.props.match.params.id)
        this.setState({ contact })
    }

    onGoBack = () => {
        this.props.history.push('/contact')
    }


    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>
        return (
            <div className='contact-details container'>
                <img src={`https://robohash.org/${contact.name}?set=set4`} alt="" />
                <h1>{contact.name}</h1>
                <h2>{contact.email}</h2>
                <h2>{contact.phone}</h2>
                <button onClick={this.onGoBack} >Back</button>
            </div>
        )
    }
}
