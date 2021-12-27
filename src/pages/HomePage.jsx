import React, { Component } from 'react'
import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoin.service'

export class HomePage extends Component {
    state = {
        user: null,
        btcRate: null
    }

    async componentDidMount() {
        const user = await userService.getUser()
        const btcRate = await bitcoinService.getRate(user.coins)
        this.setState({ user, btcRate })
    }


    render() {
        const { user, btcRate } = this.state
        if (!user) return <div>Loading...</div>
        return (
            <div className="home-page container flex justify-center">
                <section className="user-card flex">
                    <img src={`https://robohash.org/${user.name}?set=set4`} alt="" />
                    <div className='user-details'>
                        <h3>Welcome {user.name}</h3>
                        <h4>Current balance: {user.coins} $</h4>
                        <h4>Bitcoin rate: {btcRate}</h4>
                    </div>
                </section>
            </div>
        )
    }
}
