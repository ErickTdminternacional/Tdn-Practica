import { Book, BookSaveDto } from '@/modules/books/entities/book';
import { BookRepository } from '@/modules/books/use-cases/ports/repository/book.repository';
import {ResponseApi} from '@/kernel/types';
import Api from '@/kernel/http-client.gateway';

export class BookStorageGateway implements BookRepository{

    async save(bookDto: BookSaveDto) : Promise<ResponseApi<Book>>{
        const {status, data} = await Api.doPost(`/book/create/${bookDto.idInstance}`, bookDto);
        return{
            status,
            result: data.created
        }
    }
}