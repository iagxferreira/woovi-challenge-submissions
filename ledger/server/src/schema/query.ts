import {
	GraphQLID,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLString,
} from "graphql";

import { GraphQLContext, UserType } from "../types";
import AccountType from "../types/account";
import Account from "../models/account";

export const query = new GraphQLObjectType<
	Record<string, unknown>,
	GraphQLContext
>({
	name: "Query",
	fields: () => ({
		account: {
			type: AccountType,
			args: {
				id: {
					type: new GraphQLNonNull(GraphQLID),
				},
			},
			resolve: async (_, args) => {
				return Account.findById(args.id);
			},
		},
		accounts: {
			type: new GraphQLList(AccountType),
			resolve: async () => {
				return Account.find();
			},
		},
		accountByNumber: {
			type: AccountType,
			args: {
				accountNumber: {
					type: new GraphQLNonNull(GraphQLString),
				},
			},
			resolve: async (_, args) => {
				return Account.findOne({accountNumber: args.accountNumber});
			},
		},
	}),
});
