import mongoose, { ConnectOptions } from 'mongoose';
import { expect, use } from 'chai';
import chaiHttp from 'chai-http';
const User = require('../../src/models/user'); 

describe('Users API', () => {
    let app: any; 

    before(async () => {
        const chai = await import("chai");
        const appModule = await import('../index');
        
        app = appModule.default;

        use(chaiHttp);

        await mongoose.connect('mongodb://localhost:27017/LLtestdb', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        } as ConnectOptions);
    });

    after(async () => {
        await mongoose.connection.close();
    });

    describe('GET /me', () => {
        it('should return user information if authenticated', async () => {
            const user = new User({
                fullName: 'Test User',
                email: 'test@example.com',
                password: 'kebean123'
            });
            await user.save();

            const res = await chai.request(app)
                .get('/me')
                .set('x-auth-token', user.generateAuthToken());

            expect(res).to.have.status(200);
            expect(res.body).to.have.property('_id');
            expect(res.body).to.have.property('fullName');
            expect(res.body).to.have.property('email').equal('test@example.com');
            expect(res.body).to.not.have.property('password');
            expect(res.body).to.not.have.property('confirmPassword');
        });
    });

    describe('POST /', () => {
        it('should create a new user if input is valid', async () => {
            const user = {
                fullName: 'New User',
                email: 'newuser@example.com',
                password: 'kebean123',
                confirmPassword: 'kebean123'
            };

            const res = await chai.request(app)
                .post('/')
                .send(user);

            expect(res).to.have.status(200);
            expect(res.body).to.have.property('_id');
            expect(res.body).to.have.property('fullName').equal('New User');
            expect(res.body).to.have.property('email').equal('newuser@example.com');
        });
    });
});
