import { GraphQLSchema } from "graphql";
import { mutation } from "./mutation";
import { subscription } from "./subscription";
import { query } from "./query";

export default new GraphQLSchema({
  query: query,
  mutation: mutation,
  // subscription: subscription,
});
