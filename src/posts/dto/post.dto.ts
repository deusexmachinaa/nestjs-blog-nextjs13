export class createPostDto {
  title: string;
  content: string;
}

export class deletePostDto {
  id: string;
}

export class updatePostDto {
  id: string;
  title: string;
  content: string;
}
