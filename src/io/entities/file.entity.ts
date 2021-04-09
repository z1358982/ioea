import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { DataState } from './data-state';

@Entity()
export class FileEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  ext: string;

  @Column()
  location: string;

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
