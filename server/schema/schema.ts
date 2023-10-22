//Mongoose Models
import Project from "../models/Projects";
import Client from "../models/Client";

import {
  GraphQLList,
  GraphQLID,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLNonNull,
  GraphQLEnumType,
} from "graphql";

//client Type
const ClientType = new GraphQLObjectType({
  name: "Client",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    phone: { type: GraphQLString },
  }),
});
//project Type
const ProjectType = new GraphQLObjectType({
  name: "project",
  fields: () => ({
    id: { type: GraphQLID },
    clientId: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      async resolve(parent, args) {
        return await Client.findById(parent.clientId);
      },
    },
  }),
});

const query = new GraphQLObjectType({
  name: "query",
  fields: {
    clients: {
      type: new GraphQLList(ClientType),
      async resolve(parent, args) {
        return await Client.find();
      },
    },
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      async resolve(parent: any, args: { id: string }) {
        return await Client.findById(args.id);
      },
    },
    projects: {
      type: new GraphQLList(ProjectType),
      async resolve(parent, args) {
        return await Project.find();
      },
    },
    project: {
      type: ProjectType,
      args: { id: { type: GraphQLID }, status: { type: GraphQLString } },
      async resolve(parent: string, args: { id: string }) {
        return await Project.findById(args.id);
      },
    },
  },
});

const mutations = new GraphQLObjectType({
  name: "mutations",
  fields: {
    addClient: {
      type: ClientType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        phone: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const client = new Client({
          name: args.name,
          email: args.email,
          phone: args.phone,
        });
        return client.save();
      },
    },
    removeClient: {
      type: ClientType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(parent, args) {
        return await Client.findByIdAndRemove(args.id);
      },
    },
    updateClient: {
      type: ClientType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
      },
      async resolve(parent, args) {
        return await Client.findByIdAndUpdate(
          args.id,
          {
            $set: {
              name: args.name,
              email: args.email,
              phone: args.phone,
            },
          },
          { new: true }
        );
      },
    },
    addProject: {
      type: ProjectType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        status: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        const project = new Project({
          name: args.name,
          description: args.description,
          clientId: args.clientId,
          status: {
            type: new GraphQLEnumType({
              name: "ProjectStatus",
              values: {
                new: { value: "Not Started" },
                progress: { value: "In Progress" },
                completed: { value: "Completed" },
              },
            }),
            defaultValue: "Not Started",
          },
        });
        return project.save();
      },
    },
    removeProject: {
      type: ProjectType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
      },
      async resolve(parent, args) {
        return await Project.findByIdAndRemove(args.id);
      },
    },
    updateProject: {
      type: ClientType,
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        status: {
          type: new GraphQLEnumType({
            name: "ProjectStatus",
            values: {
              new: { value: "Not Started" },
              progress: { value: "In Progress" },
              completed: { value: "Completed" },
            },
          }),
          defaultValue: "Not Started",
        },
      },
      resolve(parent, args) {
        args.id,
          {
            $set: {
              name: args.name,
              description: args.description,
              status: args.status,
            },
          };
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: query,
  mutation: mutations,
});
