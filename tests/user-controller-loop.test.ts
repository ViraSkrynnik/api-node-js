import {test, expect, request} from '@playwright/test';
let baseURL: string = 'http://localhost:3000/users';

test.describe('User management API with loop', () => {

    test.beforeEach(async ({ request }) => {
        const response = await request.get(`${baseURL}`);
        const responseBody = await response.json()
        const numberOfObjects = responseBody.length;

        let userIDs = [];

        for (let i = 0; i < numberOfObjects; i++) {
            let userID = responseBody[i].id;
            userIDs.push(userID);
        }

        for (let i = 0; i < numberOfObjects; i++) {
            let response = await request.delete(`${baseURL}/${userIDs[i]}`);
            expect.soft(response.status()).toBe(200);
        }

        const responseAfterDelete = await request.get(`${baseURL}`);
        expect(responseAfterDelete.status()).toBe(200);
        const responseBodyEmpty = await responseAfterDelete.text()
        expect(responseBodyEmpty).toBe('[]');
    })


    test('GET / - should return empty when no users', async ({ request }) => {
        const response = await request.get(`${baseURL}`);
        expect(response.status()).toBe(200);
        const responseBody = await response.text()
        expect(responseBody).toBe('[]');
    });

    test('Create few users and verify total number', async ({request}) => {
        await createUsers(3)
        const response = await request.get(`${baseURL}`);
        const responseBody = await response.json()
        expect(responseBody.length).toBe(3);
    });

    test('Delete one user and verify other users', async ({request}) => {
        await createUsers(5)
        const response = await request.get(`${baseURL}`);
        const responseBody = await response.json();
        const numberOfObjects = responseBody.length;

        let userIDs = [];

        for (let i = 0; i < numberOfObjects; i++) {
            let userID = responseBody[i].id;
            userIDs.push(userID);
        }
        let responseDelete = await request.delete(`${baseURL}/${userIDs[0]}`);
        const responseAfterDelete = await request.get(`${baseURL}`);
        const responseBodyAfterDelete = await responseAfterDelete.json();
        expect(responseBodyAfterDelete.length).toBe(4);
    });

    test('Should create N users and return exactly N users when retrieving all users', async ({ request }) => {
        await request.post(`${baseURL}`);
        await request.post(`${baseURL}`);
        const responseAllUsers = await request.get(`${baseURL}`);
        const responseBodyAllUsers = await responseAllUsers.json()
        console.log(responseBodyAllUsers);
        const userCount = responseBodyAllUsers.length;
        console.log(`Number of users: ${userCount}`);
        expect(userCount).toBe(2);
        const firstUser = responseBodyAllUsers[0];
        console.log('First user:', firstUser);
        const secondUser = responseBodyAllUsers[1];
        console.log('Second user:', secondUser);
    });

    test('Delete all users and verify empty response', async ({ request }) => {

    });
async function createUsers(numberOfUsers: number) {
    const requestContext = await request.newContext()
    for(let i= 0; i < numberOfUsers; i++){
        const response = await requestContext.post(`${baseURL}`);
    }
}

});