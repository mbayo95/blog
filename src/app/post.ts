export class Post {
  title: string;
  content: string;
  loveIts: number;
  createdDat: Date;

  constructor(title: string, content: string, loveIts: number, createdDat: Date) {
    this.title = title;
    this.content = content;
    this.loveIts = loveIts;
    this.createdDat = createdDat;
  }
}
