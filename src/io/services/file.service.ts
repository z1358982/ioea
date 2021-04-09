import { Injectable } from '@nestjs/common';

export const FILE_SERVICE = 'IFileService';

export interface IFileService {
  /**
   * 获取所有文件
   */
  getAll(): Promise<string>;
}

@Injectable()
export class FileService implements IFileService {
  async getAll(): Promise<string> {
    return '123';
  }
}
