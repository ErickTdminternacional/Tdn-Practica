export type Entity<Identifier extends number | string> = {
    id?: Identifier;
};

export type ResponseApi<E> = {
    status: number,
    result: boolean,
    message?: string,
    entities?: E[],
    entity?: TemplateStringsArray,
};