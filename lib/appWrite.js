import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platform: 'com.dev',
    projectId: '66b6a0280018032a0b34',
    databaseId: '66b787ae001ab76c2d0d',
    usersCollectionId: '66b787f1000980e53cd9',
    videoCollectionId: '66b7880f001ac13fe78a',
    storageId: '66b8906b0025084270f6',
};

// Init your React Native SDK
const client = new Client();
const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
;

export const createUser = async (email, password, username) => {
    try {
        const newAccount = await account.create(
            ID.unique(),
            email,
            password,
            username
        );
        if (!newAccount) throw Error;

        const avatarUrl = avatars.getInitials(username);

        const newUser = await databases.createDocument(
            config.databaseId,
            config.usersCollectionId,
            ID.unique(),
            {
                accountID: newAccount.$id,
                username,
                email,
                avatar: avatarUrl,
            }
        );

        return newUser;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
};

export async function Signin(email, password) {
    try {
        const session = await account.createEmailPasswordSession(email, password);
        return session;
    } catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();
        if (!currentAccount) throw new Error();

        const currentUser = await databases.listDocuments(
            config.databaseId,
            config.usersCollectionId,
            [Query.equal('accountId', currentAccount.$id)]
        );
        if (!currentUser) throw Error;

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
    }
};
