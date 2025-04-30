import { GraphQLObjectType, GraphQLString } from "graphql";
import {GraphQLBoolean} from "graphql/type";

export const UserType = new GraphQLObjectType({
  name: 'User',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (obj) => obj._id || obj.id,
    },
    name: {
      type: GraphQLString,
      resolve: (obj) => obj.name,
    },
    email: {
      type: GraphQLString,
      resolve: (obj) => obj.email,
    },
    isActive: {
      type: GraphQLBoolean,
      resolve: (obj) => obj.isActive,
    },
    createdAt: {
      type: GraphQLString,
      resolve: (obj) => obj.createdAt.toISOString(),
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (obj) => obj.updatedAt.toISOString(),
    },
  }),
});
