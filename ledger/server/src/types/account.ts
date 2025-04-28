
import { GraphQLObjectType, GraphQLString, GraphQLFloat, GraphQLBoolean, GraphQLNonNull } from 'graphql';

const AccountType = new GraphQLObjectType({
  name: 'Account',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (obj) => obj._id || obj.id,
    },
    accountNumber: {
      type: GraphQLString,
      resolve: (obj) => obj.accountNumber,
    },
    accountType: {
      type: GraphQLString,
      resolve: (obj) => obj.accountType,
    },
    balance: {
      type: GraphQLFloat,
      resolve: (obj) => obj.balance,
    },
    owner: {
      type: GraphQLString,
      resolve: (obj) => obj.owner,
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

export default AccountType;