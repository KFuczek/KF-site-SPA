export interface DB_object<T> {
  Item: T;
}

export interface StandardTextItem {
  Title: string;
  Text: string;
  Category: string;
  ExtendedTitle: string;
}

export interface Quote {
  text: string;
  author: string;
}
