import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/db/database.module';
import { FileController } from './file.controller';
import { FolderController } from './folder.controller';
import { FileService, FILE_SERVICE } from './services/file.service';
import { repositoryProviders } from './entities/repository.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [FileController, FolderController],
  providers: [
    ...repositoryProviders,
    {
      provide: FILE_SERVICE,
      useClass: FileService,
    },
  ],
})
export class IoModule {}
