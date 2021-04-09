import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { FolderController } from './folder.controller';
import { FileService, FILE_SERVICE } from './services/file.service';

@Module({
  imports: [],
  controllers: [FileController, FolderController],
  providers: [
    {
      provide: FILE_SERVICE,
      useClass: FileService,
    },
  ],
})
export class IoModule {}
