import 'jest-date';
import closeDatabaseAndConnection from '../../../jest/utils/closeDatabaseAndConnection';
import initDatabaseAndConnectionPerTest, { DatabaseAndConnection } from '../../../jest/utils/initDabaseAndConnectionPerTest';
import { userRepository } from '../../utils/index';
import { CreateUserInput } from '../user.dto';
import userFactory from '../user.factory';
import { User } from '../user.model';

describe('User test suite', () => {

    let connectionContainer: DatabaseAndConnection;
    const databaseName: string = __filename.slice(__dirname.length + 1, -3);
    const users:CreateUserInput[] = userFactory.buildList(15);

    beforeAll(async () => {
        connectionContainer = await initDatabaseAndConnectionPerTest(databaseName);
     });

    afterAll(async () => {
        await closeDatabaseAndConnection(connectionContainer);
    });

    beforeEach(async () => {
        await connectionContainer.queryRunner.clearDatabase()
        await connectionContainer.connection.runMigrations()
    })

    test('Create user via TypeOrm', async (done) => {
        const [firstNewUser, secondNewUser] = users;
        const firstNewUserCreated: User = userRepository.create(firstNewUser);
        const firstNewUserSaved: User = await userRepository.save(firstNewUserCreated);
        const secondNewUserCreated: User = userRepository.create(secondNewUser);
        const secondNewUserSaved: User = await userRepository.save(secondNewUserCreated);

        expect(firstNewUserSaved.full_name).toBe(firstNewUser.full_name);
        expect(firstNewUserSaved.country_code).toBe(firstNewUser.country_code);
        expect((firstNewUserSaved.id)).toBe(1);
        expect((firstNewUserSaved.created_at)).toBeInstanceOf(Date);

        expect(secondNewUserSaved.id).toBe(2);
        expect(secondNewUserSaved.created_at).toBeAfter(firstNewUserSaved.created_at)
        
        done();        
        })    

    test('Update user via TypeOrm', async (done) => {
        const [firstNewUser, secondNewUser] = users;
        const firstNewUserCreated: User = userRepository.create(firstNewUser);
        const firstNewUserSaved: User = await userRepository.save(firstNewUserCreated);
        await userRepository.update(1, { full_name: secondNewUser.full_name });
        const firstNewUserUpdated = await userRepository.findOne(1);

        expect(firstNewUserUpdated).toBeInstanceOf(User);
        expect((firstNewUserUpdated as User).full_name).toBe(secondNewUser.full_name);

        done();
    });

    test('Find user via TypeOrm', () => {
        
    });

    test('Delete user via TypeOrm', () => {
        
    });

    test('Create user via TypeOrm', () => {
        
    });

    test('Create user via TypeOrm', () => {
        
    });

    test('Create user via TypeOrm', () => {
        
    });

    test('Create user via TypeOrm', () => {
        
    });

});
