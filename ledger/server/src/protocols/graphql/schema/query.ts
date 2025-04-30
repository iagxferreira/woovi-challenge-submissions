import {
	GraphQLID,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLString,
} from "graphql";

import { AccountType } from "../types";
import Account from "../../../infra/mongodb/models/account";
import {Context} from "koa";
import {auth} from "../middleware/auth";

export const query = new GraphQLObjectType<
	Record<string, unknown>,
	Context
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
		accountById: {
			type: AccountType,
			args: {
				id: {
					type: new GraphQLNonNull(GraphQLID),
				},
			},
			resolve: async (_, args, ctx ) => {
				await auth(ctx.koaContext, async () => {
					console.log(ctx.id)
					return
				})
			},
		}
	}),
});
