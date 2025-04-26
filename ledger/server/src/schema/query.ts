import {
	GraphQLID,
	GraphQLList,
	GraphQLNonNull,
	GraphQLObjectType,
	GraphQLString,
} from "graphql";

import { GraphQLContext, UserType } from "../types";
import ProductType from "../types/product";
import product from "../models/product";

const host = {
	id: "1",
	name: "Daniel Cavalcante",
};

const speaker = {
	id: "2",
	name: "Eduardo",
};

const users = [speaker, host];

const talk = {
	id: "1",
	name: "GraphQL - Real World",
	description: "Meetup Paraiba Js",
	speaker: {
		...speaker,
	},
	host: {
		...host,
	},
};

export const query = new GraphQLObjectType<
	Record<string, unknown>,
	GraphQLContext
>({
	name: "Query",
	fields: () => ({
		product: {
			type: new GraphQLList(ProductType),
			resolve: async (parent, args) => {
				const products = await product.find();
        console.log(products)
        return products
			},
		},
		me: {
			type: UserType,
			resolve: () => ({
				...speaker,
			}),
		},
		users: {
			type: new GraphQLList(UserType),
			resolve: (_) => {
				return users;
			},
		},
		user: {
			type: UserType,
			args: {
				id: {
					type: new GraphQLNonNull(GraphQLID),
				},
			},
			resolve: (_, args) => {
				const user = users.find((user) => user.id === args.id);

				return {
					...user,
				};
			},
		},
	}),
});
