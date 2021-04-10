import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DataState } from './data-state';
import { FolderEntity } from './folder.entity';

@Entity('file')
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

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  lastModified: Date;

  @Column({ nullable: true })
  folderId?: number | null | undefined;

  @ManyToMany(() => FolderEntity, (f) => f.files)
  folder: FolderEntity;
}
