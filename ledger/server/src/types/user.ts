import { GraphQLObjectType, GraphQLNonNull, GraphQLString } from "graphql";

export const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    name: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: (obj) => obj.name,
    },
  }),
});

export default UserType;
