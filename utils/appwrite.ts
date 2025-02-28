import { Client, Databases, Account } from "appwrite";

const client = new Client();
client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("fms-1"); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export { ID } from 'appwrite';

// import { Client } from "appwrite";

// export const client = new Client()
//     .setEndpoint('https://cloud.appwrite.io/v1')
//     .setProject('fms-1')