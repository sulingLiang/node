class BaseModule {
    constructor(data, message){
        if (typeof data === 'string') {
            this.message = data
            this.data = null
            this.message = null
        }
        if (data) {
            this.data = data
        }
        if (message) {
            this.message = message
        }
    }
}

class SuccessModule extends BaseModule {
    constructor(data, message) {
        super(data, message)
        this.errno = 0
    }
}

class ErrorModule extends BaseModule {
    constructor(data, message) {
        super(data, message)
        this.errno = -1
    }
}

module.exports = {
    SuccessModule,
    ErrorModule
}