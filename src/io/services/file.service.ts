import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { FileDTO } from '../dto/file.dto';
import { FileEntity } from '../entities/file.entity';
import { FILE_REPOSITORY } from '../io.module';

export const FILE_SERVICE = 'FILE_SERVICE';

export interface IFileService {
  /**
   * 获取所有文件
   */
  getAll(
    search?: string | undefined,
    sortBy?: string | undefined,
    page?: number | undefined,
    pageSize?: number | undefined,
  ): Promise<FileDTO[]>;
}

@Injectable()
export class FileService implements IFileService {
  constructor(
    @Inject(FILE_REPOSITORY)
    private readonly fileRepository: Repository<FileEntity>,
  ) {}

  async getAll(
    search?: string | undefined,
    sortBy?: string | undefined,
    page?: number | undefined,
    pageSize?: number | undefined,
  ): Promise<FileDTO[]> {
    return await this.fileRepository.find();
  }
}
