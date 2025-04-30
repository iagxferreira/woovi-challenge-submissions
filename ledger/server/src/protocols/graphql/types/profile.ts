import { GraphQLObjectType, GraphQLString } from 'graphql';

export const ProfileType = new GraphQLObjectType({
  name: 'Profile',
  fields: () => ({
    id: {
      type: GraphQLString,
      resolve: (obj: any) => obj.id || obj.id,
    },
    firstName: {
      type: GraphQLString,
      resolve: (obj: any) => obj.firstName,
    },
    lastName: {
      type: GraphQLString,
      resolve: (obj: any) => obj.lastName,
    },
    phoneNumber: {
      type: GraphQLString,
      resolve: (obj: any) => obj.phoneNumber,
    },
    address: {
      type: GraphQLString,
      resolve: (obj: any) => obj.address,
    },
    dateOfBirth: {
      type: GraphQLString,
      resolve: (obj: any) => obj.dateOfBirth?.toISOString(),
    },
    createdAt: {
      type: GraphQLString,
      resolve: (obj: any) => obj.createdAt.toISOString(),
    },
    updatedAt: {
      type: GraphQLString,
      resolve: (obj: any) => obj.updatedAt.toISOString(),
    },
  }),
});
