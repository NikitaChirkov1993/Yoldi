export type EditInfo = {
    name: string;
    imageId: string;
    password: string;
    slug: string;
    coverId: string;
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
