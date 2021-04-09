import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/database.module';
import { DATABASE_CONNECTION } from 'src/db/database.providers';
import { Connection } from 'typeorm';
import { FileEntity } from './entities/file.entity';
import { FolderEntity } from './entities/folder.entity';
import { RecyclebinEntity } from './entities/recyclebin.entity';
import { FileController } from './file.controller';
import { FolderController } from './folder.controller';
import { FileService, FILE_SERVICE } from './services/file.service';

export const FILE_REPOSITORY = 'FILE_REPOSITORY';
export const FOLDER_REPOSITORY = 'FOLDER_REPOSITORY';
export const RECYCLEBIN_REPOSITORY = 'RECYCLEBIN_REPOSITORY';

@Module({
  imports: [DatabaseModule],
  controllers: [FileController, FolderController],
  providers: [
    {
      provide: FILE_REPOSITORY,
      useFactory: (connection: Connection) =>
        connection.getRepository(FileEntity),
      inject: [DATABASE_CONNECTION],
    },
    {
      provide: FOLDER_REPOSITORY,
      useFactory: (connection: Connection) =>
        connection.getRepository(FolderEntity),
      inject: [DATABASE_CONNECTION],
    },
    {
      provide: RECYCLEBIN_REPOSITORY,
      useFactory: (connection: Connection) =>
        connection.getRepository(RecyclebinEntity),
      inject: [DATABASE_CONNECTION],
    },
    {
      provide: FILE_SERVICE,
      useClass: FileService,
    },
  ],
})
export class IoModule {}
