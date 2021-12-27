import { Component, createRef } from "react";
import { contactService } from "../services/contactService";

export class ContactEdit extends Component {
    state = {
        contact: null
    }

    inputRef = createRef()

    async componentDidMount() {
        const contactId = this.props.match.params.id
        console.log(contactId)
        const contact = contactId ? await contactService.getContactById(contactId) : contactService.getEmptyContact()
        this.setState({ contact }, () => this.inputRef.current.focus())
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.type === 'number' ? +target.value : target.value
        this.setState(prevState => ({ contact: { ...prevState.contact, [field]: value } }))
    }


    onSaveContact = async (ev) => {
        ev.preventDefault()
        await contactService.saveContact({ ...this.state.contact })
        this.props.history.push('/contact')
    }

    render() {
        const { contact } = this.state
        if (!contact) return <div>Loading...</div>
        return (
            <div className="contact-edit container">
                <h1>{(contact._id) ? 'Edit' : 'Add'} Contact</h1>
                <form onSubmit={this.onSaveContact} className="simple-form">
                    <label htmlFor="name">Name</label>
                    <input type="text" ref={this.inputRef} onChange={this.handleChange} value={contact.name} name="name" id="name" />
                    <label htmlFor="phone">Phone</label>
                    <input type="text" onChange={this.handleChange} value={contact.phone} name="phone" id="phone" />
                    <label htmlFor="email">Email</label>
                    <input type="text" onChange={this.handleChange} value={contact.email} name="email" id="email" />
                    <button>Save</button>
                </form>
            </div>
        )
    }
}

