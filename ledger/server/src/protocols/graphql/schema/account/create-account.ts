
import {
  GraphQLInputObjectType,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull,
  GraphQLBoolean, GraphQLInt,
} from "graphql";
import {AccountType} from "../../types";

export const CreateAccountInputType = new GraphQLInputObjectType({
  name: "CreateAccountInput",
  fields: () => ({
    accountNumber: {
      type: new GraphQLNonNull(GraphQLString),
    },
    accountType: {
      type: new GraphQLNonNull(GraphQLString),
    },
    owner: {
      type: new GraphQLNonNull(GraphQLString),
    },
    balance: {
      type: GraphQLInt,
    },
    isActive: {
      type: GraphQLBoolean,
    },
  }),
});

export const CreateAccountPayloadType = new GraphQLObjectType({
  name: "CreateAccountPayload",
  fields: () => ({
    account: {
      type: AccountType,
    },
  }),
});