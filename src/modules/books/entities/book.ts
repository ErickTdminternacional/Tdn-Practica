import { Entity } from '@/kernel/types'

export type Book = Entity<string> & {
    description: string;
    idAuthor: string;
    name: string;
    numberPages: number;
    photo?: string;
    publishAt: Date;
};

export type BookSaveDto = {
    author: {
        id: number
    };
    description: string;
    name: string,
    numberPage: number
    photo?: string;
    publishAt: Date;
    idInstance: string;
}