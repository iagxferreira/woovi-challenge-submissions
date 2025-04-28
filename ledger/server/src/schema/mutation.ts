import {
GraphQLNonNull,
	GraphQLObjectType,
} from "graphql";
import {CreateAccountInputType, CreateAccountPayloadType} from "./account";
import CreateAccountUseCase from "../use-cases/create-account";

export const mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: () => ({
		CreateAccount: {
			type: CreateAccountPayloadType,
			description: "Create a new bank account",
			args: {
				input: {
					type: new GraphQLNonNull(CreateAccountInputType),
				},
			},
			resolve: async (_, { input }) => {
				const account = await CreateAccountUseCase.handle(input);
				return {
					account,
				};
			},
		},
	}),
});
