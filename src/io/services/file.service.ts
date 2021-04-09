export const FILE_SERVICE = 'IFileService';

export interface IFileService {
  /**
   * 获取所有文件
   */
  getAll(): Promise<string>;
}

export class FileService implements IFileService {
  async getAll(): Promise<string> {
    return '123';
  }
}
