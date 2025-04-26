import { GraphQLNonNull } from "graphql";
import { resolve } from "path";

const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString } = graphql;

const ProductType = new GraphQLObjectType({
	name: "Product",
	fields: () => ({
		id: {
			type: GraphQLString,
			resolve: (obj: { id: any; }) => obj.id,
		},
		title: {
			type: GraphQLString,
			resolve: (obj: { title: any; }) => obj.title,
		},
	}),
});

export default ProductType;
