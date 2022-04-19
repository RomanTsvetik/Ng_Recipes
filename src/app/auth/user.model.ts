

export class User {

    constructor(
        public email: string, 
        public id: string, 
        private _token: string, 
        private _tokenExpirateDate: Date
    ) { }

    get token( ) {
        if(!this._tokenExpirateDate || new Date() > this._tokenExpirateDate) {
            return null; // token expired
        }
        return this._token
    }
}