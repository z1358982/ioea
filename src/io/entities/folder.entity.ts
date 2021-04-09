import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DataState } from './data-state';

@Entity()
export class FolderEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  state: DataState;

  @Column()
  owner: string;

  @Column()
  creator: string;

  @Column()
  createTime: Date;

  @Column()
  lastModified: Date;
}
