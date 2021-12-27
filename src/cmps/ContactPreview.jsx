import { Link } from 'react-router-dom'

export function ContactPreview({ contact, removeContact }) {

    function onRemoveContact(ev) {
        ev.stopPropagation()
        removeContact(contact._id)
    }

    return (
        <article className="contact-preview">
            <Link to={`/contact/${contact._id}`}>
                <section className="info flex space-around">
                    <img src={`https://robohash.org/${contact.name}?set=set4`} alt="" />
                    <div className='info-txt'>
                        <h1>{contact.name}</h1>
                        <h2>{contact.email}</h2>
                        <h2>{contact.phone}</h2>
                    </div>

                </section>
            </Link>
            <section className='actions'>
                <Link to={`/contact/edit/${contact._id}`}>Edit Contact</Link>
                <button onClick={onRemoveContact}>X</button>
            </section>
        </article>
    )
}