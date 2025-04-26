import {
	GraphQLInputObjectType,
	GraphQLObjectType,
	GraphQLString,
} from "graphql";
import UserType from "../types/user";
import Product from "../models/product";
import ProductType from "../types/product";
import { title } from "process";

const CreateUserInputType = new GraphQLInputObjectType({
	name: "CreateUserInput",
	fields: () => ({
		name: {
			type: GraphQLString,
		},
	}),
});

const CreateUserPayloadType = new GraphQLObjectType({
	name: "CreateUserPayload",
	fields: () => ({
		user: {
			type: UserType,
		},
	}),
});

const CreateProductPayloadType = new GraphQLObjectType({
	name: "CreateProductPayload",
	fields: () => ({
		product: {
			type: ProductType,
		},
	}),
});

const CreateProductInputType = new GraphQLInputObjectType({
	name: "CreateProductInput",
	fields: () => ({
		title: {
			type: GraphQLString,
		},
	}),
});

export const mutation = new GraphQLObjectType({
	name: "Mutation",
	fields: () => ({
		CreateUser: {
			type: CreateUserPayloadType,
			description: "Create a new user",
			args: {
				input: {
					type: CreateUserInputType,
				},
			},
			resolve: (_, args) => {
				return {
					user: {
						name: args.input.name,
					},
				};
			},
		},
		CreateProduct: {
			type: CreateProductPayloadType,
			description: "Create a new product",
			args: {
				input: {
					type: CreateProductInputType,
				},
			},
			resolve: async (source, args, context, info) => {
				const prod = new Product({
					title: args.input.title,
				});
				await prod.save();
				return {
					product: {
						id: prod.id,
						title: prod.title
					}
				};
			},
		},
	}),
});
