import { Book, BookSaveDto } from '@/modules/books/entities/book';
import { ResponseApi } from '@/kernel/types';

export interface BookRepository {
    save(bookDto: BookSaveDto): Promise<ResponseApi<Book>>
};