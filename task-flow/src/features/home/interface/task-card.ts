// TODO: デッドラインに日付型を使用する
export interface TaskCard {
  readonly id: number;
  readonly title: string;
  readonly assignee: string;
  readonly deadline: string;
}
