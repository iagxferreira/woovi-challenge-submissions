import AccountSchema, {IAccount} from "../models/account";
import Account from "../models/account";


class CreateAccountUseCase {
    constructor(
        private readonly model : typeof AccountSchema
    ) {}

    async handle(payload: any): Promise<IAccount> {
        const account = new Account({
            accountNumber: payload.accountNumber,
            accountType: payload.accountType,
            owner: payload.owner,
            balance: payload.balance || 0,
            isActive: payload.isActive !== undefined ? payload.isActive : true,
        });

        await account.save();

        return account;
    }
}

export default new CreateAccountUseCase(AccountSchema);