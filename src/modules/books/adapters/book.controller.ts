import { Book, BookSaveDto } from '../entities/book';
import { BookRepository } from '../use-cases/ports/repository/book.repository';
import { BookStorageGateway } from './book-storage.gateway';
import { ResponseApi } from '@/kernel/types';
import { SaveBookInteractor } from '@/modules/books/use-cases/save-book.interactor';


export class BookController {
    static async saveBook(bookDto: BookSaveDto) {
        const bookRepository : BookRepository = new BookStorageGateway();
        const saveBookInteractor : SaveBookInteractor = new SaveBookInteractor(bookRepository);
        try{
            return await saveBookInteractor.execute(bookDto);
        }catch(err){
            return{
                status: 400,
                result: false,
                entities: []
            } as ResponseApi<Book>
        }
    }
}