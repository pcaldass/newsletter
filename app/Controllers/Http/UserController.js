'use strict'

const User = use('App/Models/User')

class UserController {
    async store({request}) {
        const data = request.only(['email'])

        const user = await User.create(data)
        console.log(user)
    }
}

module.exports = UserController
