export class Comment {
    //private _commentId: number;
    constructor(
      private _productId: number,
      private _userId: number,
      private _postingDateComment = new Date(),
      private _upVotes: number,
      private _title : string,
      private _content: string

    ) {}
  
    get productId(): number{
        return this._productId;
    }
  
    get userId(): number{
        return this._userId;
    }
    
    get postingDateComment(): Date{
        return this._postingDateComment;
    }

    get upVotes(): number{
        return this._upVotes;
    }

    get title(): string{
        return this._title;
    }

    get content(): string{
        return this._content;
    }
    
  }