import authController from "../Controllers/AuthController";
import authModel from "../Models/auth";

describe('Model Test', function() {
    test('loginUser returns user', async () => {
        const user = await authModel.loginUser('thib@gmail.com');
        expect(user).toBeDefined();
        expect(user.identifiant).toBe('adminPassword123456789');
    });

    test('loginUser returns error', async () => {
        const user = await authModel.loginUser('invalidIdentifiant@gmail.com');
        expect(user).toBeNull();
    });
});

describe('Controller Test', function() {
    test('login returns user', async () => {
        const req = { body: { identifiant: 'thib@gmail.com', password: 'adminPassword123456789' } };
        const res = { json: jest.fn(), status: jest.fn().mockReturnThis() };
        await authController.login(req, res);
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalled();
    });

    test('login returns 401 without data', async () => {
        const req = { body: { identifiant: '', password: '' } };
        const res = { json: jest.fn(), status: jest.fn().mockReturnThis() };
        await authController.login(req, res);
        expect(res.status).toHaveBeenCalledWith(401);
        expect(res.json).toHaveBeenCalled();
    });
});
