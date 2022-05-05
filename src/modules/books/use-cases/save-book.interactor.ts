import { UseCase } from '@/kernel/contracts';
import { ResponseApi } from '@/kernel/types';
import {Book, BookSaveDto} from '@/modules/books/entities/book';
import {BookRepository} from '@/modules/books/use-cases/ports/repository/book.repository';

export class SaveBookInteractor implements UseCase<BookSaveDto, ResponseApi<Book>>{
    constructor(private readonly bookRepository : BookRepository){}
    execute(payload: BookSaveDto): Promise<ResponseApi<Book>> {
        return this.bookRepository.save(payload)
        
    }
}