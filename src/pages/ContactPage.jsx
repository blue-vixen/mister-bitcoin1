import { Component } from 'react'
import { contactService } from '../services/contactService'
import { ContactList } from '../cmps/ContactList'
import { Link } from 'react-router-dom'
import { ContactFilter } from '../cmps/ContactFilter'

export class ContactPage extends Component {

    state = {
        contacts: null,
        filterBy: null
    }

    async componentDidMount() {
        this.loadContacts()
    }

    async loadContacts() {
        const contacts = await contactService.getContacts(this.state.filterBy)
        this.setState({ contacts })
    }

    onChangeFilter = (filterBy) => {
        this.setState({ filterBy }, this.loadContacts)
    }

    removeContact = async (contactId) => {
        await contactService.deleteContact(contactId)
        this.loadContacts()
    }

    render() {
        const { contacts } = this.state
        if (!contacts) return <div>Loading...</div>
        return (
            <div className="contact-page container">
                <ContactFilter onChangeFilter={this.onChangeFilter}></ContactFilter>
                <Link to='/contact/edit'>Add Contact</Link>
                <ContactList contacts={contacts} history={this.props.history} removeContact={this.removeContact} />
            </div>
        )
    }

}