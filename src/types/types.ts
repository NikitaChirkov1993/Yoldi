export type EditInfo = {
    name: string;
    imageId: string | null;
    password: string;
    slug: string;
    coverId: string | null;
    description: string;
}

export type User = {
    name: string,
    email: string,
    slug: string,
    description: string,
    image: {
        id: string,
        url: string,
        width: string,
        height: string
    },
    cover: {
        id: string,
        url: string,
        width: string,
        height: string
    }
}

export type AuthInfo = {
    email: string;
    password: string;
}

export type RegInfo = {
    email: string;
    name: string;
    password: string;
}

export type ErrorType = {
    statusCode?: number;
    message?: string;
    error?: string;
};
